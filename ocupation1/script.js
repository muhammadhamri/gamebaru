//game 1

let userScore = 0;

// Function to update the score
function updateScore(points) {
  userScore += points;
  console.log("Current Score:", userScore);
  // You can display the score or perform other actions here

  // Update the score element on the screen
  const scoreElement = document.querySelector(".user-score");
  scoreElement.textContent = userScore;

  const score1 = document.querySelector(".score-container");
  const gameContainer = document.querySelector(".game-container");
  const end = document.querySelector(".end");
  const end1 = document.querySelector(".end1");

  if (userScore >= 900) {
    setTimeout(function () {
      // window.location.href = "../animal/animal.html";
      end.style.display = "block";
    }, 20000);

    setTimeout(function () {
      gameContainer.style.display = "none";
      end.style.display = "block";
      score1.style.transform = "scale('1.5')";
    }, 5000);
  }
}

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
    imageKotak1.style.transformOrigin = "top left";
    imageKotak1.style.transform = "rotate(180deg)";

    updateScore(-50);

    setTimeout(function () {
      popup1.style.display = "none";
      imageKotak1.style.transform = "rotate(0deg)";
    }, 2500);
  } else if (value.toLowerCase() === h21Element.innerText.toLowerCase()) {
    popup.style.display = "flex";
    popup1.style.display = "none";
    imageKotak1.style.transformOrigin = "top left";
    imageKotak1.style.transform = "rotate(180deg)";

    updateScore(100);

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak1.style.transform = "rotate(0deg)";

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
    imageKotak1.style.transformOrigin = "top left";
    imageKotak1.style.transform = "rotate(180deg)";

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak1.style.transform = "rotate(0deg)";
    }, 2500);
  }
}

//game 2

function handleButtonClickGame2() {
  const h22Element = document.querySelector(".h22");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  const imageKotak2 = document.querySelector(".imagekotak2");
  const game3 = document.querySelector(".game3");
  const game2 = document.querySelector(".game2");
  const button2 = document.querySelector(".button2");

  // Mendapatkan nilai input
  const value = document.querySelector(".input2").value.trim();

  if (!value) {
    alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
    return; // Stop further execution
  }

  if (value.toLowerCase() !== h22Element.innerText.toLowerCase()) {
    popup.style.display = "none";
    popup1.style.display = "flex";
    imageKotak2.style.transformOrigin = "top left";
    imageKotak2.style.transform = "rotate(180deg)";

    updateScore(-50);

    setTimeout(function () {
      popup1.style.display = "none";
      imageKotak2.style.transform = "rotate(0deg)";
    }, 2500);
  } else if (value.toLowerCase() === h22Element.innerText.toLowerCase()) {
    popup.style.display = "flex";
    popup1.style.display = "none";
    imageKotak2.style.transformOrigin = "top left";
    imageKotak2.style.transform = "rotate(180deg)";

    updateScore(100);

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak2.style.transform = "rotate(0deg)";

      game2.style.display = "block";
    }, 3500);

    setTimeout(function () {
      game2.style.display = "none";
    }, 4500);

    setTimeout(function () {
      game3.style.display = "block";
    }, 5500);
  } else {
    popup.style.display = "flex";
    imageKotak2.style.transformOrigin = "top left";
    imageKotak2.style.transform = "rotate(180deg)";

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak2.style.transform = "rotate(0deg)";
    }, 2500);
  }
}

// game 3

