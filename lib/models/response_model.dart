class ResponseModel{
  bool _isSuccess;
  String _message;
  ResponseModel(this._isSuccess, this._message);
  String get message => _message;
  bool get isSuccess => _isSuccess;
}