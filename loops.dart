import 'dart:io';

void main() {
  print("Kérek egy számot aminek szeretnéd tudni a szorzótábláját: ");
  int? szorzando = int.parse(stdin.readLineSync()!);
  for (int i = 1; i < 11; i++) {
    print("${i * szorzando}");
  }
  int db = 0;
  int elso = 0;
  int masodik = 1;
  String fibonacci = (elso + masodik).toString() + ", ";
  while (db < 9) {
    int harmadik = elso + masodik;
    fibonacci += harmadik.toString() + ", ";
    elso = masodik;
    masodik = harmadik;
    db++;
  }
  print(fibonacci);

  List<int> primszamok = [];
  int primdb = 1;
  do {
    bool prime = true;
    for (int i = 2; i < (primdb / 2).ceil(); i++) {
      if (primdb % i < 1) {
        prime = false;
        break;
      }
    }
    if (prime == true) {
      primszamok.add(primdb);
    }
    primdb++;
  } while (primdb < 51);
  print(primszamok);
}
