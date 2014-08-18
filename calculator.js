var lastMi = document.getElementById('last-change-miles');
var lastDate = document.getElementById('last-change-date');
var synthetic;
var errorMessage = document.getElementById('input-error');

lastMi.value = "Enter Mileage";
lastDate.value = "MM/YYYY";

var nextMi = document.getElementById('next-change-miles');
var nextDate = document.getElementById('next-change-date');

var elCalcBtn = document.getElementById('calculate');
var elSchedBtn = document.getElementById('schedule');

elCalcBtn.addEventListener('click', oilCalculation, false);
elSchedBtn.addEventListener('click', scheduleChange, false);

lastMi.addEventListener('blur', inputCheck(lastMi), false);
lastDate.addEventListener('blur', inputCheck(lastDate), false);

function inputCheck (elCheck) {

  if (elCheck.value === "Enter Mileage" || elCheck.value === "MM/YYYY") {
    errorMessage.innerHTML = 'Please fill out entire form.';

  }
  else {
    errorMessage.innerHTML = '';
  }
}

function getInput () {

  lastMi = parseInt(document.getElementById('last-change-miles').value);
  lastDate = document.getElementById('last-change-date').value;
  synthetic = document.getElementById('last-change-synth').checked;
}

function getNextDate (monthsToChange) {

  var month = parseInt(lastDate.slice(0, 2));
  var year = parseInt(lastDate.slice(3));

  month += monthsToChange;

  if(month > 12) {
    year++;
    month = month % 12;
  }

  nextDate.value = month + "/" + year;
}

function getNextChange() {

  if (synthetic) {
    nextMi.value = lastMi + 10000;
    getNextDate(9);
  }
  else {
    nextMi.value = lastMi + 5000;
    getNextDate(6);
  }
}

function oilCalculation () {

  getInput();

  getNextChange();

}

function scheduleChange () {


}
