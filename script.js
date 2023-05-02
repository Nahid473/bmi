function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var result = document.getElementById("result");
  
    // Check if the user entered valid values
    if (height === "" || isNaN(height)) {
      alert("Please enter a valid height in cm.");
      return;
    }
    
    if (weight === "" || isNaN(weight)) {
      alert("Please enter a valid weight in kg.");
      return;
    }
  
    // Calculate BMI
    var bmi = weight / ((height/100) * (height/100));
  
    // Display result
    result.value = bmi.toFixed(2);
  }
  