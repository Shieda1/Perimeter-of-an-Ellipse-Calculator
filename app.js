// https://calculator.swiftutors.com/perimeter-of-an-ellipse-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const perimeterofanEllipseRadio = document.getElementById('perimeterofanEllipseRadio');
const radiusofMajorAxisRadio = document.getElementById('radiusofMajorAxisRadio');
const radiusofMinorAxisRadio = document.getElementById('radiusofMinorAxisRadio');

let perimeterofanEllipse;
const PI = Math.PI;
let radiusofMajorAxis = v1;
let radiusofMinorAxis = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

perimeterofanEllipseRadio.addEventListener('click', function() {
  variable1.textContent = 'Radius of Major Axis';
  variable2.textContent = 'Radius of Minor Axis';
  radiusofMajorAxis = v1;
  radiusofMinorAxis = v2;
  result.textContent = '';
});

radiusofMajorAxisRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of an Ellipse';
  variable2.textContent = 'Radius of Minor Axis';
  perimeterofanEllipse = v1;
  radiusofMinorAxis = v2;
  result.textContent = '';
});

radiusofMinorAxisRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of an Ellipse';
  variable2.textContent = 'Radius of Major Axis';
  perimeterofanEllipse = v1;
  radiusofMajorAxis = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(perimeterofanEllipseRadio.checked)
    result.textContent = `Perimeter of an Ellipse = ${computePerimeterofanEllipse().toFixed(2)}`;

  else if(radiusofMajorAxisRadio.checked)
    result.textContent = `Radius of Major Axis = ${computeRadiusofMajorAxis().toFixed(2)}`;

  else if(radiusofMinorAxisRadio.checked)
    result.textContent = `Radius of Minor Axis = ${computeRadiusofMinorAxis().toFixed(2)}`;
})

// calculation

function computePerimeterofanEllipse() {
  return 2 * PI * Math.sqrt((Math.pow(Number(radiusofMajorAxis.value), 2) + Math.pow(Number(radiusofMinorAxis.value), 2)) / 2);
}

function computeRadiusofMajorAxis() {
  return Math.sqrt((Math.pow(Number(perimeterofanEllipse.value), 2) / (2 * Math.pow(PI, 2))) - Math.pow(Number(radiusofMinorAxis.value), 2));
}

function computeRadiusofMinorAxis() {
  return Math.sqrt((Math.pow(Number(perimeterofanEllipse.value), 2) / (2 * Math.pow(PI, 2))) - Math.pow(Number(radiusofMajorAxis.value), 2));
}