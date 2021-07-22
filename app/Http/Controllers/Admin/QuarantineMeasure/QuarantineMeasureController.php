<?php

namespace App\Http\Controllers\Admin\QuarantineMeasure;

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

        return view('admin.list.simple', array(
            'title' => 'Корпоративные меры',
            'pageTitle' => 'Корпоративные меры | Список публикаций',
            'content' => $posts->toArray()
        ));
    }

}
