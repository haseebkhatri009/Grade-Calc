let result = document.querySelector("#result");
let totalMarks = prompt("Enter Total Marks");
let obtainMarks = prompt("Enter Obtained Marks");
let sum = obtainMarks / totalMarks * 100; 



if (sum >= 80){
    result.innerHTML = "Your Grade is A1 and Percentage is "+ sum + "%";
}else if(sum >= 70){
    result.innerHTML = "Your Grade is A and Percentage is "+ sum + "%";
}else if(sum >= 60){
    result.innerHTML = "Your Grade is B and Percentage is "+ sum + "%";   
}else if(sum >= 50){
    result.innerHTML = "Your Grade is C and Percentage is "+ sum + "%";    
}else if(sum >= 40){
    result.innerHTML = "Your Grade is D and Percentage is "+ sum + "%";   
}else if(sum >= 30){
    result.innerHTML = "Your Grade is E and Percentage is "+ sum + "%";
}else if(sum < 30){
    result.innerHTML = "Your Grade is Fail and Percentage is "+ sum + "%";
}
