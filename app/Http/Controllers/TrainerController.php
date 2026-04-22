<?php

namespace App\Http\Controllers;

use App\Models\Trainer;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class TrainerController extends Controller
{
    public function index(): Response
    {
        $trainers = Trainer::query()
            ->when(
                request('search'),
                fn ($query, $search) => $query->where(function ($subQuery) use ($search) {
                    $subQuery->where('name', 'like', "%{$search}%")
                        ->orWhere('expertise', 'like', "%{$search}%");
                })
            )
            ->select('id', 'name', 'photo', 'expertise', 'biodata')
            ->latest()
            ->paginate(9)
            ->withQueryString();

        return Inertia::render('Dashboard/Trainers/Index', [
            'trainers' => $trainers,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Dashboard/Trainers/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'expertise' => ['required', 'string', 'max:255'],
            'biodata' => ['nullable', 'string'],
            'photo' => ['nullable', 'image', 'max:4096'],
        ]);

        if ($request->hasFile('photo')) {
            $request->file('photo')->storeAs('public/trainers', $request->file('photo')->hashName());
            $data['photo'] = $request->file('photo')->hashName();
        }

        Trainer::create($data);

        return to_route('trainers.index');
    }

    public function edit(Trainer $trainer): Response
    {
        return Inertia::render('Dashboard/Trainers/Edit', [
            'trainer' => $trainer,
        ]);
    }

    public function update(Request $request, Trainer $trainer): RedirectResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'expertise' => ['required', 'string', 'max:255'],
            'biodata' => ['nullable', 'string'],
            'photo' => ['nullable', 'image', 'max:4096'],
        ]);

        if ($request->hasFile('photo')) {
            if (filled($trainer->photo) && ! str_starts_with($trainer->photo, 'http://') && ! str_starts_with($trainer->photo, 'https://')) {
                Storage::disk('local')->delete('public/trainers/' . basename($trainer->photo));
            }

            $request->file('photo')->storeAs('public/trainers', $request->file('photo')->hashName());
            $data['photo'] = $request->file('photo')->hashName();
        }

        $trainer->update($data);

        return to_route('trainers.index');
    }

    public function destroy(string $id): RedirectResponse
    {
        $ids = explode(',', $id);

        $trainers = Trainer::query()->whereIn('id', $ids)->get();

        foreach ($trainers as $trainer) {
            if (filled($trainer->photo) && ! str_starts_with($trainer->photo, 'http://') && ! str_starts_with($trainer->photo, 'https://')) {
                Storage::disk('local')->delete('public/trainers/' . basename($trainer->photo));
            }
        }

        Trainer::query()->whereIn('id', $ids)->delete();

        return back();
    }
}
