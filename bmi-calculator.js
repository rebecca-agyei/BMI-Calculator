
const bmi = document.getElementById("btn")

bmi.addEventListener("click", function() {

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    let bmi = Math.round (weight/(height*height));
    
      

    let bmiResult = document.getElementById("bmiResult");


    if (bmi<18.5) {
        bmiResult.innerHTML = "Your BMI is " + bmi + " so you are underweight." ;
        
    }

    else if (bmi>=18.5 && bmi<= 24.9) {
        bmiResult.innerHTML = "Your BMI is " + bmi + " so you have a normal weight" ;
        
    }
    else if (bmi>24.9) {
        bmiResult.innerHTML = "Your BMI is " + " " + bmi + " so you are overweight." ;
          
    }

    
})