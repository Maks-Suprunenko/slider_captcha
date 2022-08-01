var input = document.getElementById("answer");
var checkBtn = document.getElementById("check");
var nextBtn = document.getElementById("nextTask");
var labelTask = document.getElementsByTagName("label")[0];
var callBack = document.getElementById("callBack");

var res = 12;
checkBtn.addEventListener("click", check);
document.addEventListener("keydown", check);

nextBtn.addEventListener("click", function() {
  callBack.innerHTML = "";
  var arr = generateNumsEasy();
  labelTask.innerHTML = arr[0] + " x " + arr[1] + " = ";
  res = arr[0] * arr[1];
});


function generateNumsEasy() {
  let x = ~~(1 + Math.random() * (10 - 1));
  let y = ~~(1 + Math.random() * (10 - 1));
  return [x, y];
}

function check(e) {
  if(e.keyCode == 13 || e.keyCode == null) {
    if (res == +input.value) {
      callBack.innerHTML = "Вірно";
    } else {
      callBack.innerHTML = "Помилка. Правильна відповідь: " + res;
    }
  }
}
