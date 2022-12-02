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

use App\Models\CustomerOrderTicket;
use Illuminate\Support\Facades\Auth;

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

        // $user_orders = Auth::user()->orders;
        // $tickets = [];
        // $orders = [];
        // foreach ($user_orders as $order) {
        //     $ticket = $order->tickets->first();
        //     $item =  Concert::where('id', $ticket->concert_id)->first();
        //     array_push($tickets, $ticket);
        //     array_push($orders, $item);
        // }
        // $concerts =  array_unique($orders);
        // $concerts =  array_values((array)$concerts);

        // rsort($concerts);

        // return response()->json([
        //     'status' => 200,
        //     'tickets' => $tickets,
        //     'concerts' => $concerts,
        // ]);
        // ---------------------------------------------------
        // return "hi";
        // $concerts = Concert::whereRelation('tickets', 'user_id', Auth::user()->id)->get();
        $concerts = Concert::withWhereHas('tickets', function ($query) {
            $query->where('user_id', Auth::user()->id);
        })->get();
        // $concerts->withWhereHas('tickets', function ($query) {
        //     $query->where('user_id', Auth::user()->id);
        // })->get();
        // $concerts->whereRelation('tickets', 'user_id', Auth::user()->id)->first();
        // foreach ($concerts as $concert) {
        //     // $concert->tickets;
        //     $concert->tickets->where('user_id',  Auth::user()->id)->get();
        //     //     $concert->whereRelation('tickets', 'user_id', Auth::user()->id)->first();
        // }
        return response()->json([
            'status' => 200,
            'tickets' => $concerts,
            'id' => Auth::user()->id,
            // 'concerts' => $concerts,
            // 'lala' => $qqq
        ]);
    }

    public function buyTickets(Request $request)
    {
        // tickets
        $allTickets = $request->cart;
        $newCart = [];
        for ($i = 0; $i < count($allTickets); $i++) {
            $ticket =  Ticket::create([
                'serial_num' => $request->serialNum . $i,
                'ticket_category_id' => $allTickets[$i],
                'seat' => "1",
                'concert_id' => $request->concert,
                'user_id' => Auth::user()->id,
            ]);
            array_push($newCart, $ticket->id);
        }

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
