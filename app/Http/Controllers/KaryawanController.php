<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Booking;
use App\Models\User;
use App\Models\Booking_Transaction;
class KaryawanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bookings = Booking::with([
            'user' => function ($query) {
                $query->select('id', 'name', 'phone');
            }
        ])
            ->where('status', 'pending')
            ->get()
            ->map(function ($booking) {
                return [
                    'id_user' => $booking->user->id,
                    'id' => $booking->id,
                    'room' => $booking->room,
                    'series' => $booking->ps,
                    'datetime' => \Carbon\Carbon::parse($booking->booking_time)->format('d/m/Y - H:i'),
                    'customer_note' => $booking->note,
                    'customer_name' => $booking->user->name ?? 'Unknown',
                    'phone' => "0" . $booking->user->phone ?? '0'
                ];
            });
        return Inertia::render('admin-panel', [
            'bookings' => $bookings
        ]);
    }
    public function booking()
    {
        $bookings = Booking::with([
            'user' => function ($query) {
                $query->select('id', 'name', 'phone');
            }
        ])
            ->where('status', 'accept')
            ->get()
            ->map(function ($booking) {
                return [
                    'id_user' => $booking->user->id,
                    'id' => $booking->id,
                    'room' => $booking->room,
                    'series' => $booking->ps,
                    'datetime' => \Carbon\Carbon::parse($booking->booking_time)->format('d/m/Y - H:i'),
                    'customer_note' => $booking->note,
                    'customer_name' => $booking->user->name ?? 'Unknown',
                    'phone' => "0" . $booking->user->phone ?? '0'
                ];
            });
        return Inertia::render('booking-list', [
            'bookings' => $bookings
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        dd($request);
        $validation = $request->validate([
            "answer" => ['required'],
            "id_customer" => ['required']
        ]);
        Booking::find($id)->update([
            "status" => $request->answer,
        ]);
        // $transction = Booking_Transaction::where('id_customer',$request->id_customer)->first();
        // if(!empty($transction)){
        //     if($transction->more >= 2){
        //         $transction->update([
        //             "status"=>''
        //         ]);
        //     }
        // }
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
