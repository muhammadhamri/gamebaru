// const draggableElements = document.querySelectorAll(".draggable");
// const droppableElements = document.querySelectorAll(".droppable");

// draggableElements.forEach((elem) => {
//   elem.addEventListener("dragstart", dragStart);
// });

// droppableElements.forEach((elem) => {
//   elem.addEventListener("dragenter", dragEnter);
//   elem.addEventListener("dragover", dragOver);
//   elem.addEventListener("dragleave", dragLeave);
//   elem.addEventListener("drop", drop);
// });

// function dragStart(event) {
//   event.dataTransfer.setData("text", event.target.id);
// }

// function dragEnter(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.target.classList.add("droppable_hover");
//   }
// }

// function dragOver(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.preventDefault();
//   }
// }

// function dragLeave(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.target.classList.remove("droppable_hover");
//   }
// }

// function drop(event) {
//   event.preventDefault();
//   event.target.classList.remove("droppable_hover");

//   const draggableElementsData = event.dataTransfer.getData("text");
//   const draggableElement = document.getElementById(draggableElementsData);

//   if (draggableElement) {
//     const computedStyle = window.getComputedStyle(draggableElement);
//     event.target.style.backgroundColor = computedStyle.getPropertyValue("color");
//     event.target.classList.add("dropped");
//     draggableElement.classList.add("dragged");
//     draggableElement.setAttribute("draggable", "false");
//     event.target.insertAdjacentHTML("afterbegin", `<i class="fa-solid fa-${draggableElementsData}"></i>`);

//     // Tambahkan poin jika ID sesuai
//     const droppableElementsData = event.target.getAttribute("data-draggable-id");
//     if (draggableElementsData === droppableElementsData) {
//       addPoints(100);
//     } else {
//       addPoints(-50);
//     }
//   }
// }

// // Fungsi untuk menambah poin (disesuaikan dengan kebutuhan Anda)
// let userScore = 0; // Skor awal

// function addPoints(points) {
//   // Tambahkan poin ke skor pengguna
//   userScore += points;

//   // Perbarui tampilan skor di elemen HTML
//   const scoreElement = document.getElementById("user-score");
//   scoreElement.textContent = `Skor: ${userScore}`;
//   const end = document.querySelector(".end");
//   const end1 = document.querySelector(".end1");

//   if (userScore >= 800) {
//     setTimeout(function () {
//       end.style.display = "block";
//     }, 1000);

//     setTimeout(function () {
//       window.location.href = "../present-continious/index.html";
//     }, 20000);
//   } else {
//     setTimeout(function () {
//       end1.style.display = "block";
//     }, 1000);
//   }
// }

//batas batas................................////////

// const draggableElements = document.querySelectorAll(".draggable");
// const droppableElements = document.querySelectorAll(".droppable");

// // Array to store the status of each draggable element
// const droppedElements = Array.from(draggableElements).fill(false);

// draggableElements.forEach((elem) => {
//   elem.addEventListener("dragstart", dragStart);
// });

// droppableElements.forEach((elem) => {
//   elem.addEventListener("dragenter", dragEnter);
//   elem.addEventListener("dragover", dragOver);
//   elem.addEventListener("dragleave", dragLeave);
//   elem.addEventListener("drop", drop);
// });

// function dragStart(event) {
//   event.dataTransfer.setData("text", event.target.id);
// }

// function dragEnter(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.target.classList.add("droppable_hover");
//   }
// }

// function dragOver(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.preventDefault();
//   }
// }

// function dragLeave(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.target.classList.remove("droppable_hover");
//   }
// }

// function drop(event) {
//   event.preventDefault();
//   event.target.classList.remove("droppable_hover");

//   const draggableElementsData = event.dataTransfer.getData("text");
//   const draggableElement = document.getElementById(draggableElementsData);

//   if (draggableElement) {
//     const computedStyle = window.getComputedStyle(draggableElement);
//     event.target.style.backgroundColor = computedStyle.getPropertyValue("color");
//     event.target.classList.add("dropped");
//     draggableElement.classList.add("dragged");
//     draggableElement.setAttribute("draggable", "false");
//     event.target.insertAdjacentHTML("afterbegin", `<i class="fa-solid fa-${draggableElementsData}"></i>`);

//     // Tandai elemen draggable sebagai sudah di-drop
//     const draggableIndex = Array.from(draggableElements).findIndex((elem) => elem === draggableElement);
//     droppedElements[draggableIndex] = true;

//     // Tambahkan poin jika ID sesuai
//     const droppableElementsData = event.target.getAttribute("data-draggable-id");
//     if (draggableIndex.toString() === droppableElementsData) {
//       addPoints(100);
//     } else {
//       addPoints(-50);
//     }

