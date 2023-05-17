import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';
import 'package:get/get_navigation/src/routes/get_route.dart';
import 'package:get/get_navigation/src/routes/transitions_type.dart';
import 'package:project_bella/pages/address/pick_address_map.dart';
import 'package:project_bella/pages/auth/sign_in_page.dart';
import 'package:project_bella/pages/cart/cart_page.dart';
import 'package:project_bella/pages/food/popular_food_detail.dart';
import 'package:project_bella/pages/home/main_food_page.dart';
import 'package:project_bella/pages/payment/order_success_page.dart';
import 'package:project_bella/pages/payment/payment_page.dart';
import 'package:project_bella/pages/splash/splash_page.dart';

import '../models/order_model.dart';
import '../pages/address/add_address_page.dart';
import '../pages/food/recommended_food_detail.dart';
import '../pages/home/home_page.dart';

class RouteHelper {
  static const String splashPage = "/splash-page";
  static const String initial="/";
  static const String popularFood="/popular-food";
  static const String recommendedFood="/recommended-food";
  static const String cartPage = "/cart-page";
  static const String signIn = "/sign-In";

  static const String addAddress="/add-address";
  static const String pickAddressMap="/pick-address";
  static const String payment='/payment';
  static const String orderSuccess='/order-successful';


  static String getSplashPage()=> '$splashPage';
  static String getInitial()=>'$initial';
  static String getPopularFood(int pageId, String page)=>'$popularFood?pageId=$pageId&page=$page';
  static String getRecommendedFood(int pageId, String page)=>'$recommendedFood?pageId=$pageId&page=$page';
  static String getCartPage()=>'$cartPage';
  static String getSignInPage()=>'$signIn';
  static String getAddressPage()=>'$addAddress';
  static String getPickAddressPage()=>'$pickAddressMap';
  static String getPaymentPage(String id, int userID)=>'$payment?id=$id&userID=$userID';
  static String getOrderSuccessPage(String orderID, String status)=>'$orderSuccess?id=$orderID&status=$status';



  static List<GetPage> routes=[
    GetPage(name: pickAddressMap, page: (){
      PickAddressMap _pickAddress = Get.arguments;
      return _pickAddress;
    }),
    GetPage(name: splashPage, page: ()=>SplashScreen()),
    GetPage(name: initial, page: (){

      return HomePage();
    }, transition: Transition.fade),
    GetPage(name: signIn, page: (){

      return SignInPage();
    }, transition: Transition.fade),

    GetPage(name: popularFood, page:(){
      var pageId=Get.parameters['pageId'];
      var page = Get.parameters["page"];
      return PopularFoodDetail(pageId:int.parse(pageId!), page:page!);
    },
          transition : Transition.fadeIn
    ),

    GetPage(name:recommendedFood, page:(){

      var pageId=Get.parameters['pageId'];
      var page = Get.parameters["page"];
      return RecommendedFoodDetail(pageId:int.parse(pageId!), page: page!,);
    },
        transition : Transition.fadeIn
    ),
    GetPage(name: cartPage, page: (){
      return CartPage();
    },
    transition: Transition.fadeIn
    ),
    GetPage(name: addAddress, page: (){
      return AddAddressPage();
    }),
    GetPage(name: payment, page: ()=>PaymentPage(
        orderModel: OrderModel(
            id: int.parse(Get.parameters['id']!),
            userId: int.parse(Get.parameters["userID"]!)
        )
    )),

    GetPage(name: orderSuccess, page: ()=>OrderSuccessPage(
      orderID:Get.parameters['id']!, status:Get.parameters["status"].toString().contains("success")?1:0,

    ))
  ];
}