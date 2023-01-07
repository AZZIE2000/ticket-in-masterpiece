<?php

namespace App\Http\Controllers;

use PDF;
use App\Models\Type;
use App\Models\User;
use App\Mail\SendMail;
use App\Models\Ticket;
use App\Models\Concert;
use App\Models\Payment;
use Illuminate\Http\Request;
use App\Models\TicketCategory;

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
}
