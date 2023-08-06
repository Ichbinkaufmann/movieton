<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies =[
            [
                'name' => 'Skyrim: Dragin DeezNnuts Lmao',
                'slug' => 'skyrim-gragin-deeznuts-lmao',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=6hB359bIaco',
                'thumbnail' => 'https://m.media-amazon.com/images/I/71kHb51qOCL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
                'rating' => 9.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'Ligma Ballz kekl gotem',
                'slug' => 'ligma-ballz-kekl-gotem',
                'category' => 'Comedy',
                'video_url' => 'https://www.youtube.com/watch?v=6hB359bIaco',
                'thumbnail' => 'https://m.media-amazon.com/images/I/61+a7mKvy0L._AC_SY300_SX300_.jpg',
                'rating' => 9.3,
                'is_featured' => 0,
            ],
            [
                'name' => 'I Lay Deeznuts on Your Face',
                'slug' => 'i-lay-deeznuts-on-your-face',
                'category' => 'Romance',
                'video_url' => 'https://www.youtube.com/watch?v=6hB359bIaco',
                'thumbnail' => 'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C716J2dkn6FL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX466_.png',
                'rating' => 9.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'The Adventure of Gum Balls lmao',
                'slug' => 'the-adventure-f-gum-balls-lmao',
                'category' => 'Sci-Fi',
                'video_url' => 'https://www.youtube.com/watch?v=6hB359bIaco',
                'thumbnail' => 'https://m.media-amazon.com/images/I/71so-CRa46L._SL1404_.jpg',
                'rating' => 9.3,
                'is_featured' => 0,
            ],
        ];
        Movie::insert($movies);
    }
}