void main() {
  Roster obj = new Roster();

  obj.clean();
}

class Roster {
  var n1, n2, n3, n4, n5;
  var d1, d2;
  var w;
  var p1, p2, p3;

  void weekOnePrint(String d) {
    print("for " + "/////" + d + "/////");
    print(n1 + " and " + n2 + " will be cleaning the " + p1);
    print(n3 + " will be cleaning " + p2);
    print(n4 + " and " + n5 + " will be cleaning the " + p3);
  }

  void weekTwoPrint(String d) {
    print("for " + "/////" + d + "/////");
    print(n4 + " and " + n5 + " will be cleaning the " + p1);
    print(n1 + " will be cleaning " + p2);
    print(n2 + " and " + n3 + " will be cleaning the " + p3);
  }

  void weekThreePrint(String d) {
    print("for " + "/////" + d + "/////");
    print(n2 + " and " + n3 + " will be cleaning the " + p1);
    print(n4 + " will be cleaning " + p2);
    print(n5 + " and " + n1 + " will be cleaning the " + p3);
  }

  void weekFourPrint(String d) {
    print("for " + "/////" + d + "/////");
    print(n5 + " and " + n1 + " will be cleaning the " + p1);
    print(n2 + " will be cleaning " + p2);
    print(n3 + " and " + n4 + " will be cleaning the " + p3);
  }

  void weekFivePrint(String d) {
    print("for " + "/////" + d + "/////");
    print(n3 + " and " + n4 + " will be cleaning the " + p1);
    print(n5 + " will be cleaning " + p2);
    print(n1 + " and " + n2 + " will be cleaning the " + p3);
  }

  void weekOne() {
    n1 = "nats";
    n2 = "emma";
    n3 = "Isiah";
    n4 = "leah";
    n5 = "mudia";
    d1 = "Wed";
    d2 = "Sat";
    p1 = "Toilet";
    p2 = " Kitchen";
    p3 = "Workspace";

    w = 1;
    if (w == 1) {
      print("''''''''''''''''" + "Week 1" + "'''''''''''''''''''''");
      weekOnePrint("wed");
      weekOnePrint("sat");

      print("###############################################");
    } else {
      print("you made a mistake ");
    }
  }

  void weekTwo() {
    n1 = "nats";
    n2 = "emma";
    n3 = "Isiah";
    n4 = "leah";
    n5 = "mudia";
    p1 = "Toilet";
    p2 = " Kitchen";
    p3 = "Workspace";

    w = 2;
    if (w == 2) {
      print("''''''''''''''''" + "Week 2" + "'''''''''''''''''''''");
      weekTwoPrint("wed");
      weekTwoPrint("sat");
      print("###############################################");
    } else {
      print("you made a mistake ");
    }
  }

  void weekThree() {
    n1 = "nats";
    n2 = "emma";
    n3 = "Isiah";
    n4 = "leah";
    n5 = "mudia";
    p1 = "Toilet";
    p2 = " Kitchen";
    p3 = "Workspace";

    w = 3;
    if (w == 3) {
      print("''''''''''''''''" + "Week 3" + "'''''''''''''''''''''");
      weekThreePrint("wed");
      weekThreePrint("sat");
      print("###############################################");
    } else {
      print("you made a mistake ");
    }
  }

  void weekFour() {
    n1 = "nats";
    n2 = "emma";
    n3 = "Isiah";
    n4 = "leah";
    n5 = "mudia";
    p1 = "Toilet";
    p2 = " Kitchen";
    p3 = "Workspace";

    w = 4;
    if (w == 4) {
      print("''''''''''''''''" + "Week 4" + "'''''''''''''''''''''");
      weekFourPrint("wed");
      weekFourPrint("sat");
      print("###############################################");
    } else {
      print("you made a mistake ");
    }
  }

  void weekFive() {
    n1 = "nats";
    n2 = "emma";
    n3 = "Isiah";
    n4 = "leah";
    n5 = "mudia";
    p1 = "Toilet";
    p2 = " Kitchen";
    p3 = "Workspace";

    w = 5;
    if (w == 5) {
      print("''''''''''''''''" + "Week 5" + "'''''''''''''''''''''");
      weekFivePrint("wed");
      weekFivePrint("sat");
      print("###############################################");
    } else {
      print("you made a mistake ");
    }
  }

  void clean() {
    weekOne();
    print(
        "                                                                                                                                                                                             ");

    weekTwo();
    print(
        "                                                                                                                                                                                             ");

    weekThree();
    print(
        "                                                                                                                                                                                             ");

    weekFour();
    print(
        "                                                                                                                                                                                             ");

    weekFive();
    print(
        "                                                                                                                                                                                             ");
  }
}
