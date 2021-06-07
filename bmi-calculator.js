// let BMI = (weight, height) => {var calcBMI = weight / (height * height);
//     return `Your calculated BMI value is ${Math.round(calcBMI)}`
// }


const bmi = document.getElementById("btn")



bmi.addEventListener("click", function() {

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
        
    let bmiMessage;

    let bmi = weight/(height*height);
    
      

    let bmiResult = document.getElementById("bmiResult");


    if (bmi<18.5) {
        bmiMessage = "so you are underweight"
        bmiResult.innerHTML = "your BMI is" + " " + bmi + " " + bmiMessage;
        
    }

    else if (bmi>=18.5 && bmi<= 24.9) {
        bmiMessage = "you have a normal weight"
        bmiResult.innerHTML = "Your BMI is" + " " + bmi + " " + bmiMessage;
        
    }
    else if (bmi>=25 &&  bmiMessage<=29.9 ) {
        bmiMessage = "so you are overweight"
        bmiResult.innerHTML = "Your BMI is " + " " + bmi + " " + bmiMessage;
        
    }
    else if (bmi>=30 && bmi<= 34.9) {
        bmiMessage = "you are obese"
        bmiResult.innerHTML = "Your BMI is" +" " + bmi + " " + bmiMessage;
        
    }
        else {
        bmiMessage = "You are extremely obesse"
        bmiResult.innerHTML = "Your BMI is" + " " + math.round(bmi) +" " + bmiMessage;
        
    }

    

    }

)