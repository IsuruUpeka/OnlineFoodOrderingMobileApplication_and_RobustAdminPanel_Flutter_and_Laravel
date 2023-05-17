<?php
namespace App\Models;
use Encore\Admin\Traits\DefaultDatetimeFormat;
use Encore\Admin\Traits\ModelTree;
use Illuminate\Database\Eloquent\Model;

class FoodType extends Model
{
    //
    use DefaultDatetimeFormat;
    use ModelTree;
    //table name
    protected $table = 'food_types';

    public function getList(){
        return $this->get();
    }
}
