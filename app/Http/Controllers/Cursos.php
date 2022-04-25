<?php

namespace App\Http\Controllers;

use App\Http\Requests\CursosRequest;
use App\Models\Curso;
use Illuminate\Http\Request;

class Cursos extends Controller
{
    public function index()
    {
        $items = Curso::select(['id', 'name'])->paginate(3);
        return response(['data' => $items], 200);
    }
    public function create(CursosRequest $request)
    {
        $item = new Curso;
        $item->name = $request->name;
        $item->save();
        return response(['status' => true, 'item' => $item], 201);
    }
    public function update(Request $request, Curso $curso)
    {
        $item = $curso;
        $item->name = $request->name;
        $item->save();
        return response(['status' => true], 201);
    }

    public function show(Curso $curso)
    {
        return response(['item' => $curso], 200);
    }

    public function destroy(Curso $curso)
    {
        $item = $curso;
        $item->delete();
        return response(['status' => true], 200);
    }
}
