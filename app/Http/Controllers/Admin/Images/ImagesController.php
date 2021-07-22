<?php

namespace App\Http\Controllers\Admin\Images;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Image;

class ImagesController extends Controller
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
        $images = Image::with('user')->latest()->paginate(48);

        return response()->json($images);
    }

    public function upload(Request $request)
    {
        $image = Image::find(5);

        return response()->json($image);
    }

}
