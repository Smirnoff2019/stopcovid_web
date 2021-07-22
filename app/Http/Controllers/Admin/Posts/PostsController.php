<?php

namespace App\Http\Controllers\Admin\Posts;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;

class PostsController extends Controller
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
        $posts = Post::with('user')->latest()->paginate(50);

        return view('admin.list.simple', array(
            'title' => 'Публикации',
            'pageTitle' => 'Список публикаций',
            'content' => $posts
        ));
    }

    public function edit( $id )
    {
        $post = Post::find( $id );

        return view('admin.edit.post', array(
            'post' => $post
        ));
    }

    public function update( Request $request )
    {
        $this->validate($request, [
            'id'            => 'required|integer|exists:posts,id',
            'title'         => 'required|string',
            'sub_title'     => 'nullable|string',
            'content'       => 'nullable|string',
            'description'   => 'nullable|string',
            'image_id'      => 'sometimes|nullable|integer',
            'position'      => 'sometimes|nullable|integer',
        ]);

        $result = Post::find( $request->id )
            ->update($request->only(array(
                'title',
                'sub_title',
                'content',
                'description',
                'image_id',
                'position',
            )));

        if($result) {
            return back()->withSuccess('Данные публикации успешно обновлены!');
        }

        return back()->withErrors(['update' => 'Не удалось обновить публикацию!']);
    }

}
