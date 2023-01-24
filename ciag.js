let password = document.getElementById("password");
let liczba1 = document.getElementById("liczba1");
let liczba2 = document.getElementById("liczba2");
let wynik = document.getElementById("wynik");

function sprawdz() {
  console.log(document.getElementById("liczba1"));
  console.log(document.getElementById("liczba2"));
  liczba1 = document.getElementById("liczba1");
  liczba2 = document.getElementById("liczba2");
  console.log(password.liczba1);
  console.log(password.liczba2);
  if (password.value != 2324) {
    wynik.innerText = "Błędne hasło";
  } else {
    var numArray = [liczba1.value, liczba2.value];
    numArray.sort(function (a, b) {
      return a - b;
    });
    wynik.innerHTML = numArray;
  }
}
