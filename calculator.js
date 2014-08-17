var lastMi;
var lastDate;
var synthetic;

var nextMi = document.getElementById('next-change-miles');
var nextDate = document.getElementById('next-change-date');

var elCalcBtn = document.getElementById('calculate');
var elSchedBtn = document.getElementById('schedule');

elCalcBtn.addEventListener('click', oilCalculation, false);
elSchedBtn.addEventListener('click', scheduleChange, false);

function getInput () {

  lastMi = parseInt(document.getElementById('last-change-miles').value);
  lastDate = document.getElementById('last-change-date').value;
  synthetic = document.getElementById('last-change-synth').checked;
}

function getNextDate () {


}

function getNextMi() {

  if (synthetic) {
    nextMi.value = lastMi + 10000;
    getNextDate();
  }
  else {
    nextMi.value = lastMi + 5000;
    getNextDate();
  }
}

function oilCalculation () {

  getInput();

  getNextMi();

}

function scheduleChange () {


}
