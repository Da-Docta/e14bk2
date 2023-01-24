let liczba = document.getElementById("liczba").value;
let wynik = document.getElementById("wynik");

function policz() {
  liczba = document.getElementById("liczba").value;
  if (liczba > 0) {
    wynik.innerHTML = "Dodatnia";
  } else if (liczba == 0) {
    wynik.innerHTML = "zero";
  } else if (liczba < 0) {
    wynik.innerHTML = "Ujemna";
  }
}
