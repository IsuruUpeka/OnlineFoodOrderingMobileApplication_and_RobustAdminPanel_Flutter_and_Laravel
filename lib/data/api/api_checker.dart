import 'package:get/get.dart';
import 'package:project_bella/base/show_custom_snackbar.dart';
import 'package:project_bella/routes/route_helper.dart';

class ApiChecker{
  static void checkApi(Response response){
    if(response.statusCode==401){
      Get.offNamed(RouteHelper.getSignInPage());
    }else{
      showCustomSnackBar(response.statusText!);
    }
  }
}