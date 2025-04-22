<?php

namespace App\Filament\Resources;

use App\Filament\Resources\KaryawanResource\Pages;
use App\Filament\Resources\KaryawanResource\RelationManagers;
use App\Models\Cabang;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class KaryawanResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-group';
    protected static ?string $modelLabel = 'Karyawan';
    protected static ?string $navigationLabel = 'Manajemen Karyawan';
    protected static ?string $slug = 'karyawan';
    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()->where('role', 'karyawan');
    }
    public static function form(Form $form): Form
    {
        return $form
        ->schema([
            Forms\Components\Section::make('Informasi Karyawan')
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
                        Forms\Components\Hidden::make('role')
                        ->default('karyawan'),
                    Forms\Components\Select::make('cabang_id')
                        ->label('Cabang')
                        ->options(Cabang::all()->pluck('nama', 'id'))
                        ->required()
                        ->searchable()
                        ->preload()
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
            Tables\Columns\TextColumn::make('cabang.nama')
                ->label('Cabang')
                ->searchable()
                ->sortable(),
            Tables\Columns\TextColumn::make('created_at')
                ->label('Tanggal Dibuat')
                ->dateTime()
                ->sortable(),
            ])

            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
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
            'index' => Pages\ListKaryawans::route('/'),
            'create' => Pages\CreateKaryawan::route('/create'),
            'edit' => Pages\EditKaryawan::route('/{record}/edit'),
        ];
    }
}
