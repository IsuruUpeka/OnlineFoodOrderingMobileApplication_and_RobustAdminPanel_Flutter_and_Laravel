<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Place;
class PlacesController extends Controller
{
    //
        public function index(){
        $list = Place::get();
         //       $list = new Article();
       // $list = $info->getWelcomeInfo();
        //$list['article_content']=html_entity_decode($list['article_content']);
        foreach ($list as $item){
            $item['description']=strip_tags($item['description']);
            $item['description']=$Content = preg_replace("/&#?[a-z0-9]+;/i"," ",$item['description']); 
        }
       // return response()->json($list);
        
        return json_decode($list);
    }
}
