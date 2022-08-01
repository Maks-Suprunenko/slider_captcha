var arrObj = [
{value:[[1,1,1],
        [1,0,1],
        [1,0,1],
        [1,0,1],
        [1,1,1]]},
{value:[[0,0,1],
        [0,0,1],
        [0,0,1],
        [0,0,1],
        [0,0,1]]},
{value:[[1,1,1],
        [0,0,1],
        [1,1,1],
        [1,0,0],
        [1,1,1]]},
{value:[[1,1,1],
        [0,0,1],
        [0,1,0],
        [0,0,1],
        [1,1,1]]},
{value:[[1,0,1],
        [1,0,1],
        [1,1,1],
        [0,0,1],
        [0,0,1]]},
{value:[[1,1,1],
        [1,0,0],
        [1,1,1],
        [0,0,1],
        [1,1,1]]},
{value:[[1,1,1],
        [1,0,0],
        [1,1,1],
        [1,0,1],
        [1,1,1]]},
{value:[[1,1,1],
        [0,0,1],
        [0,1,0],
        [0,1,0],
        [0,1,0]]},
{value:[[1,1,1],
        [1,0,1],
        [1,1,1],
        [1,0,1],
        [1,1,1]]},
{value:[[1,1,1],
        [1,0,1],
        [1,1,1],
        [0,0,1],
        [1,1,1]]
 }];

let input = document.getElementById("inputField");
let checkBtn = document.getElementById("checkBtn");
let reloadBtn = document.getElementById("reloadBtn");
let container = document.getElementById("captcha");

let number = "0";

reloadBtn.addEventListener('click', generateCapture);
checkBtn.addEventListener("click", checkCapcha);
generateCapture();

function checkCapcha(e) {
  if (number === input.value) {
    alert("Ok");
  } else {
    alert("False");
  }
  generateCapture();
}

function generateCapture() {
  container.innerHTML = "";
  number = Math.floor(Math.random() * Math.floor(1e5)) + "";
  console.log(number);


  for(let i = 0; i < 5; i++) {
    for(let j = 0; j < number.length; j++) {
      for(let k = 0; k < 3; k++) {
        console.log(i, j, k);
        console.log(number[j]);
        console.log(arrObj[+number[j]].value[i][k]);
        if (arrObj[+number[j]].value[i][k]){
          let redSpan = document.createElement("span");
          redSpan.style.backgroundColor = "blue";
          container.appendChild(redSpan);
        }
          else {
          let whiteSpan = document.createElement("span");
          whiteSpan.style.backgroundColor = "white";
          container.appendChild(whiteSpan);
        }  
      }
      let whiteSpan = document.createElement("span");
      whiteSpan.style.backgroundColor = "white";
      container.appendChild(whiteSpan);
    }
    container.appendChild(document.createElement("br"));
  }
}


 
 