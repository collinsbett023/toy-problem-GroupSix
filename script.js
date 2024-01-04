//student grades

/**
 * inputs: get id from input and display results
 * create a function onclick to which will add one event in the button
  */

function computeGrades() {
    //get input id
    const marks = parseInt(document.getElementById('marks').value);
    let grade;
    if (marks >= 80) {
        grade = " A  Good Job!";
    } else if (marks >= 60 && marks <= 79) {
        grade = "B";
    } else if (marks >= 50 && marks <= 59) {
        grade = "C";

    } else if (marks >= 40 && marks <= 49) {
        grade = "D try another time!";
    } else {
        grade = "E yes you can!";
    }
    //display grades
    document.getElementById("grade").textContent =
        `Your grade is: ${grade}`;

}


//speed
/*
get elements of input using input field id
pass interger value using parseInt
display output using onclick function
*/
function computeSpeed() {
    const speed = parseFloat(document.getElementById('speed').value)
    let pointsEarned = 0;
    //check if speed is less than 70
    if (speed <= 70) {
        document.getElementById('result').textContent = "ok"


    } else {
        pointsEarned = Math.floor((speed - 70) / 5);
        //every 5km over the speed limit the driver will earn a point i.e 80km =2 points earned
        if (pointsEarned > 12) {
            //maximum should be 134 points -70 /5 which is 12 points earned
            //135 the license will be suspended
            document.getElementById('result').textContent = "driver license suspended"
        } else {
            document.getElementById('result').textContent = "points: " + pointsEarned;
        }
    }
    //upgrade points earned for every 5km/h after speed limit


}




// salary calculator
//create a function calculateSalary()
//salary
function netIncome() {
    const incomeElement = parseFloat(document.getElementById('income').value);
    ;
    const benefitsElements = parseFloat(document.getElementById('benefit').value);

    //compute for Tax
    let tax = Math.floor((incomeElement + benefitsElements) * .25);
    //N.H.I.F
    let nhif = Math.floor(incomeElement * .02);
    //nssf
    let nssf = Math.floor(incomeElement * .12);
    let netSalary = incomeElement
        - (tax + nhif + nssf);
    //display salary
    let totalSalary = document.getElementById('salary').innerHTML =
        `  <p>payee/tax is:  ${tax}</p>
        <p>nhif deductions: ${nhif}</p>
        <p>nssf deductions: ${nssf}</p>
        <p>netsalary: ksh  ${netSalary}</p>
    `
    let button = document.getElementById('btn');
    button.addEventListener('click', netIncome);

}