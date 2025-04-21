<?php

namespace App\Filament\Owner\Widgets;

use App\Models\User;
use Filament\Widgets\ChartWidget;
use Flowframe\Trend\Trend;
use Flowframe\Trend\TrendValue;

class UserRegistrationChart extends ChartWidget
{
    protected static ?string $heading = 'Registrasi User';
    protected static ?string $pollingInterval = '30s';

    protected function getData(): array
    {
        // Filter data sebelum membuat trend
        $userdata = User::where('role', 'user');

        $userData = Trend::query($userdata)
            ->between(
                start: now()->subMonth(),
                end: now(),
            )
            ->perDay()
            ->count();

        return [
            'datasets' => [
                [
                    'label' => 'User Regular',
                    'data' => $userData->map(fn (TrendValue $value) => $value->aggregate),
                    'backgroundColor' => '#4CAF50',
                    'borderColor' => '#4CAF50',
                ],
            ],
            'labels' => $userData->map(fn (TrendValue $value) => $value->date),
        ];
    }
    protected function getType(): string
    {
        return 'line';
    }
}