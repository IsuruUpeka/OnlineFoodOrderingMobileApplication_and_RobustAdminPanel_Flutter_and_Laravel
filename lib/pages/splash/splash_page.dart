import 'dart:async';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';
import 'package:project_bella/routes/route_helper.dart';
import 'package:project_bella/utils/dimensions.dart';

import '../../controllers/popular_product_controller.dart';
import '../../controllers/recommended_product_controller.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> with TickerProviderStateMixin{

 late  Animation<double> animation;
 late AnimationController controller;

 Future<void> _loadResources() async {
   await Get.find<PopularProductController>().getPopularProductList();
   await Get.find<RecommendedProductController>().getRecommendedProductList();
 }

 @override
 void initState(){
   super.initState();
   _loadResources();
   controller =  AnimationController(vsync: this,duration: const Duration(seconds: 3))..forward();
   animation =  CurvedAnimation(parent: controller, curve: Curves.linear);

   Timer(const Duration(seconds: 5), ()=>Get.offNamed(RouteHelper.getInitial()));

 }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          ScaleTransition(scale: animation,
          child: Center(child: Image.asset("assets/image/Bella verona 1.png", width: Dimensions.splashImg,))),
          Center(child: Image.asset("assets/image/Bella verona 2.png", width: Dimensions.splashImg,))
        ],
      ),
    );
  }
}