//     // Cek apakah semua elemen draggable sudah di-drop
//     if (droppedElements.every((dropped) => dropped) && userScore < 1000) {
//       // Munculkan element dengan class "end1"
//       const end1 = document.querySelector(".end1");
//       end1.style.display = "block";
//     }
//   }
// }

// // Fungsi untuk menambah poin (disesuaikan dengan kebutuhan Anda)
// let userScore = 0; // Skor awal

// function addPoints(points) {
//   // Tambahkan poin ke skor pengguna
//   userScore += points;

//   // Perbarui tampilan skor di elemen HTML
//   const scoreElement = document.getElementById("user-score");
//   scoreElement.textContent = `Skor: ${userScore}`;
// }
//////batas.................................////////
// const draggableElements = document.querySelectorAll(".draggable");
// const droppableElements = document.querySelectorAll(".droppable");

// // Array to store the status of each draggable element
// const droppedElements = Array.from(draggableElements).fill(false);

// draggableElements.forEach((elem) => {
//   elem.addEventListener("dragstart", dragStart);
// });

// droppableElements.forEach((elem) => {
//   elem.addEventListener("dragenter", dragEnter);
//   elem.addEventListener("dragover", dragOver);
//   elem.addEventListener("dragleave", dragLeave);
//   elem.addEventListener("drop", drop);
// });

// function dragStart(event) {
//   event.dataTransfer.setData("text", event.target.id);
// }

// function dragEnter(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.target.classList.add("droppable_hover");
//   }
// }

// function dragOver(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.preventDefault();
//   }
// }

// function dragLeave(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.target.classList.remove("droppable_hover");
//   }
// }

// function drop(event) {
//   event.preventDefault();
//   event.target.classList.remove("droppable_hover");

//   const draggableElementsData = event.dataTransfer.getData("text");
//   const draggableElement = document.getElementById(draggableElementsData);

//   if (draggableElement) {
//     const computedStyle = window.getComputedStyle(draggableElement);
//     event.target.style.backgroundColor = computedStyle.getPropertyValue("color");
//     event.target.classList.add("dropped");
//     draggableElement.classList.add("dragged");
//     draggableElement.setAttribute("draggable", "false");
//     event.target.insertAdjacentHTML("afterbegin", `<i class="fa-solid fa-${draggableElementsData}"></i>`);

//     // Tandai elemen draggable sebagai sudah di-drop
//     const draggableIndex = Array.from(draggableElements).findIndex((elem) => elem === draggableElement);
//     droppedElements[draggableIndex] = true;

//     // Tambahkan poin jika ID sesuai
//     const droppableElementsData = event.target.getAttribute("data-draggable-id");
//     if (draggableIndex.toString() === droppableElementsData) {
//       addPoints(100);
//     } else {
//       addPoints(-50);
//     }

//     // Cek apakah semua elemen draggable sudah di-drop
//     if (droppedElements.every((dropped) => dropped) && userScore < 1000) {
//       // Munculkan element dengan class "end1"
//       const end1 = document.querySelector(".end1");
//       end1.style.display = "block";
//     }
//   }
// }

// // Fungsi untuk menambah poin (disesuaikan dengan kebutuhan Anda)
// let userScore = 0; // Skor awal

// function addPoints(points) {
//   // Tambahkan poin ke skor pengguna
//   userScore += points;

//   // Perbarui tampilan skor di elemen HTML
//   const scoreElement = document.getElementById("user-score");
//   scoreElement.textContent = `Skor: ${userScore}`;
// }

////////  batas batas .............//////////////////

// const draggableElements = document.querySelectorAll(".draggable");
// const droppableElements = document.querySelectorAll(".droppable");

// // Array to store the status of each draggable element
// const droppedElements = Array.from(draggableElements).fill(false);

// draggableElements.forEach((elem) => {
//   elem.addEventListener("dragstart", dragStart);
// });

// droppableElements.forEach((elem) => {
//   elem.addEventListener("dragenter", dragEnter);
//   elem.addEventListener("dragover", dragOver);
//   elem.addEventListener("dragleave", dragLeave);
//   elem.addEventListener("drop", drop);
// });

// function dragStart(event) {
//   event.dataTransfer.setData("text", event.target.id);
// }

// function dragEnter(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.target.classList.add("droppable_hover");
//   }
// }

// function dragOver(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.preventDefault();
//   }
// }

// function dragLeave(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.target.classList.remove("droppable_hover");
//   }
// }

// function drop(event) {
//   event.preventDefault();
//   event.target.classList.remove("droppable_hover");

//   const draggableElementsData = event.dataTransfer.getData("text");
//   const draggableElement = document.getElementById(draggableElementsData);

