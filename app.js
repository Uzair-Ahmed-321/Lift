// document.getElementById("btn1").addEventListener("click", function () {
//   moveLift(1);
// });

// function moveLift(floor) {
//   const lift = document.getElementById("left");
//   const right = document.getElementById("right");
//   const floorHeight = 100;
//   const newPosition = (floor - 1) * floorHeight;
//   lift.style.bottom = newPosition + "px";
//   right.style.bottom = newPosition + "px";

//   setTimeout(() => {
//     openDoors();
//     setTimeout(closeDoors, 1000);
//   }, 500);
// }

// function openDoors() {
//   const lift = document.getElementById("left");
//   const right = document.getElementById("right");

//   lift.classList.add("open-left");
//   right.classList.add("open-right");
// }

// function closeDoors() {
//   const lift = document.getElementById("left");
//   const right = document.getElementById("right");

//   lift.classList.remove("open-left");
//   right.classList.remove("open-right");
// }

function moveLift(floor) {
  const lift = document.getElementById("left");
  const right = document.getElementById("right");
  const floorHeight = 100;
  const newPosition = (floor - 1) * floorHeight;
  lift.style.bottom = newPosition + "px";
  right.style.bottom = newPosition + "px";

  setTimeout(() => {
    openDoors();
    setTimeout(closeDoors, 1000);
  }, 500);
}

function openDoors() {
  const lift = document.getElementById("left");
  const right = document.getElementById("right");

  lift.classList.add("open-left");
  right.classList.add("open-right");
}

function closeDoors() {
  const lift = document.getElementById("left");
  const right = document.getElementById("right");

  lift.classList.remove("open-left");
  right.classList.remove("open-right");
}
