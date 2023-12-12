function checkInputGame1(value) {
  const h21Element = document.querySelector(".h21");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  const popup2 = document.querySelector(".popup2");
  const gameKotak1 = document.querySelector(".gamekotak1");
  const imageKotak1 = document.querySelector(".imagekotak1");
  const button1 = document.querySelector(".button1");
  const game2 = document.querySelector(".game2");
  const game1 = document.querySelector(".game1");

  button1.addEventListener("click", function () {
    if (value.trim() === "") {
      popup2.style.display = "flex";
      imageKotak1.style.transform = "translateX(0)";

      setTimeout(function () {
        popup2.style.display = "none";
        imageKotak1.style.transform = "translateX(-250px)";
      }, 2500);
    } else if (value.toLowerCase() === h21Element.innerText.toLowerCase()) {
      popup.style.display = "flex";
      popup1.style.display = "none";
      imageKotak1.style.transform = "translateX(-250px)";

      setTimeout(function () {
        popup.style.display = "none";
        imageKotak1.style.transform = "translateX(0)";
        // kotak2.style.display = "none";
      }, 4500);

      setTimeout(function () {
        // popup.style.display = "none";
        // kotak3.style.transform = "translateX(0)";
        game2.style.display = "block";
        game1.style.display = "none";
      }, 7500);
    } else if (value.toLowerCase() != h21Element.innerText.toLowerCase()) {
      popup.style.display = "none";
      popup1.style.display = "flex";
      popup2.style.display = "none";
      imageKotak1.style.transform = "translateX(-250px)";

      setTimeout(function () {
        popup1.style.display = "none";
        imageKotak1.style.transform = "translateX(0)";
      }, 4500);

      setTimeout(function () {
        // game2.style.display = "block";
        // kotak2.style.display = "none";
      }, 7500);
    } else {
      game1.style.display = "none";
      game2.style.display = "block";
    }
  });
}

// function handleButtonClick() {
//   const kotak3 = document.querySelector(".kotak3");
//   kotak3.style.transform = "translateX(-150px)";

//   // Hide kotak2 after a delay
//   setTimeout(function () {
//     const kotak2 = document.querySelector(".kotak2");
//     kotak2.style.display = "none";

//     // Show game2 after another delay
//     setTimeout(function () {
//       const game2 = document.querySelector(".game2");
//       game2.style.display = "block";
//     }, 6000); // Adjust the delay time (in milliseconds) as needed
//   }, 6000); // Adjust the delay time (in milliseconds) as needed
// }

// game2 start
function checkInputGame2(value) {
  const h22Element = document.querySelector(".h22");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  const imageKotak2 = document.querySelector(".imagekotak2");
  const button2 = document.querySelector(".button2");
  const gameKotak2 = document.querySelector(".gamekotak2");
  const gameKotak3 = document.querySelector(".gamekotak3");
  const game2 = document.querySelector(".game2");
  const game3 = document.querySelector(".game3");

  button2.addEventListener("click", function () {
    if (value.trim() === "") {
      popup2.style.display = "flex";
      imageKotak2.style.transform = "translateX(0)";

      setTimeout(function () {
        popup2.style.display = "none";
        imageKotak2.style.transform = "translateX(-250px)";
      }, 2500);
    } else if (value.toLowerCase() === h22Element.innerText.toLowerCase()) {
      popup.style.display = "flex";
      popup1.style.display = "none";
      imageKotak2.style.transform = "translateX(-250px)";

      setTimeout(function () {
        popup.style.display = "none";
        imageKotak2.style.transform = "translateX(0)";
        // kotak2.style.display = "none";
      }, 4500);

      setTimeout(function () {
        // popup.style.display = "none";
        // kotak3.style.transform = "translateX(0)";
        game3.style.display = "block";
        game2.style.display = "none";
      }, 7500);
    } else if (value.toLowerCase() != h22Element.innerText.toLowerCase()) {
      // popup.style.display = "none";
      popup1.style.display = "flex";
      // popup2.style.display = "none";
      imageKotak2.style.transform = "translateX(-250px)";

      setTimeout(function () {
        popup1.style.display = "none";
        imageKotak2.style.transform = "translateX(0)";
      }, 4500);

      setTimeout(function () {
        game2.style.display = "block";
        // kotak2.style.display = "none";
      }, 7500);
    } else {
      game2.style.display = "none";
      game3.style.display = "block";
    }
  });
}
//   button2.addEventListener("click", function () {
//     if (value.toLowerCase() === h22Element.innerText.toLowerCase()) {
//       popup.style.display = "flex";
//       popup1.style.display = "none";
//       imageKotak2.style.transform = "translateX(-250px)";
//       // gameKotak2.style.display = "none";
//       // gameKotak3.style.display = "block";

