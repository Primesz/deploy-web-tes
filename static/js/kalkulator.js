function imtCalc() {
  let berat = document.getElementById("berat").value;
  let tinggi = document.getElementById("tinggi").value;

  let result = berat / (tinggi * 0.01 * (tinggi * 0.01));

  document.getElementById("result").innerHTML = result.toFixed(2);

  console.log(result);

  let normalPage = document.getElementById("normal");
  let overweightPage = document.getElementById("over");
  let underweightPage = document.getElementById("under");

  if (result >= 18.5 && result <= 24.9) {
    normalPage.style.display = "block";
    underweightPage.style.display = "none";
    overweightPage.style.display = "none";
  } else if (result < 18.5) {
    underweightPage.style.display = "block";
    normalPage.style.display = "none";
    overweightPage.style.display = "none";
  } else {
    overweightPage.style.display = "block";
    normalPage.style.display = "none";
    underweightPage.style.display = "none";
  }
}