//   if (draggableElement) {
//     const computedStyle = window.getComputedStyle(draggableElement);
//     event.target.style.backgroundColor = computedStyle.getPropertyValue("color");
//     event.target.classList.add("dropped");
//     draggableElement.classList.add("dragged");
//     draggableElement.setAttribute("draggable", "false");
//     event.target.insertAdjacentHTML("afterbegin", `<i class="fa-solid fa-${draggableElementsData}"></i>`);

//     // Tandai elemen draggable sebagai sudah di-drop
//     const draggableIndex = Array.from(draggableElements).findIndex((elem) => elem === draggableElement);
//     droppedElements[draggableIndex] = true;

//     // Tambahkan poin jika ID sesuai
//     const droppableElementsData = event.target.getAttribute("data-draggable-id");
//     if (draggableIndex.toString() === droppableElementsData) {
//       addPoints(100);
//     } else {
//       addPoints(-50);
//     }

//     // Cek apakah semua elemen draggable sudah di-drop
//     if (droppedElements.every((dropped) => dropped) && userScore < 1000) {
//       // Munculkan element dengan class "end1"
//       const end1 = document.querySelector(".end1");
//       end1.style.display = "block";
//     }
//   }
// }

// // Fungsi untuk menambah poin (disesuaikan dengan kebutuhan Anda)
// let userScore = 0; // Skor awal

// function addPoints(points) {
//   // Tambahkan poin ke skor pengguna
//   userScore += points;

//   // Perbarui tampilan skor di elemen HTML
//   const scoreElement = document.getElementById("user-score");
//   scoreElement.textContent = `Skor: ${userScore}`;
// }

////////////// batas batas ....////////..............

// const draggableElements = document.querySelectorAll(".draggable");
// const droppableElements = document.querySelectorAll(".droppable");

// // Array to store the status of each draggable element
// const droppedElements = Array.from(draggableElements).fill(false);

// draggableElements.forEach((elem) => {
//   elem.addEventListener("dragstart", dragStart);
// });

// droppableElements.forEach((elem) => {
//   elem.addEventListener("dragenter", dragEnter);
//   elem.addEventListener("dragover", dragOver);
//   elem.addEventListener("dragleave", dragLeave);
//   elem.addEventListener("drop", drop);
// });

// function dragStart(event) {
//   event.dataTransfer.setData("text", event.target.id);
// }

// function dragEnter(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.target.classList.add("droppable_hover");
//   }
// }

// function dragOver(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.preventDefault();
//   }
// }

// function dragLeave(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.target.classList.remove("droppable_hover");
//   }
// }

// function drop(event) {
//   event.preventDefault();
//   event.target.classList.remove("droppable_hover");

//   const draggableElementsData = event.dataTransfer.getData("text");
//   const draggableElement = document.getElementById(draggableElementsData);

//   if (draggableElement) {
//     const computedStyle = window.getComputedStyle(draggableElement);
//     event.target.style.backgroundColor = computedStyle.getPropertyValue("color");
//     event.target.classList.add("dropped");
//     draggableElement.classList.add("dragged");
//     draggableElement.setAttribute("draggable", "false");
//     event.target.insertAdjacentHTML("afterbegin", `<i class="fa-solid fa-${draggableElementsData}"></i>`);

//     // Tandai elemen draggable sebagai sudah di-drop
//     const draggableIndex = Array.from(draggableElements).findIndex((elem) => elem === draggableElement);
//     droppedElements[draggableIndex] = true;

//     // Tambahkan poin jika ID sesuai
//     const droppableElementsData = event.target.getAttribute("data-draggable-id");
//     if (draggableIndex.toString() === droppableElementsData) {
//       addPoints(100);
//     } else {
//       addPoints(-50);
//     }

//     // Cek apakah semua elemen draggable sudah di-drop
//     if (droppedElements.every((dropped) => dropped) && userScore < 1000) {
//       // Munculkan element dengan class "end1"
//       const end1 = document.querySelector(".end1");
//       end1.style.display = "block";
//     }
//   }
// }

// // Fungsi untuk menambah poin (disesuaikan dengan kebutuhan Anda)
// let userScore = 0; // Skor awal

// function addPoints(points) {
//   // Tambahkan poin ke skor pengguna
//   userScore += points;

//   // Perbarui tampilan skor di elemen HTML
//   const scoreElement = document.getElementById("user-score");
//   scoreElement.textContent = `Skor: ${userScore}`;
// }

//////////............batas ..........////////////

// const draggableElements = document.querySelectorAll(".draggable");
// const droppableElements = document.querySelectorAll(".droppable");

// // Array to keep track of dropped elements
// const droppedElements = Array.from(draggableElements).fill(false);

// draggableElements.forEach((elem, index) => {
//   elem.addEventListener("dragstart", (event) => dragStart(event, index));
// });

// droppableElements.forEach((elem) => {
//   elem.addEventListener("dragenter", dragEnter);
//   elem.addEventListener("dragover", dragOver);
//   elem.addEventListener("dragleave", dragLeave);
//   elem.addEventListener("drop", drop);
// });

