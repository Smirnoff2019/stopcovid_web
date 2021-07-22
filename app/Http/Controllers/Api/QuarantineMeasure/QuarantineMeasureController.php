<?php

namespace App\Http\Controllers\Api\QuarantineMeasure;

use Illuminate\Http\Request;
use App\Models\QuarantineMeasure;
use App\Http\Controllers\Controller;

class QuarantineMeasureController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index()
    {
        $posts = QuarantineMeasure::latest()->paginate(50);

        return response()->json($posts);
    }

}
