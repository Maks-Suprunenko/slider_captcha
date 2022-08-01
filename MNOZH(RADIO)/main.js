var checkRadioArr = document.getElementsByName("answer");
var nextBtn = document.getElementById("nextTask");
var labelTask = document.getElementsByTagName("label")[0];
var callBack = document.getElementById("callBack");

var res = 12;
var preChecked;
var indexArr = [0, 1, 2, 3];
checkRadioArr.forEach(elem => {
  elem.addEventListener("click", check);
});

nextBtn.addEventListener("click", function() {
  if(preChecked)
    preChecked.checked = false;
  callBack.innerHTML = "";
  var arr = generateNumsEasy();
  labelTask.innerHTML = arr[0] + " x " + arr[1] + " = ";
  res = arr[0] * arr[1];

  console.log(checkRadioArr);
  shuffleArray(indexArr);
  console.log(checkRadioArr);
  checkRadioArr[indexArr[0]].value = arr[0] * arr[1];
  checkRadioArr[indexArr[0]].nextElementSibling.innerHTML = arr[0] * arr[1];
  checkRadioArr[indexArr[1]].value = arr[0] + arr[1];
  checkRadioArr[indexArr[1]].nextElementSibling.innerHTML = arr[0] + arr[1];
  checkRadioArr[indexArr[2]].value = arr[0] * arr[1] + ~~(1 + Math.random() * 6);
  checkRadioArr[indexArr[2]].nextElementSibling.innerHTML = checkRadioArr[indexArr[2]].value;
  checkRadioArr[indexArr[3]].value = arr[0] * arr[1] - ~~(1 + Math.random() * 6);
  checkRadioArr[indexArr[3]].nextElementSibling.innerHTML = checkRadioArr[indexArr[3]].value;
});

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

function generateNumsEasy() {
  let x = ~~(1 + Math.random() * 9);
  let y = ~~(1 + Math.random() * 9);
  return [x, y];
}

function check(e) {
  preChecked = e.path[0];
  if(e.path[0].value == res) {
    callBack.innerHTML = "Вірно";
  } else {
    callBack.innerHTML = "Помилка. Правильна відповідь: " + res;
  }
}