//       setTimeout(function () {
//         popup.style.display = "none";
//       }, 7500);

//       setTimeout(function () {
//         gameKotak3.style.display = "block";
//         gameKotak2.style.display = "none";
//       }, 6500);

//       setTimeout(function () {
//         imageKotak2.style.transform = "translateX(0)";
//       }, 4500);
//     } else if (value.toLowerCase() != h2Element.innerText.toLowerCase()) {
//       popup.style.display = "none";
//       popup1.style.display = "flex";
//       imageKotak2.style.transform = "translateX(-250px)";
//       setTimeout(function () {
//         popup1.style.display = "none";
//       }, 2500);

//       setTimeout(function () {
//         imageKotak2.style.transform = "translateX(0)";
//       }, 4500);
//     } else {
//       gameKotak2.style.display = "none";
//       gameKotak3.style.display = "block";
//     }
//   });
// }

// function handleButtonClickGame2() {
//   const imageKotak2 = document.querySelector(".imagekotak2");
//   imageKotak2.style.transform = "translateX(-250px)";
// }
// game2 end

//game3 start
function checkInputGame3(value) {
  const h23Element = document.querySelector(".h23");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  const imageKotak3 = document.querySelector(".imagekotak3");
  const button3 = document.querySelector(".button3");
  const game4 = document.querySelector(".game4");
  const game3 = document.querySelector(".game3");

  button3.addEventListener("click", function () {
    if (value.trim() === "") {
      popup2.style.display = "flex";
      imageKotak3.style.transform = "translateX(0)";

      setTimeout(function () {
        popup2.style.display = "none";
        imageKotak3.style.transform = "translateX(-250px)";
      }, 2500);
    } else if (value.toLowerCase() === h23Element.innerText.toLowerCase()) {
      popup.style.display = "flex";
      popup1.style.display = "none";
      imageKotak3.style.transform = "translateX(-250px)";

      setTimeout(function () {
        popup.style.display = "none";
        imageKotak3.style.transform = "translateX(0)";
        // kotak2.style.display = "none";
      }, 4500);

      setTimeout(function () {
        // popup.style.display = "none";
        // kotak3.style.transform = "translateX(0)";
        game4.style.display = "block";
        game3.style.display = "none";
      }, 7500);
    } else if (value.toLowerCase() != h23Element.innerText.toLowerCase()) {
      // popup.style.display = "none";
      popup1.style.display = "flex";
      // popup2.style.display = "none";
      imageKotak3.style.transform = "translateX(-250px)";

      setTimeout(function () {
        popup1.style.display = "none";
        imageKotak3.style.transform = "translateX(0)";
      }, 4500);

      setTimeout(function () {
        game3.style.display = "block";
        kotak2.style.display = "none";
      }, 7500);
    } else {
      game3.style.display = "none";
      game4.style.display = "block";
    }
  });
}
//game3 end

//game4 start
function checkInputGame4(value) {
  const h24Element = document.querySelector(".h24");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  const imageKotak4 = document.querySelector(".imagekotak4");
  const button4 = document.querySelector(".button4");
  const game4 = document.querySelector(".game4");
  const game5 = document.querySelector(".game5");
  // const popup2 = document.querySelector(".popup2");

  button4.addEventListener("click", function () {
    if (value.trim() === "") {
      popup2.style.display = "flex";
      imageKotak4.style.transform = "translateX(0)";

      setTimeout(function () {
        popup2.style.display = "none";
        imageKotak4.style.transform = "translateX(-250px)";
      }, 2500);
    } else if (value.toLowerCase() === h24Element.innerText.toLowerCase()) {
      popup.style.display = "flex";
      popup1.style.display = "none";
      imageKotak4.style.transform = "translateX(-250px)";

      setTimeout(function () {
        popup.style.display = "none";
        imageKotak4.style.transform = "translateX(0)";
        // kotak2.style.display = "none";
      }, 4500);

      setTimeout(function () {
        // popup.style.display = "none";
        // kotak3.style.transform = "translateX(0)";
        game5.style.display = "block";
        game4.style.display = "none";
      }, 7500);
    } else if (value.toLowerCase() != h24Element.innerText.toLowerCase()) {
      // popup.style.display = "none";
      popup1.style.display = "flex";
      // popup2.style.display = "none";
      imageKotak4.style.transform = "translateX(-250px)";

      setTimeout(function () {
        popup1.style.display = "none";
        imageKotak4.style.transform = "translateX(0)";
      }, 4500);

      setTimeout(function () {
        game3.style.display = "block";
        // kotak2.style.display = "none";
      }, 7500);
    } else {
      game4.style.display = "none";
      game5.style.display = "block";
    }
  });
}
//game4 end

