<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RedirectRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next,): Response
    {
        $role = auth()->user()->role;
        switch ($role) {
            case 'owner':
            return redirect('/owner');
                break;
            case 'user':
            return redirect('/booking');
                break;
            default:
            return redirect('/');
                break;
        }
        return $next($request);
    }
}