// function dragStart(event, index) {
//   event.dataTransfer.setData("text", index.toString());
// }

// function dragEnter(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.target.classList.add("droppable_hover");
//   }
// }

// function dragOver(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.preventDefault();
//   }
// }

// function dragLeave(event) {
//   if (!event.target.classList.contains("dropped")) {
//     event.target.classList.remove("droppable_hover");
//   }
// }

// function drop(event) {
//   event.preventDefault();
//   event.target.classList.remove("droppable_hover");

//   const draggableIndex = event.dataTransfer.getData("text");
//   const draggableElement = draggableElements[draggableIndex];

//   if (!droppedElements[draggableIndex] && draggableElement) {
//     const droppableElementsData = event.target.getAttribute("data-draggable-id");

//     // Check if the dropped element's ID matches the droppable element's ID
//     if (draggableIndex === droppableElementsData) {
//       addPoints(100);
//     } else {
//       addPoints(-50);
//     }

//     // Mark the draggable element as dropped
//     droppedElements[draggableIndex] = true;

//     // Update UI
//     const computedStyle = window.getComputedStyle(draggableElement);
//     event.target.style.backgroundColor = computedStyle.getPropertyValue("color");
//     event.target.classList.add("dropped");
//     draggableElement.classList.add("dragged");
//     draggableElement.setAttribute("draggable", "false");
//     event.target.insertAdjacentHTML("afterbegin", `<i class="fa-solid fa-${draggableIndex}"></i>`);

//     // Check if all draggable elements are dropped
//     if (droppedElements.every((dropped) => dropped)) {
//       // Check the user's score and display the appropriate message
//       if (userScore < 1000) {
//         alert("Anda gagal"); // Display failure message
//       }
//     }
//   }
// }

// let userScore = 0; // Initial score

// function addPoints(points) {
//   // Update the user's score
//   userScore += points;

//   // Update the score display
//   const scoreElement = document.getElementById("user-score");
//   scoreElement.textContent = `Skor: ${userScore}`;
// }

///////////////,,,,,,,,,........batas///////////

const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

// Array to keep track of dropped elements
const droppedElements = Array.from(draggableElements).fill(false);

draggableElements.forEach((elem, index) => {
  elem.addEventListener("dragstart", (event) => dragStart(event, index));
});

droppableElements.forEach((elem) => {
  elem.addEventListener("dragenter", dragEnter);
  elem.addEventListener("dragover", dragOver);
  elem.addEventListener("dragleave", dragLeave);
  elem.addEventListener("drop", drop);
});

function dragStart(event, index) {
  event.dataTransfer.setData("text", index.toString());
}

function dragEnter(event) {
  if (!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable_hover");
  }
}

function dragOver(event) {
  if (!event.target.classList.contains("dropped")) {
    event.preventDefault();
  }
}

function dragLeave(event) {
  if (!event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable_hover");
  }
}

function drop(event) {
  event.preventDefault();
  event.target.classList.remove("droppable_hover");

  const draggableIndex = event.dataTransfer.getData("text");
  const draggableElement = draggableElements[draggableIndex];

  if (!droppedElements[draggableIndex] && draggableElement) {
    const droppableElementsData = event.target.getAttribute("data-draggable-id");

    // Check if the dropped element's ID matches the droppable element's ID
    if (draggableElement.id === droppableElementsData) {
      addPoints(100);
    } else {
      addPoints(-50);
    }

    // Mark the draggable element as dropped
    droppedElements[draggableIndex] = true;

    // Update UI
    const computedStyle = window.getComputedStyle(draggableElement);
    event.target.style.backgroundColor = computedStyle.getPropertyValue("color");
    event.target.classList.add("dropped");
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "false");
    event.target.insertAdjacentHTML("afterbegin", `<i class="fa-solid fa-${draggableElement.id}"></i>`);

    // Check if all draggable elements are dropped
    if (droppedElements.every((dropped) => dropped)) {
      // Check the user's score and display the appropriate message
      const end = document.querySelector(".end");
      const end1 = document.querySelector(".end1");
      const score = document.querySelector(".score");

      if (userScore < 1000) {
        setTimeout(function () {
          end1.style.display = "block";
          score.style.display = "none";
        }, 1000);
      } else if (userScore >= 1000) {
        setTimeout(function () {
          end.style.display = "block";
          score.style.display = "none";
        }, 1000);

        // setTimeout(function () {
        //   window.location.href = "../present-continious/index.html";
        // }, 3000);
      }
    }
  }
}

let userScore = 0; // Initial score

function addPoints(points) {
  // Update the user's score
  userScore += points;

  // Update the score display
  const scoreElement = document.getElementById("user-score");
  scoreElement.textContent = `Skor: ${userScore}`;
}
