<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\User;
use App\Models\Image;

use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
        'role_id' => 1,
        'status' => 1,
    ];
});

$factory->define(Image::class, function (Faker $faker) {
	
	$imageUrl = $faker->randomElement(getImages())['url'];
    $format = (function($imageUrl) {
        preg_match('/jpeg|jpg|png$/', $imageUrl, $found);
        return $found[0] ?? 'jpg';
    })($imageUrl);

    return [
        'user_id' => 1,
        'title' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'description' => $faker->paragraph($nbSentences = 2, $variableNbSentences = true),
        'name' => Str::random(10),
        'format' => $format,
        'path' => '',
        'url' => $imageUrl,
        'status' => 0,
    ];
});

function getImages() {
	return array(
		array(
			'url' => 'https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg'
		),
		array(
			'url' => 'https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg'
		),
		array(
			'url' => 'https://thumbs.dreamstime.com/b/surreal-elephant-young-girl-who-friends-deep-dark-forest-woods-imagination-love-friendship-nature-peace-harmony-125298254.jpg'
		),
		array(
			'url' => 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
		),
		array(
			'url' => 'https://static.toiimg.com/photo/72975551.cms'
		),
		array(
			'url' => 'https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG'
		),
		array(
			'url' => 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
		),
		array(
			'url' => 'https://1.bp.blogspot.com/-MdaQwrpT4Gs/Xdt-ff_hxEI/AAAAAAAAQXE/oOgnysGd9LwoFLMHJ0etngKzXxmQkWc5ACLcBGAsYHQ/s400/Beautiful-Backgrounds%2B%2528122%2529.jpg'
		),
		array(
			'url' => 'https://html5css.ru/css/img_lights.jpg'
		),
		array(
			'url' => 'https://telegraf.com.ua/files/2019/03/priroda-i-puteshestviya-na-snimkax-dzhejmsa-artura-23.jpg'
		),
		array(
			'url' => 'https://news.liga.net/images/general/2018/06/05/20180605114657-1446.jpg?v=1528195519'
		),
		array(
			'url' => 'https://relax.com.ua/wp-content/media/kiew/2017/03/foto.jpg'
		),
		array(
			'url' => 'https://cdn.iz.ru/sites/default/files/styles/900x600/public/photo_item-2019-11/1572618194.jpg?itok=JSGR-v4m'
		),
		array(
			'url' => 'https://www.apple.com/newsroom/images/product/iphone/lifestyle/Apple_Shot-On-iPhone-Challenge-Winners_Konstantin-Chalabov_03032020_big.jpg.large.jpg'
		),
		array(
			'url' => 'https://www.interfax.ru/ftproot/photos/photostory/2019/10/16/wild1_700.jpg'
		),
		array(
			'url' => 'https://pressa.tv/uploads/posts/2018-03/1522192378_33.jpg'
		),
		array(
			'url' => 'https://static.euronews.com/articles/stories/03/69/52/72/602x338_cmsv2_a712ae71-c74b-5791-bddb-616d119831ae-3695272.jpg'
		),
		array(
			'url' => 'https://i.pinimg.com/originals/78/70/74/787074252fbcbe853e74b8a1d0feb99d.jpg'
		),
		array(
			'url' => 'https://fotogora.ru/wp-content/uploads/2016/12/abstract-1846401_1280.jpg'
		),
		array(
			'url' => 'https://dnpmag.com/wp-content/uploads/2014/12/168.jpg'
		),
		array(
			'url' => 'https://sostav.ua/app/public/images/news/2019/02/19/5JuZMmTY_l.jpg'
		),
		array(
			'url' => 'https://storage.myseldon.com/news_pict_B6/B68FC04699E886A819B5F8FFDC0199DE'
		),
		array(
			'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn9Rw5BXKmJcB9XY0rLPHIZDgjC6KQlAj5IZiHEAgWNiAi3THa&usqp=CAU'
		),
		array(
			'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRR2QJh_BI-Z0SloyafFY8dIYMMh_nVvE6AyUqh9XGmGyydJYQ2&usqp=CAU'
		),
		array(
			'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRk2FkpjVHTz6W-poCbj7N-pxNEKfaZwbfhySyXaBVFNoL9y45&usqp=CAU'
		),
		array(
			'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSRohSozLM64vs__pcYUO7OWhqmyB_ODc932Mfj6j73-v0tQ6e&usqp=CAU'
		),
		array(
			'url' => 'https://image.zn.ua/media/images/original/Dec2019/247920.jpg'
		),
		array(
			'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRD8vAVh18kovE5-jzv22KqJAdysIOVw0eMPlES0U3pF1xe0uk8&usqp=CAU'
		),
		array(
			'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTslYG0JH7JqoyuMPCZ8iSYcGdzBH4HiszKpQCrifq315Tw4MU4&usqp=CAU'
		),
		array(
			'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOSLZGoeeD788l6TRWquqcnUI3wG5VK6v-dc8a0lw-leukApJ_&usqp=CAU'
		),
		array(
			'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3JJlXDoN3HLpNTcheEqCUltKVMzBbu8y_aHdVnapiBHoYq1-L&usqp=CAU'
		),
		array(
			'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-IZQjxCMWRGEizqb7wCWzGVWTjzbsTSGHDrtoaPRuWE4knasf&usqp=CAU'
		),
		array(
			'url' => 'https://newsyou.info/wp-content/uploads/2020/04/9-23.jpg'
		),
	);
}
