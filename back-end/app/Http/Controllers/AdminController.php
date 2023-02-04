<?php

namespace App\Http\Controllers;

use PDF;
use App\Models\Type;
use App\Models\User;
use App\Mail\SendMail;
use App\Models\Ticket;
use App\Models\Concert;
use App\Models\Payment;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

use App\Models\CustomerOrder;
use App\Models\TicketCategory;
use App\Models\CustomerOrderTicket;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Mail;
use Intervention\Image\Facades\Image;



class AdminController extends Controller
{
    public function concertsList()
    {
        // Retrieve all concerts from the database
        $concerts = Concert::all();

        // Sort the concerts by the start date
        $sortedConcerts = $concerts->sortBy('start_date');
        $concertsWithoutKeys = $sortedConcerts->values();
        return response()->json([
            'status' => 200,
            'concerts' => $concertsWithoutKeys,
        ]);
    }
    public function concertInfo(Request $request)
    {

        $concert = Concert::find($request->id);
        $categories = $concert->categories;
        $categories->loadCount('tickets');


        $tickets = Ticket::with(['user' => function ($query) {
            $query->select('id', 'name', 'email');
        }])->with(['category' => function ($query) {
            $query->select('id', 'class');
        }])->where('concert_id', $request->id)->get();
        $totalSales = Payment::where('concert_id', $request->id)->sum('total');
        $totalCustomers = User::whereHas('payments')->count();
        $totalTickets = Ticket::where('concert_id', $request->id)->count();
        return response()->json([
            'status' => 200,
            'concert' => $concert,
            'seats' => $concert->seats,
            'tickets' => $tickets,
            'sales' => $totalSales,
            'customers' => $totalCustomers,
            'totalTicketsNum' => $totalTickets,

        ]);
    }
    public function getTicket(Request $request)
    {
        $ticket = Ticket::where(function ($query) use ($request) {
            $query->where('serial_num', 'like', '%' . $request->serial . '%');
        })->first();
        if ($ticket) {
            # code...


            $ticket->user;
            $ticket->category;
            $ticket->concert->categories;
            return response()->json([
                'status' => 200,
                'ticket' => $ticket,

            ]);
        } else {
            return response()->json([
                'status' => 500,
                'ticket' => "bruh",

            ]);
        }
    }

    public function updateCategoryInfo(Request $request)
    {
        TicketCategory::where('id', $request->id)->update([$request->key => $request->newVal]);
        $concert = Concert::find($request->id);
        $categories = $concert->categories;
        $categories->loadCount('tickets');
        return response()->json([
            'status' => 200,
            'concert' => $concert,

        ]);
    }
    public function updateTicketInfo(Request $request)
    {

        Ticket::where('id', $request->id)->update([$request->key => $request->val]);
        $ticket = Ticket::find($request->id);
        $ticket->user;
        $ticket->category;
        $ticket->concert->categories;
        return response()->json([
            'status' => 200,
            'ticket' => $ticket,

        ]);
    }
    public function addCategory(Request $request)
    {
        $data = [
            'class' => $request->class,
            'description' => $request->description,
            'area' => $request->area,
            'price' => $request->price,
            'seats' => $request->seats,
            'concert_id' => $request->concert_id,
        ];
        TicketCategory::create($data);
        $concert = Concert::find($request->concert_id);
        $concert->categories;
        return response()->json([
            'status' => 200,
            'concert' => $concert,

        ]);
    }
    public function addConcert(Request $request)
    {
        $file = $request->file('banner');
        $filename = uniqid() . "_" . $file->getClientOriginalName();
        $file->move(public_path('public/images'), $filename);
        $url = URL::to('/') . '/public/images/' . $filename;

        $concert = Concert::create([
            "name" => $request->name,
            "start_date" => $request->start_date,
            "end_date" => $request->end_date,
            "location" => $request->location,
            "info" => $request->info,
            "map" => $request->map,
            "time" => $request->time,
            "seats" => $request->seats,
            "banner" => $url,
            "type_id" => $request->type_id,
            "description" => $request->description,


        ]);
        return $this->concertsList();
    }
    public function editConcertInfo(Request $request)
    {
        Concert::where('id', $request->id)->update([$request->key => $request->val]);
        return response()->json([
            'status' => 200,
            'concert' => "shatoor",

        ]);
    }
    public function editConcertInfoImg(Request $request)
    {
        $file = $request->file('banner');
        $filename = uniqid() . "_" . $file->getClientOriginalName();
        $file->move(public_path('public/images'), $filename);
        $url = URL::to('/') . '/public/images/' . $filename;
        Concert::where('id', $request->id)->update(['banner' => $url]);
        return response()->json([
            'status' => 200,
            'concert' => "shatoor",

        ]);
    }
    public function typesList()
    {
        $types = Type::all();
        return response()->json([
            'status' => 200,
            'types' => $types,
        ]);
    }
    public function scanTicket(Request $request)
    {
        $scan =   Ticket::where('serial_num', $request->id)->update(['scanned' => true]);
        if ($scan) {
            return response()->json([
                'status' => 200,
                'done' => "good",
            ]);
        } else {
            return response()->json([
                'status' => 200,
                'done' => "bad",
            ]);
        }
    }
    public function sendEmail()
    {
        $con =  Concert::find('1');
        // Compress the image
        $data["email"] = "azzam@gmail.com";
        $data["title"] = "From Ticketin.com";
        $data["body"] = "This is Demo";
        $data["img"] = $con->banner;

        $pdf = PDF::loadView('emails.ticketPdf', $data);

        Mail::send('emails.email', $data, function ($message) use ($data, $pdf) {
            $message->to($data["email"], $data["email"])
                ->subject($data["title"])
                ->attachData($pdf->output(), "text.pdf");
        });
        return response()->json([
            'status' => 200,
            'done' => "Asdas"
        ]);
    }
    public function graph(Request $request)
    {
        $tickets = Ticket::where('concert_id', $request->id)->get();

        $dates = $tickets->groupBy(function ($ticket) {
            return $ticket->created_at->format('Y-m-d');
        });

        $data = [];
        $days = [];
        foreach ($dates as $date => $tickets) {
            $days[] = $date;
            $data[] = count($tickets);
        }

        return response()->json([
            'status' => 200,
            'data' =>  [$data, $days],

        ]);
    }
    // {
    //     ticket_category_id: "",
    //     seat: "",
    //     note: "",
    //     price: 0,
    //     cash: true,
    //     last_4: "",
    //     card_type: "visa",
    //     number_of_tickets: 1,
    //     phone: "",
    //     sold_from: 'pos',
    //     invitation: true,
    //     user_email: "",
    //     concert_id: concertData?.concert?.id,

