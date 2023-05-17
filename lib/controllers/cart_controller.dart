import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:project_bella/models/products_model.dart';
import '../data/repository/cart_repo.dart';
import '../models/cart_model.dart';
import '../utils/colors.dart';

class CartController extends GetxController{
  final CartRepo cartRepo;
  CartController({required this.cartRepo});
  Map<int, CartModel> _items={};

  Map<int, CartModel> get items=>_items;

  /*
  only for storage and sharedpreferences
  */
  List<CartModel> storageItems=[];


  void addItem(ProductModel product, int quantity){
    var totalQuantity=0;
    if(_items.containsKey(product.id!)){
      _items.update(product.id!, (value) {

        totalQuantity=value.quantity!+quantity;

        return CartModel(
              id: value.id,
              name: value.name,
              price:value.price,
              img:value.img,
              quantity:value.quantity!+quantity,
              isExist:true,
              time:DateTime.now().toString(),
              product: product,
        );

      });

      if(totalQuantity<=0){
        _items.remove(product.id);
      }
    }else{
    if(quantity>0){
      _items.putIfAbsent(product.id!, () {
        return CartModel(
          id: product.id,
          name: product.name,
          price:product.price,
          img:product.img,
          quantity:quantity,
          isExist:true,
          time:DateTime.now().toString(),
          product: product,
        );}
      );
    }else{
      Get.snackbar("Item count", "You should at least add an item in the cart!" ,
      backgroundColor: AppColors.mainColor,
          colorText: Colors.white,
        );
      }
    }

  cartRepo.addToCartList(getItems);

    update();

  }

  bool existInCart(ProductModel product){
    if (_items.containsKey(product.id)){
      return true;
    }
    return false;
  }

  int getQuantity(ProductModel product){
    var quantity=0;
    if(_items.containsKey(product.id)){
      _items.forEach((key, value) {
        if(key==product.id){
          quantity = value.quantity!;
        }
      });
    }
    return quantity;
  }

  int get totalItems{
    var totalQuantity=0;
    _items.forEach((key, value) {
      totalQuantity+= value.quantity!;
    });
    return totalQuantity;
  }

    List<CartModel> get getItems{
    return _items.entries.map((e) {
      return e.value;
    }).toList();
  }

  int get totalAmount{
    var total=0;

    _items.forEach((key, value) {
      total += value.quantity!*value.price!;
    });
    return total;
  }

  List <CartModel> getCartData(){
    setCart = cartRepo.getCartList();
    return storageItems;
  }

  set setCart(List<CartModel> items){
    storageItems=items;
    //print("Lenght of cart items"+storageItems.length.toString());
    for(int i=0; i<storageItems.length;i++){
      _items.putIfAbsent(storageItems[i].product!.id!, () => storageItems[i]);
    }
  }
  void addToHistory(){
    cartRepo.addToCartHistoryList();
    clear();
  }

  void clear() {
    _items = {};
    update();
  }

  List<CartModel> getCartHistoryList(){
    return cartRepo.getCartHistoryList();
  }

  set setItems(Map<int, CartModel> setItems){
        _items = {};
        _items = setItems;
  }

  void addToCartList(){
    cartRepo.addToCartList(getItems);
    update();
  }

  void clearCartHistory(){
    cartRepo.clearCartHistory();
    update();
  }
  void removeCartSharedPreference(){
    cartRepo.removeCartSharedPreference();
  }
}