function handleButtonClickGame3() {
  const h23Element = document.querySelector(".h23");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  const imageKotak3 = document.querySelector(".imagekotak3");
  const game3 = document.querySelector(".game3");
  const game4 = document.querySelector(".game4");
  const button3 = document.querySelector(".button3");

  // Mendapatkan nilai input
  const value = document.querySelector(".input3").value.trim();

  if (!value) {
    alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
    return; // Stop further execution
  }

  if (value.toLowerCase() !== h23Element.innerText.toLowerCase()) {
    popup.style.display = "none";
    popup1.style.display = "flex";
    imageKotak3.style.transformOrigin = "top left";
    imageKotak3.style.transform = "rotate(180deg)";

    updateScore(-50);

    setTimeout(function () {
      popup1.style.display = "none";
      imageKotak3.style.transform = "rotate(0deg)";
    }, 2500);
  } else if (value.toLowerCase() === h23Element.innerText.toLowerCase()) {
    popup.style.display = "flex";
    popup1.style.display = "none";
    imageKotak3.style.transform = "rotate(180deg)";

    updateScore(100);

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak3.style.transform = "rotate(0deg)";

      game4.style.display = "block";
    }, 3500);

    setTimeout(function () {
      game3.style.display = "none";
    }, 4500);

    setTimeout(function () {
      game4.style.display = "block";
    }, 5500);
  } else {
    popup.style.display = "flex";
    imageKotak3.style.transformOrigin = "top left";
    imageKotak3.style.transform = "rotate(180deg)";

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak3.style.transform = "rotate(0deg)";
    }, 2500);
  }
}

//game 4

function handleButtonClickGame4() {
  const h24Element = document.querySelector(".h24");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  const imageKotak4 = document.querySelector(".imagekotak4");
  const game5 = document.querySelector(".game5");
  const game4 = document.querySelector(".game4");
  const button4 = document.querySelector(".button4");

  // Mendapatkan nilai input
  const value = document.querySelector(".input4").value.trim();

  if (!value) {
    alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
    return; // Stop further execution
  }

  if (value.toLowerCase() !== h24Element.innerText.toLowerCase()) {
    popup.style.display = "none";
    popup1.style.display = "flex";
    imageKotak4.style.transformOrigin = "top left";
    imageKotak4.style.transform = "rotate(180deg)";

    updateScore(-50);

    setTimeout(function () {
      popup1.style.display = "none";
      imageKotak4.style.transform = "rotate(0deg)";
    }, 2500);
  } else if (value.toLowerCase() === h24Element.innerText.toLowerCase()) {
    popup.style.display = "flex";
    popup1.style.display = "none";
    imageKotak4.style.transform = "rotate(180deg)";

    updateScore(100);

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak4.style.transform = "rotate(0deg)";

      game5.style.display = "block";
    }, 3500);

    setTimeout(function () {
      game4.style.display = "none";
    }, 4500);

    setTimeout(function () {
      game5.style.display = "block";
    }, 5500);
  } else {
    popup.style.display = "flex";
    imageKotak4.style.transformOrigin = "top left";
    imageKotak4.style.transform = "rotate(180deg)";

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak4.style.transform = "rotate(0deg)";
    }, 2500);
  }
}

//game 5

function handleButtonClickGame5() {
  const h25Element = document.querySelector(".h25");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  const imageKotak5 = document.querySelector(".imagekotak5");
  const game5 = document.querySelector(".game5");
  const game6 = document.querySelector(".game6");
  const button5 = document.querySelector(".button5");

  // Mendapatkan nilai input
  const value = document.querySelector(".input5").value.trim();

  if (!value) {
    alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
    return; // Stop further execution
  }

  if (value.toLowerCase() !== h25Element.innerText.toLowerCase()) {
    popup.style.display = "none";
    popup1.style.display = "flex";
    imageKotak5.style.transformOrigin = "top left";
    imageKotak5.style.transform = "rotate(180deg)";

    updateScore(-50);

    setTimeout(function () {
      popup1.style.display = "none";
      imageKotak5.style.transform = "rotate(0deg)";
    }, 2500);
  } else if (value.toLowerCase() === h25Element.innerText.toLowerCase()) {
    popup.style.display = "flex";
    popup1.style.display = "none";
    imageKotak5.style.transform = "rotate(180deg)";

    updateScore(100);

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak5.style.transform = "rotate(0deg)";

      game6.style.display = "block";
    }, 3500);

    setTimeout(function () {
      game5.style.display = "none";
    }, 4500);

    setTimeout(function () {
      game6.style.display = "block";
    }, 5500);
  } else {
    popup.style.display = "flex";
    imageKotak5.style.transformOrigin = "top left";
    imageKotak5.style.transform = "rotate(180deg)";

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak5.style.transform = "rotate(0deg)";
    }, 2500);
  }
}

// game 6