//game5 start
function checkInputGame5(value) {
  const h25Element = document.querySelector(".h25");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  const imageKotak5 = document.querySelector(".imagekotak5");
  const button5 = document.querySelector(".button5");
  const game5 = document.querySelector(".game5");
  const game6 = document.querySelector(".game6");

  button5.addEventListener("click", function () {
    if (value.trim() === "") {
      popup2.style.display = "flex";
      imageKotak5.style.transform = "translateX(0)";

      setTimeout(function () {
        popup2.style.display = "none";
        imageKotak5.style.transform = "translateX(-250px)";
      }, 2500);
    } else if (value.toLowerCase() === h25Element.innerText.toLowerCase()) {
      popup.style.display = "flex";
      popup1.style.display = "none";
      imageKotak5.style.transform = "translateX(-250px)";

      setTimeout(function () {
        popup.style.display = "none";
        imageKotak5.style.transform = "translateX(0)";
      }, 6500);

      setTimeout(function () {
        game5.style.display = "none";
      }, 7500);

      setTimeout(function () {
        game6.style.display = "block";
      }, 7500);
    } else if (value.toLowerCase() != h25Element.innerText.toLowerCase()) {
      popup1.style.display = "flex";
      imageKotak5.style.transform = "translateX(-250px)";

      setTimeout(function () {
        popup1.style.display = "none";
        imageKotak5.style.transform = "translateX(0)";
      }, 4500);

      // setTimeout(function () {
      //   game6.style.display = "block";
      // }, 7500);
    } else {
      game5.style.display = "none";
      game6.style.display = "block";
    }
  });
}
//game5 end

//game6 start
function checkInputGame6(value) {
  const h26Element = document.querySelector(".h26");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  // const popup2 = document.querySelector(".popup2");
  const imageKotak6 = document.querySelector(".imagekotak6");
  const button6 = document.querySelector(".button6");
  const game7 = document.querySelector(".game7");
  const game6 = document.querySelector(".game6");

  button6.addEventListener("click", function () {
    if (value.trim() === "") {
      popup2.style.display = "flex";
      imageKotak6.style.transform = "translateX(0)";

      setTimeout(function () {
        popup2.style.display = "none";
        imageKotak6.style.transform = "translateX(-250px)";
      }, 2500);
    } else if (value.toLowerCase() === h26Element.innerText.toLowerCase()) {
      popup.style.display = "flex";
      popup1.style.display = "none";
      imageKotak6.style.transform = "translateX(-250px)";

      setTimeout(function () {
        popup.style.display = "none";
        imageKotak6.style.transform = "translateX(0)";
      }, 6500);

      setTimeout(function () {
        game6.style.display = "none";
      }, 7500);

      setTimeout(function () {
        game7.style.display = "block";
      }, 7500);
    } else if (value.toLowerCase() != h26Element.innerText.toLowerCase()) {
      popup1.style.display = "flex";
      imageKotak6.style.transform = "translateX(-250px)";

      setTimeout(function () {
        popup1.style.display = "none";
        imageKotak6.style.transform = "translateX(0)";
      }, 4500);

      // setTimeout(function () {
      //   game6.style.display = "block";
      // }, 7500);
    } else {
      game6.style.display = "none";
      game7.style.display = "block";
    }
  });
}
//game6 end

//game7 start
function checkInputGame7(value) {
  const h27Element = document.querySelector(".h27");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  const popup2 = document.querySelector(".popup2");
  const imageKotak7 = document.querySelector(".imagekotak7");
  const button7 = document.querySelector(".button7");
  const game7 = document.querySelector(".game7");
  const game8 = document.querySelector(".game8");

  button7.addEventListener("click", function () {
    if (value.trim() === "") {
      popup2.style.display = "flex";
      imageKotak7.style.transform = "translateX(0)";

      setTimeout(function () {
        popup2.style.display = "none";
        imageKotak7.style.transform = "translateX(-250px)";
      }, 2500);
    } else if (value.toLowerCase() === h27Element.innerText.toLowerCase()) {
      popup.style.display = "flex";
      popup1.style.display = "none";
      imageKotak7.style.transform = "translateX(-250px)";

      setTimeout(function () {
        popup.style.display = "none";
        imageKotak7.style.transform = "translateX(0)";
      }, 6500);

      setTimeout(function () {
        game7.style.display = "none";
      }, 7500);

      setTimeout(function () {
        game8.style.display = "block";
      }, 7500);
    } else if (value.toLowerCase() != h27Element.innerText.toLowerCase()) {
      popup1.style.display = "flex";
      imageKotak7.style.transform = "translateX(-250px)";

      setTimeout(function () {
        popup1.style.display = "none";
        imageKotak7.style.transform = "translateX(0)";
      }, 4500);

      // setTimeout(function () {
      //   game6.style.display = "block";
      // }, 7500);
    } else {
      game7.style.display = "none";
      game8.style.display = "block";
    }
  });
}
//game7 end