    // }
    // {"brand":"visa","country":"JO","last4":"4242"}
    public function pos(Request $request)
    {
        $TotalPrice = $request->price * $request->number_of_tickets;
        $tickets = [];
        $user = User::where('email', $request->user_email)->first();
        $serial_num = Str::random(32);
        if ($user) {
            $user = ["id" => $user->id];
        } else {
            $user = ["id" => 99];
        }
        for ($i = 0; $i < $request->number_of_tickets; $i++) {
            $ticket =  Ticket::create([
                'serial_num' => $serial_num . $i,
                'ticket_category_id' => $request->ticket_category_id,
                'seat' => $request->seat,
                'note' => "WTF",
                'sold_from' => $request->note,
                'invitation' => $request->invitation,
                'concert_id' => $request->concert_id,
                'user_id' => $user['id'],
            ]);

            array_push($tickets, $ticket);
        }
        $card_info = "{\"brand\":\"$request->card_type\",\"country\":\"JO\",\"last4\":\"$request->last_4\"}";

        $payment = Payment::create([
            'user_id' => $user["id"],
            'concert_id' => $request->concert_id,
            'total' => $TotalPrice,
            'card_num' => $card_info,
        ]);

        // customer_orders
        $order = CustomerOrder::create([
            'user_id' => $user["id"],
            'payment_id' => $payment->id,
            'total_price' => $TotalPrice,
            'discount' =>  0,
        ]);
        for ($i = 0; $i < count($tickets); $i++) {
            $TOrders = CustomerOrderTicket::create([
                'customer_order_id' => $order->id,
                'ticket_id' => $tickets[$i]->id,
            ]);
        }
        $data["email"] = $request->user_email;
        $data["title"] = "From Ticketin.com";
        $data["body"] = "Thank you for your purchase";
        $pdfs = [];
        for ($i = 0; $i < count($tickets); $i++) {
            $data['serial_num'] = $tickets[$i]->serial_num;
            $data['class'] = $tickets[$i]->category;
            $data['note'] = $tickets[$i]->note;
            $pdf = PDF::loadView('emails.ticketPdf', $data);
            array_push($pdfs, $pdf);
        }


        Mail::send('emails.email', $data, function ($message) use ($data, $pdfs) {
            $message->to($data["email"], $data["email"])
                ->subject($data["title"]);

            foreach ($pdfs as $key => $pdf) {
                $message->attachData($pdf->output(), 'Ticket' . $key++ . '.pdf');
            }
        });
        return response()->json([
            'status' => 200,
            'message' => "done",
        ]);
    }



    public function getTypes()
    {
        return response()->json([
            'status' => 200,
            'data' => Type::all(),
        ]);
    }
    public function editTypes(Request $request)
    {
        Type::find($request->id)->update(['title' => $request->data]);
        return response()->json([
            'status' => 200,
        ]);
    }
    public function deleteTypes(Request $request)
    {
        Type::find($request->id)->delete();
        return response()->json([
            'status' => 200,
            'data' => Type::all(),
        ]);
    }
    public function addTypes(Request $request)
    {
        Type::create(['title' => $request->data]);
        return response()->json([
            'status' => 200,
            'data' => Type::all(),
        ]);
    }
}
