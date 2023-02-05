<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use App\Models\Concert;
use App\Models\Payment;
use App\Models\TicketOrder;
use Illuminate\Http\Request;
use App\Models\CustomerOrder;
use function PHPSTORM_META\map;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Models\CustomerOrderTicket;
use Illuminate\Support\Facades\Auth;

use PDF;

class UsersController extends Controller
{
    //  QR9JFQN8MJQ - B9

    public function userPayments()
    {
        // fix : add concert col to the bill
        // just the payments history
        // $payment = Auth::user()->payments;
        $payment =  Payment::withWhereHas('concert')->where('user_id', Auth::user()->id)->get();

        return response()->json([
            'status' => 200,
            'payments' => $payment,
        ]);
    }
    public function ticketsWConcerts()
    {
        $userId = Auth::user()->id;

        $concerts = Concert::whereHas('tickets', function ($query) use ($userId) {
            $query->where('user_id', $userId)->whereHas('category');
        })->with(['tickets' => function ($query) use ($userId) {
            $query->where('user_id', $userId)->with('category');
        }])->get()->reverse()->values();

        return response()->json([
            'status' => 200,
            'tickets' => $concerts,
            'id' => $userId,
        ]);
    }
    // public function sendEmail()
    // {

    //     $con =  Concert::find('1');
    //     // Compress the image
    //     $data["email"] = "azzam@gmail.com";
    //     $data["title"] = "From Ticketin.com";
    //     $data["body"] = "This is Demo";
    //     $data["img"] = $con->banner;

    //     $pdf = PDF::loadView('emails.ticketPdf', $data);

    //     Mail::send('emails.email', $data, function ($message) use ($data, $pdf) {
    //         $message->to($data["email"], $data["email"])
    //             ->subject($data["title"])
    //             ->attachData($pdf->output(), "text.pdf");
    //     });
    //     return response()->json([
    //         'status' => 200,
    //         'done' => "Asdas"
    //     ]);
    // }
    public function buyTickets(Request $request)
    {
        // tickets
        $allTickets = $request->cart;
        $newCart = [];
        $ticketss = [];
        for ($i = 0; $i < count($allTickets); $i++) {
            $ticket =  Ticket::create([
                'serial_num' => $request->serialNum . $i,
                'ticket_category_id' => $allTickets[$i],
                'seat' => "1",
                'concert_id' => $request->concert,
                'user_id' => Auth::user()->id,
            ]);
            array_push($newCart, $ticket->id);
            array_push($ticketss, $ticket);
        }
        $data["email"] = Auth::user()->email;
        $data["title"] = "From Ticketin.com";
        $data["body"] = "Thank you for your purchase";
        $pdfs = [];
        for ($i = 0; $i < count($ticketss); $i++) {
            $data['serial_num'] = $ticketss[$i]->serial_num;
            $data['class'] = $ticketss[$i]->category;
            $data['note'] = $ticketss[$i]->note;
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

        // payments
        // $cardInfo = json_decode($request->card, true);
        $cardInfo = json_encode($request->card);
        $payment = Payment::create([
            'user_id' => Auth::user()->id,
            'concert_id' => $request->concert,
            'total' => $request->totalPrice,
            'card_num' => $cardInfo,
        ]);

        // customer_orders
        $order = CustomerOrder::create([
            'user_id' => Auth::user()->id,
            'payment_id' => $payment->id,
            'total_price' => $request->totalPrice,
            'discount' =>  0,
        ]);

        // customer_order_ticket
        for ($i = 0; $i < count($newCart); $i++) {
            $TOrders = CustomerOrderTicket::create([
                'customer_order_id' => $order->id,
                'ticket_id' => $newCart[$i],
            ]);
        }

        if (count($newCart) === count($newCart) && $payment && $order && $TOrders) {

            return response()->json([
                'status' => 200,
            ]);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