//game8 start
function checkInputGame8(value) {
  const h28Element = document.querySelector(".h28");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  // const popup2 = document.querySelector(".popup2");
  const imageKotak8 = document.querySelector(".imagekotak8");
  const button8 = document.querySelector(".button8");
  const game8 = document.querySelector(".game8");
  const game9 = document.querySelector(".game9");

  button8.addEventListener("click", function () {
    if (value.trim() === "") {
      popup2.style.display = "flex";
      imageKotak8.style.transform = "translateX(0)";

      setTimeout(function () {
        popup2.style.display = "none";
        imageKotak8.style.transform = "translateX(-250px)";
      }, 2500);
    } else if (value.toLowerCase() === h28Element.innerText.toLowerCase()) {
      popup.style.display = "flex";
      popup1.style.display = "none";
      imageKotak8.style.transform = "translateX(-250px)";

      setTimeout(function () {
        popup.style.display = "none";
        imageKotak8.style.transform = "translateX(0)";
      }, 6500);

      setTimeout(function () {
        game8.style.display = "none";
      }, 7500);

      setTimeout(function () {
        game9.style.display = "block";
      }, 7500);
    } else if (value.toLowerCase() != h28Element.innerText.toLowerCase()) {
      popup1.style.display = "flex";
      imageKotak8.style.transform = "translateX(-250px)";

      setTimeout(function () {
        popup1.style.display = "none";
        imageKotak8.style.transform = "translateX(0)";
      }, 4500);

      // setTimeout(function () {
      //   game6.style.display = "block";
      // }, 7500);
    } else {
      game8.style.display = "none";
      game9.style.display = "block";
    }
  });
}
//game8 end

//game9 start
function checkInputGame9(value) {
  const h29Element = document.querySelector(".h29");
  const popup = document.querySelector(".popup");
  const popup1 = document.querySelector(".popup1");
  // const popup2 = document.querySelector(".popup2");
  const imageKotak9 = document.querySelector(".imagekotak9");
  const button9 = document.querySelector(".button9");
  const game9 = document.querySelector(".game9");
  const game1 = document.querySelector(".game1");
  const containerEnd = document.querySelector(".container-end");

  button9.addEventListener("click", function () {
    // game9.style.display = "none";
    // game1.style.display = "block";
    // game1.style.display = "block";
    // game1.style.display = "block";
    if (value.trim() === "") {
      popup2.style.display = "flex";
      imageKotak9.style.transform = "translateX(0)";

      setTimeout(function () {
        popup2.style.display = "none";
        imageKotak9.style.transform = "translateX(-250px)";
      }, 2500);
    } else if (value.toLowerCase() === h29Element.innerText.toLowerCase()) {
      popup.style.display = "flex";
      popup1.style.display = "none";
      imageKotak9.style.transform = "translateX(-250px)";

      setTimeout(function () {
        popup.style.display = "none";
        imageKotak9.style.transform = "translateX(0)";
      }, 6500);

      setTimeout(function () {
        game9.style.display = "none";
      }, 7500);

      setTimeout(function () {
        // game1.style.display = "block";
        containerEnd.style.display = "block";

        document.querySelector(".input1").value = "";
        document.querySelector(".input2").value = "";
        document.querySelector(".input3").value = "";
        document.querySelector(".input4").value = "";
        document.querySelector(".input5").value = "";
        document.querySelector(".input6").value = "";
        document.querySelector(".input7").value = "";
        document.querySelector(".input8").value = "";
      }, 7500);
    } else if (value.toLowerCase() != h29Element.innerText.toLowerCase()) {
      popup1.style.display = "flex";
      imageKotak9.style.transform = "translateX(-250px)";

      setTimeout(function () {
        popup1.style.display = "none";
        imageKotak9.style.transform = "translateX(0)";
      }, 4500);

      // setTimeout(function () {
      //   game6.style.display = "block";
      // }, 7500);
    } else {
      game9.style.display = "none";
      // game1.style.display = "block";
      containerEnd.style.display = "block";
    }
  });
}
//game9 end

const game1 = document.querySelector(".game1");
const containerEnd = document.querySelector(".container-end");

containerEnd.addEventListener("click", function () {
  game1.style.display = "block";
  containerEnd.style.display = "none";
});
