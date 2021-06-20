import 'dart:io';

class Parents {
  var FathersFirstName;
  var FathersSecondName;
  var FathersFullname;

  void fathersName() {
    print("Enter Fathers first name ");
    FathersFirstName = stdin.readLineSync();
    print("Enter fathers second name ");
    FathersSecondName = stdin.readLineSync();

    FathersFullname = FathersFirstName + " " + FathersSecondName;
    print(" Your Fathers name is " + FathersFullname);
  }
}

void main() {
  Parents obj = new Parents();

  obj.fathersName();
}
