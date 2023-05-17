class UserModel{
  int id;
  String name;
  String email;
  String phone;
  int orderCount;

  UserModel({
    required this.id,
    required this.name,
    required this.email,
    required this.phone,
    required this.orderCount,
  });

  factory UserModel.fromJson(Map<String, dynamic> json){
    return UserModel(
      id:json['id'],
      name: json['f_name'],
      email:json['email'],
      phone: json['phone'],
      orderCount: json['order_count'],
    );
  }
}