<?php

namespace App\Http\Controllers;

use App\Models\Concert;
use App\Models\CustomerOrder;
use App\Models\Payment;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

use function PHPSTORM_META\map;

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
