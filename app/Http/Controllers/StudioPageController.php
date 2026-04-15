<?php

namespace App\Http\Controllers;

use App\Models\StudioPage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StudioPageController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard/StudioPages/Index', [
            'studioPages' => StudioPage::query()
                ->when(request()->search, function ($query) {
                    $query->where(function ($subQuery) {
                        $subQuery->where('name', 'like', '%' . request()->search . '%')
                            ->orWhere('title', 'like', '%' . request()->search . '%');
                    });
                })
                ->orderBy('id')
                ->paginate(10)
                ->withQueryString(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Dashboard/StudioPages/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'key' => 'required|string|max:255|alpha_dash|unique:studio_pages,key',
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        StudioPage::create($data);

        return to_route('studio-pages.index');
    }

    public function edit(StudioPage $studioPage): Response
    {
        return Inertia::render('Dashboard/StudioPages/Edit', [
            'studioPage' => $studioPage,
        ]);
    }

    public function update(Request $request, StudioPage $studioPage): RedirectResponse
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'key' => 'required|string|max:255|alpha_dash|unique:studio_pages,key,' . $studioPage->id,
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $studioPage->update($data);

        return to_route('studio-pages.index');
    }

    public function destroy(StudioPage $studioPage): RedirectResponse
    {
        $studioPage->delete();

        return to_route('studio-pages.index');
    }
}
