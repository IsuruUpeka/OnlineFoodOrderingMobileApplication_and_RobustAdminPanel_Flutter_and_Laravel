<?php

namespace App\Admin\Controllers;

use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;
use App\Models\Food;
use App\Models\FoodType;


use Encore\Admin\Layout\Content;


class FoodsController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Foods';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Food());
        $grid->model()->latest();
        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
         $grid->column('FoodType.title', __('Category'));
        $grid->column('price', __('Price'));
        //$grid->column('location', __('Location'));
        $grid->column('stars', __('Stars'));
        $grid->column('img', __('Thumbnail Photo'))->image('',60,60);
        $grid->column('description', __('Description'))->style('max-width:200px;word-break:break-all;')->display(function ($val){
            return substr($val,0,30);
        });
        //$grid->column('total_people', __('People'));
       // $grid->column('selected_people', __('Selected'));
        $grid->column('created_at', __('Created_at'));
        $grid->column('updated_at', __('Updated_at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Food::findOrFail($id));



        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Food());
        $form->text('name', __('Name'));
          $form->select('type_id', __('Type_id'))->options((new FoodType())::selectOptions());
        $form->number('price', __('Price'));
        $form->text('location', __('Location'));
        $form->number('stars', __('Stars'));
        $form->number('people', __('People'));
        $form->number('selected_people', __('Selected'));
        $form->image('img', __('Thumbnail'))->uniqueName();
        $form->UEditor('description','Description');



        return $form;
    }
}
