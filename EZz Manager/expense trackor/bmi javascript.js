// Flip card
// In RX $ stands for Stream
//Get elements
var infoButton = document.getElementById('jsInfoButton');
var closeButton = document.getElementById('jsCloseButton');
var bmiContainer = document.querySelector('.c-bmi-container');

//On click on info button toggles flip class on c-bmi-container 
const infoButtonClicks$ = Rx.Observable.fromEvent(infoButton, 'click');
  
//Close Info
const closeButtonClicks$ = Rx.Observable.fromEvent(closeButton, 'click');

const flipSubscription = Rx.Observable.merge(infoButtonClicks$, closeButtonClicks$)
  .subscribe(() => bmiContainer.classList.toggle('flipped'));


// BMI Calculator
// Get elements 
var weightSliderElem = document.querySelector('#weight-slider');
var heightSliderElem = document.querySelector('#height-slider');

var weightTextElem = document.querySelector('#weight-text');
var heightTextElem = document.querySelector('#height-text');

var bmiTextElem = document.querySelector('#bmi-text');

// Observables
var weight = Rx.Observable.fromEvent(weightSliderElem, 'input')
  .map(ev => ev.target.value)
  .startWith(weightSliderElem.value);

var height = Rx.Observable.fromEvent(heightSliderElem, 'input')
  .map(ev => ev.target.value)
  .startWith(heightSliderElem.value);

var bmi = weight.combineLatest(height, (w, h) => (w / (h * h * 0.0001)).toFixed(1));

// Observers
var weightObserver = (x) => weightTextElem.innerHTML = x;
var heightObserver = (x) => heightTextElem.innerHTML = x;
var bmiObserver = (x) => bmiTextElem.innerHTML = x;

// Subscriptions
weight.subscribe(weightObserver);
height.subscribe(heightObserver);
bmi.subscribe(bmiObserver);