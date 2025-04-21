<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Actions\Action;
use Illuminate\Support\Facades\Hash;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-users';
    protected static ?string $modelLabel = 'User';
    protected static ?string $navigationLabel = 'Manajemen User';
    protected static ?string $slug = 'user';

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()->where('role', 'user');
    }
    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Informasi User')
                ->schema([
                    Forms\Components\TextInput::make('name')
                        ->label('Nama Lengkap')
                        ->required()
                        ->maxLength(255),

                    Forms\Components\TextInput::make('phone')
                        ->label('Nomor Telepon')
                        ->tel()
                        ->required()
                        ->maxLength(20),

                    Forms\Components\TextInput::make('password')
                        ->password()
                        ->required(fn (string $context): bool => $context === 'create')
                        ->maxLength(255)
                        ->dehydrated(fn (?string $state): bool => filled($state))
                        ->label('Password'),
                ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                ->label('Nama')
                ->searchable()
                ->sortable(),

            Tables\Columns\TextColumn::make('phone')
                ->label('Telepon')
                ->searchable(),

            Tables\Columns\TextColumn::make('created_at')
                ->label('Tanggal Dibuat')
                ->dateTime()
                ->sortable(),
            ])
            ->filters([
                Tables\Filters\Filter::make('created_at')
                ->form([
                    Forms\Components\DatePicker::make('created_from')
                        ->label('Dari Tanggal'),
                    Forms\Components\DatePicker::make('created_until')
                        ->label('Sampai Tanggal'),
                ])
                ->query(function (Builder $query, array $data): Builder {
                    return $query
                        ->when(
                            $data['created_from'],
                            fn (Builder $query, $date): Builder => $query->whereDate('created_at', '>=', $date),
                        )
                        ->when(
                            $data['created_until'],
                            fn (Builder $query, $date): Builder => $query->whereDate('created_at', '<=', $date),
                        );
                }),
            ])
            ->actions([
                // Tables\Actions\EditAction::make(),
                Action::make('resetPassword')
                ->label('Reset Password')
                ->icon('heroicon-o-key')
                ->action(function (User $record) {
                    $record->update([
                        'password' => Hash::make('admin123')
                    ]);

                    Notification::make()
                        ->title('Password berhasil direset')
                        ->body('Password baru: admin123')
                        ->success()
                        ->send();
                })
                ->requiresConfirmation()
                ->modalHeading('Reset Password')
                ->modalDescription('Apakah Anda yakin ingin reset password user ini? Password akan diubah ke "admin123".')
                ->modalSubmitActionLabel('Ya, Reset')
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }
}
