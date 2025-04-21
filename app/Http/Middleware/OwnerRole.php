<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class OwnerRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->check() && auth()->user()->role === 'owner') {
            return $next($request);
        }
        elseif(auth()->check() && auth()->user()->role !== 'owner'){
            auth()->logout();
            return redirect()->route('login');
        }
        return $next($request);
    }
}
