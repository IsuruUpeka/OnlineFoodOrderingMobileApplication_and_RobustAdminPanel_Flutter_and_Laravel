import 'package:get/get.dart';
class Dimensions{

  static double screenHeight = Get.context!.height;
  static double screenWidth = Get.context!.width;

  static double pageView= screenHeight/2.135714285714286;
  static double pageViewContainer= screenHeight/3.106493506493506;
  static double pageViewTextContainer= screenHeight/5.695238095238095;

  //dynamic height padding and margin
  static double height10 = screenHeight/68.34285714285714;
  static double height15 = screenHeight/45.56190476190476;
  static double height20 = screenHeight/34.17142857142857;
  static double height30 = screenHeight/22.78095238095238;
  static double height45 = screenHeight/15.18730158730159;


  //dynamic width padding and margin
  static double width10 = screenHeight/68.34285714285714;
  static double width15 = screenHeight/45.56190476190476;
  static double width20 = screenHeight/34.17142857142857;
  static double width30 = screenHeight/22.78095238095238;

  //font size
  static double font12 = screenHeight/62.71428571428571;
  static double font16 = screenHeight/42.71428571428571;
  static double font20 = screenHeight/34.17142857142857;
  static double font26 = screenHeight/26.28571428571428;


  //radius
  static double radius15 = screenHeight/45.56190476190476;
  static double radius20 = screenHeight/34.17142857142857;
  static double radius30 = screenHeight/22.78095238095238;

  //icon size
  static double iconSize24 = screenHeight/28.47619047619048;
  static double iconSize16 = screenHeight/42.71428571428571;


  //list view size
  static double listViewImgSize = screenWidth/3.428571428571428;
  static double listViewTextContSize = screenWidth/4.114285714285714;

  //popular food
  static double popularFoodImgSize = screenHeight/1.95265306122449;

  //bottom height
  static double bottomHeightBar = screenHeight/5.695238095238095;

  //splash screen dimensions
  static double splashImg = screenHeight/3.38;
}
