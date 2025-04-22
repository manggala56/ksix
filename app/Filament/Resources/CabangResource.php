<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CabangResource\Pages;
use App\Filament\Resources\CabangResource\RelationManagers;
use App\Models\Cabang;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CabangResource extends Resource
{
    protected static ?string $model = Cabang::class;

    protected static ?string $navigationIcon = 'heroicon-o-building-office';
    protected static ?string $modelLabel = 'Cabang';
    protected static ?string $navigationLabel = 'Manajemen Cabang';
    protected static ?string $slug = 'cabang';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Informasi Cabang')
                    ->schema([
                        Forms\Components\TextInput::make('nama')
                            ->label('Nama Cabang')
                            ->required()
                            ->maxLength(255),

                        Forms\Components\TextInput::make('alamat')
                            ->label('Alamat')
                            ->required()
                            ->maxLength(255),

                        Forms\Components\TextInput::make('telepon')
                            ->label('Nomor Telepon')
                            ->tel()
                            ->required()
                            ->maxLength(20),
                    ])->columns(1),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
        ->columns([
            Tables\Columns\TextColumn::make('nama')
                ->label('Nama Cabang')
                ->searchable()
                ->sortable(),

            Tables\Columns\TextColumn::make('alamat')
                ->label('Alamat')
                ->searchable(),

            Tables\Columns\TextColumn::make('telepon')
                ->label('Telepon')
                ->searchable(),

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

    // public static function getRelations(): array
    // {
    //     return [
    //         RelationManagers\KaryawansRelationManager::class,
    //     ];
    // }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCabangs::route('/'),
            'create' => Pages\CreateCabang::route('/create'),
            'edit' => Pages\EditCabang::route('/{record}/edit'),
        ];
    }
}
