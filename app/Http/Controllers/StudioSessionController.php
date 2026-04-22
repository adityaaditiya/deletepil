<?php

namespace App\Http\Controllers;

use App\Models\StudioSession;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class StudioSessionController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard/StudioSessions/Index', [
            'studioSessions' => StudioSession::query()->latest()->get(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validateData($request);

        if ($request->hasFile('image')) {
            $request->file('image')->storeAs('public/sessions', $request->file('image')->hashName());
            $data['image'] = $request->file('image')->hashName();
        }

        StudioSession::create($data);

        return to_route('studio-sessions.index');
    }

    public function update(Request $request, StudioSession $studioSession): RedirectResponse
    {
        $data = $this->validateData($request);

        if ($request->hasFile('image')) {
            if (filled($studioSession->image) && ! str_starts_with($studioSession->image, 'http://') && ! str_starts_with($studioSession->image, 'https://')) {
                Storage::disk('local')->delete('public/sessions/' . basename($studioSession->image));
            }

            $request->file('image')->storeAs('public/sessions', $request->file('image')->hashName());
            $data['image'] = $request->file('image')->hashName();
        }

        $studioSession->update($data);

        return to_route('studio-sessions.index');
    }

    private function validateData(Request $request): array
    {
        return $request->validate([
            'image' => ['nullable', 'image', 'max:4096'],
            'title' => ['required', 'string', 'max:255'],
            'trainer_name' => ['required', 'string', 'max:255'],
            'date' => ['required', 'string', 'max:255'],
            'time' => ['required', 'string', 'max:255'],
            'duration' => ['required', 'string', 'max:255'],
            'capacity' => ['required', 'string', 'max:255'],
            'remaining_slots' => ['required', 'string', 'max:255'],
            'level' => ['required', 'string', 'max:255'],
            'equipment' => ['required', 'string', 'max:255'],
            'price' => ['required', 'string', 'max:255'],
            'payment_methods' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'button_text' => ['required', 'string', 'max:255'],
            'button_url' => ['required', 'url', 'max:255'],
        ]);
    }
}
