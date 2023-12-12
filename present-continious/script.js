function handleButtonClickGame1() {
  const h21Element = document.querySelector(".h21");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  const imageKotak1 = document.querySelector(".imagekotak1");
  const game1 = document.querySelector(".game1");
  const game2 = document.querySelector(".game2");
  const button1 = document.querySelector(".button1");

  // Mendapatkan nilai input
  const value = document.querySelector(".input1").value.trim();

  if (!value) {
    alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
    return; // Stop further execution
  }

  if (value.toLowerCase() !== h21Element.innerText.toLowerCase()) {
    popup.style.display = "none";
    popup1.style.display = "flex";

    imageKotak1.style.transform = "translateX(-300px)";

    setTimeout(function () {
      popup1.style.display = "none";
      imageKotak1.style.transform = "translateX(0)";
    }, 2500);
  } else if (value.toLowerCase() === h21Element.innerText.toLowerCase()) {
    popup.style.display = "flex";
    popup1.style.display = "none";
    imageKotak1.style.transform = "translateX(-300px)";

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak1.style.transform = "translateX(0)";
      game2.style.display = "block";
    }, 3500);

    setTimeout(function () {
      game1.style.display = "none";
    }, 4500);

    setTimeout(function () {
      game2.style.display = "block";
    }, 5500);
  } else {
    popup.style.display = "flex";
    imageKotak1.style.transform = "translateX(-300px)";

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak1.style.transform = "translateX(0)";
    }, 2500);
  }
}
