var lastMi = document.getElementById('last-change-miles').value;
var lastDate = document.getElementById('last-change-date').value;
var synthetic = document.getElementById('last-change-synth').checked;
var nextMi = document.getElementById('next-change-miles').value;
var nextDate = document.getElementById('next-change-date').value;

var elCalcBtn = document.getElementById('calculate');
var elSchedBtn = document.getElementById('schedule');

elCalcBtn.addEventListener('click', oilCalculation, false);
elSchedBtn.addEventListener('click', scheduleChange, false);

function oilCalculation () {

  if (synthetic) {
    nextMi = lastMi + 10000;
    nextDate = lastDate;
  }
  else {
    nextMi = lastMi + 5000;
    nextDate = lastDate;
  }
}

function scheduleChange () {


}
