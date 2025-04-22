<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Booking;
use App\Models\User;
class KaryawanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bookings = Booking::with(['user' => function($query) {
            $query->select('id', 'name');
        }])
        ->where('status', 'pending')
        ->get()
        ->map(function ($booking) {
            return [
                'id' => $booking->id,
                'room' => $booking->room,
                'series' => $booking->ps,
                'datetime' => \Carbon\Carbon::parse($booking->booking_time)->format('d/m/Y - H:i'),
                'customer_note' => $booking->note,
                'customer_name' => $booking->user->name ?? 'Unknown'
            ];
        });

        return Inertia::render('admin-panel', [
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