function handleButtonClickGame6() {
  const h26Element = document.querySelector(".h26");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  const imageKotak6 = document.querySelector(".imagekotak6");
  const game7 = document.querySelector(".game7");
  const game6 = document.querySelector(".game6");
  const button6 = document.querySelector(".button6");

  // Mendapatkan nilai input
  const value = document.querySelector(".input6").value.trim();

  if (!value) {
    alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
    return; // Stop further execution
  }

  if (value.toLowerCase() !== h26Element.innerText.toLowerCase()) {
    popup.style.display = "none";
    popup1.style.display = "flex";
    imageKotak6.style.transformOrigin = "top left";
    imageKotak6.style.transform = "rotate(180deg)";

    updateScore(-50);

    setTimeout(function () {
      popup1.style.display = "none";
      imageKotak6.style.transform = "rotate(0deg)";
    }, 2500);
  } else if (value.toLowerCase() === h26Element.innerText.toLowerCase()) {
    popup.style.display = "flex";
    popup1.style.display = "none";
    imageKotak6.style.transform = "rotate(180deg)";

    updateScore(100);

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak6.style.transform = "rotate(0deg)";

      game6.style.display = "block";
    }, 3500);

    setTimeout(function () {
      game6.style.display = "none";
    }, 4500);

    setTimeout(function () {
      game7.style.display = "block";
    }, 5500);
  } else {
    popup.style.display = "flex";
    imageKotak6.style.transformOrigin = "top left";
    imageKotak6.style.transform = "rotate(180deg)";

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak6.style.transform = "rotate(0deg)";
    }, 2500);
  }
}

// game 7

function handleButtonClickGame7() {
  const h27Element = document.querySelector(".h27");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  const imageKotak7 = document.querySelector(".imagekotak7");
  const game7 = document.querySelector(".game7");
  const game8 = document.querySelector(".game8");
  const button7 = document.querySelector(".button7");

  // Mendapatkan nilai input
  const value = document.querySelector(".input7").value.trim();

  if (!value) {
    alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
    return; // Stop further execution
  }

  if (value.toLowerCase() !== h27Element.innerText.toLowerCase()) {
    popup.style.display = "none";
    popup1.style.display = "flex";
    imageKotak7.style.transformOrigin = "top left";
    imageKotak7.style.transform = "rotate(180deg)";

    updateScore(-50);

    setTimeout(function () {
      popup1.style.display = "none";
      imageKotak7.style.transform = "rotate(0deg)";
    }, 2500);
  } else if (value.toLowerCase() === h27Element.innerText.toLowerCase()) {
    popup.style.display = "flex";
    popup1.style.display = "none";
    imageKotak7.style.transform = "rotate(180deg)";

    updateScore(100);

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak7.style.transform = "rotate(0deg)";

      game8.style.display = "block";
    }, 3500);

    setTimeout(function () {
      game7.style.display = "none";
    }, 4500);

    setTimeout(function () {
      game8.style.display = "block";
    }, 5500);
  } else {
    popup.style.display = "flex";
    imageKotak7.style.transformOrigin = "top left";
    imageKotak7.style.transform = "rotate(180deg)";

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak7.style.transform = "rotate(0deg)";
    }, 2500);
  }
}

//game 8
function handleButtonClickGame8() {
  const h28Element = document.querySelector(".h28");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  const imageKotak8 = document.querySelector(".imagekotak8");
  const game9 = document.querySelector(".game9");
  const game8 = document.querySelector(".game8");
  const button8 = document.querySelector(".button8");

  // Mendapatkan nilai input
  const value = document.querySelector(".input8").value.trim();

  if (!value) {
    alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
    return; // Stop further execution
  }

  if (value.toLowerCase() !== h28Element.innerText.toLowerCase()) {
    popup.style.display = "none";
    popup1.style.display = "flex";
    imageKotak8.style.transformOrigin = "top left";
    imageKotak8.style.transform = "rotate(180deg)";

    updateScore(-50);

    setTimeout(function () {
      popup1.style.display = "none";
      imageKotak8.style.transform = "rotate(0deg)";
    }, 2500);
  } else if (value.toLowerCase() === h28Element.innerText.toLowerCase()) {
    popup.style.display = "flex";
    popup1.style.display = "none";
    imageKotak8.style.transform = "rotate(180deg)";

    updateScore(100);

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak8.style.transform = "rotate(0deg)";

      game9.style.display = "block";
    }, 3500);

    setTimeout(function () {
      game8.style.display = "none";
    }, 4500);

    setTimeout(function () {
      game9.style.display = "block";
    }, 5500);
  } else {
    popup.style.display = "flex";
    imageKotak8.style.transformOrigin = "top left";
    imageKotak8.style.transform = "rotate(180deg)";

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak8.style.transform = "rotate(0deg)";
    }, 2500);
  }
}

