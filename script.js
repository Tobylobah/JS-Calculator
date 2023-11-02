let calculation = '';//i created a variable called calculation
function displayCalc(value){
  calculation = calculation + value;
  document.getElementById('display').value = calculation;
}
//the function displayCalc takes on the parameter value which is an attribute of an input tag. the function takes the varaible calculation ,which is empty and adds it with the attribute value , where value will be displayed depending on the button clicked.
//document.getElementbyId targets display which is the id I set for the input tag and it also targets value where it is equal to calculation , this means the id display of the input tag will be showing cwlculation and remember calculation is calculation + value , an empty string + any value on the button clicked.
let result = "";//creating a variable out of a function because of scoping.
function calculateResult() {

// the if-statememt checks if the calculation is not empty
//the .trim is used to remove unnessary whitespaces and tabs.
if (calculation.trim() !== "") {
    // Try to evaluate the expression
    try {
        result = eval(calculation);
    } catch (error) {
        result = "Error";
    }
} else {
    result = "Error"; // Handle the case where displayValue is empty
}
document.getElementById("display").value = result;
}
function clearDisplay(){
calculation = "";
document.getElementById('display').value = calculation;
}
function convertToCelsius() {
const fahrenheit = parseFloat(calculation);//parseFloat works like eval but its safer to use in terms of security
// the const fahrenheit involves you to input your value in fahrenheit
        const celsius = (fahrenheit - 32) * 5/9;//formula of fahrenheit to celsius.
        document.getElementById("display").value = celsius.toFixed(2) + " °C";
    }// the .toFixed(2) means the value should be in 2 decimal places.
    
    function convertToFahrenheit() {
const celsius = parseFloat(calculation);//parseFloat works like eval but its safer to use in terms of security
// the const fahrenheit involves you to input your value in fahrenheit
        const fahrenheit = (celsius * 9/5) +32;//formula of celsius to fahrenheit
        document.getElementById("display").value = fahrenheit.toFixed(2) + " F";
    }// the .toFixed(2) means the value should be in 2 decimal places.


    //BMI CODES
    function calculateBMI() {
      const weight = parseFloat(document.getElementById("weight").value);
      const height = parseFloat(document.getElementById("height").value);
      const bmiResult = document.getElementById("bmiResult");
  
      if (!isNaN(weight) && !isNaN(height)) {
          const bmi = (weight / (height * height)).toFixed(2);
          bmiResult.textContent = "Your BMI is: " + bmi;
  
          // Define BMI categories and messages
          const categories = [
              { min: 0, max: 18.5, message: "Underweight" },
              { min: 18.6, max: 24.9, message: "Normal Weight" },
              { min: 25, max: 29.9, message: "Overweight" },
              { min: 30, max: 34.9, message: "Obesity Class 1" },
              { min: 35, max: 39.9, message: "Obesity Class 2" },
              { min: 40, max: Number.MAX_VALUE, message: "Obesity Class 3" },
          ];
  
          // Determine the category and display a message
          for (const category of categories) {
              if (bmi >= category.min && bmi <= category.max) {
                  bmiResult.textContent += " (" + category.message + ")";
                  break; // Exit the loop once a category is found
              }
          }
      } else {
          bmiResult.textContent = "Invalid input. Please enter valid weight and height.";
      }
  }
  