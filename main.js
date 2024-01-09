const title = document.querySelector("h1");
let mainContainer = document.createElement("div");

mainContainer.classList.add("container");

title.append(mainContainer);
//print fizz buzz in console based on the remainders of the numb/s from 1 to 100
for (let i = 1; i <= 100; i++) {
  let singleCell = document.createElement("div");
  singleCell.classList.add("cell");
  mainContainer.appendChild(singleCell);
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
    singleCell.innerHTML = "FizzBuzz";
    singleCell.classList.add("fizz-buzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
    singleCell.innerHTML = "Buzz";
    singleCell.classList.add("buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
    singleCell.innerHTML = "Fizz";
    singleCell.classList.add("fizz");
  } else {
    console.log(i);
    singleCell.innerHTML = i;
    singleCell.classList.add("normal");
  }
}