//game 9

function handleButtonClickGame9() {
  const h29Element = document.querySelector(".h29");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  const imageKotak9 = document.querySelector(".imagekotak9");
  const game9 = document.querySelector(".game9");
  const game10 = document.querySelector(".game10");
  const button9 = document.querySelector(".button9");

  // Mendapatkan nilai input
  const value = document.querySelector(".input9").value.trim();

  if (!value) {
    alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
    return; // Stop further execution
  }

  if (value.toLowerCase() !== h29Element.innerText.toLowerCase()) {
    popup.style.display = "none";
    popup1.style.display = "flex";
    imageKotak9.style.transformOrigin = "top left";
    imageKotak9.style.transform = "rotate(180deg)";

    updateScore(-50);

    setTimeout(function () {
      popup1.style.display = "none";
      imageKotak9.style.transform = "rotate(0deg)";
    }, 2500);
  } else if (value.toLowerCase() === h29Element.innerText.toLowerCase()) {
    popup.style.display = "flex";
    popup1.style.display = "none";
    imageKotak9.style.transform = "rotate(180deg)";

    updateScore(100);

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak9.style.transform = "rotate(0deg)";

      game10.style.display = "block";
    }, 3500);

    setTimeout(function () {
      game9.style.display = "none";
    }, 4500);

    setTimeout(function () {
      game10.style.display = "block";
    }, 5500);
  } else {
    popup.style.display = "flex";
    imageKotak9.style.transformOrigin = "top left";
    imageKotak9.style.transform = "rotate(180deg)";

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak9.style.transform = "rotate(0deg)";
    }, 2500);
  }
}

// game 10

function handleButtonClickGame10() {
  const h210Element = document.querySelector(".h210");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  const imageKotak10 = document.querySelector(".imagekotak10");
  const game1 = document.querySelector(".game1");
  const game10 = document.querySelector(".game10");
  const button10 = document.querySelector(".button10");
  const end1 = document.querySelector(".end1");
  const gameContainer = document.querySelector(".game-container");

  // Mendapatkan nilai input
  const value = document.querySelector(".input10").value.trim();

  if (!value) {
    alert("Silahkan Tulis jawaban mu terlebih dahulu!!");
    return; // Stop further execution
  }

  if (value.toLowerCase() !== h210Element.innerText.toLowerCase()) {
    popup.style.display = "none";
    popup1.style.display = "flex";
    imageKotak10.style.transformOrigin = "top left";
    imageKotak10.style.transform = "rotate(180deg)";

    updateScore(-50);

    setTimeout(function () {
      popup1.style.display = "none";
      imageKotak10.style.transform = "rotate(0deg)";
    }, 2500);
  } else if (value.toLowerCase() === h210Element.innerText.toLowerCase()) {
    popup.style.display = "flex";
    popup1.style.display = "none";
    imageKotak10.style.transform = "rotate(180deg)";

    updateScore(100);

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak10.style.transform = "rotate(0deg)";

      // game1.style.display = "block";
    }, 3500);

    setTimeout(function () {
      game10.style.display = "none";
    }, 4500);

    setTimeout(function () {
      end1.style.display = "block";
      gameContainer.style.display = "none";
    }, 5500);
  } else {
    popup.style.display = "flex";
    imageKotak10.style.transformOrigin = "top left";
    imageKotak10.style.transform = "rotate(180deg)";

    setTimeout(function () {
      popup.style.display = "none";
      imageKotak10.style.transform = "rotate(0deg)";
    }, 2500);
  }
}
