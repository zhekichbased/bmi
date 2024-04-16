



function sumOfAll() {
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let age = document.getElementById("ageInput").value.trim();
    let height = document.getElementById("heightInput").value.trim();
    let weight = document.getElementById("weightInput").value.trim();
    let result;
   
  
    if (male) {
         result = (Number(age) + Number(weight) + Number(height)) * 7;
    } else if (female) {
         result = (Number(age) + Number(weight) + Number(height)) * 5.5;
    } 
   
    if (age === '' || height === '' || weight === '' || isNaN(result) || age.includes('-') || height.includes('-') || weight.includes('-')) {
         result = "Write Numbers";
         document.getElementById("resultOf").innerHTML = result;
    } else {
         document.getElementById("containerMain").style.display = "none";
         document.getElementById("secondContainer").style.display = "block";
    }
    document.getElementById("dagras").innerHTML =  (weight / (height * height / 10000)).toFixed(1) ;
    return result;
   }
  
  
  
  
   function finalResult() {   
       let dailyStepsValue = parseInt(document.getElementById("dailySteps").value);
       let cardioTrainingValue = parseInt(document.getElementById("cardioTraining").value);
       let muscleTrainingValue = parseInt(document.getElementById("muscleTraining").value);
       let coefficients = {
            "3000": 5,
            "5000": 7,
            "10000": 11,
            "0": 1, 
            "30": 5,
            "60": 7,
            "180": 11
        };
  
        let totalValue = coefficients[dailyStepsValue] * coefficients[cardioTrainingValue] * coefficients[muscleTrainingValue];
  
   let middleRes = sumOfAll();
   document.getElementById("lastResult").innerHTML = middleRes + totalValue;
   document.getElementById("secondContainer").style.display = "none";
    document.getElementById("containerResult").style.display = "block";
   }
  
  





  