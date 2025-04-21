<?php

namespace App\Filament\Owner\Widgets;

use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class UserStatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Karyawan', User::where('role', 'karyawan')->count())
                ->description('Jumlah karyawan aktif')
                ->icon('heroicon-o-users')
                ->color('primary'),

            Stat::make('Total User', User::where('role', 'user')->count())
                ->description('Jumlah user')
                ->icon('heroicon-o-user')
                ->color('success')
                ->chart([7, 2, 10, 3, 15, 4, 17]),

            Stat::make('Karyawan Baru', User::where('role', 'karyawan')
                ->where('created_at', '>=', now()->subMonth())
                ->count())
                ->description('30 hari terakhir')
                ->icon('heroicon-o-arrow-trending-up')
                ->color('warning'),
        ];
    }
}