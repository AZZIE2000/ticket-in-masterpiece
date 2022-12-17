<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Concert;
use App\Models\Payment;
use App\Models\Ticket;
use App\Models\TicketCategory;
use Illuminate\Http\Request;

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
        $ticket->user;
        $ticket->category;
        $ticket->concert->categories;
        return response()->json([
            'status' => 200,
            'ticket' => $ticket,

        ]);
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
}
