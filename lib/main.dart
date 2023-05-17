import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:project_bella/controllers/cart_controller.dart';
import 'package:project_bella/controllers/popular_product_controller.dart';
import 'package:project_bella/routes/route_helper.dart';
import 'package:project_bella/utils/colors.dart';
import 'controllers/recommended_product_controller.dart';
import 'helper/dependencies.dart' as dep;

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await dep.init();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of the application.
  @override
  Widget build(BuildContext context) {
    Get.find<CartController>().getCartData();


    return GetBuilder<PopularProductController>(builder:  (_){
      return GetBuilder<RecommendedProductController>(builder: (_){
        return GetMaterialApp(
          debugShowCheckedModeBanner: false,
          title: 'Flutter Demo',

          //home: const SignInPage(),
          initialRoute: RouteHelper.getSplashPage(),
          getPages: RouteHelper.routes,
          theme: ThemeData(
            primaryColor: AppColors.mainColor,
            fontFamily: "lato",
          ),
        );
      });
    });
  }
}
