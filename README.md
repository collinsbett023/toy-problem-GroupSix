This repository contains solutions three toy problems.
created using simple html elements a div,form with label and input and a button.
3cards nested in a container with some css style and javaScript

# Authors
 Josephine mueni , Martin ,Collins Bett,Lameck


 # Challenge 1: Student Grade Generator
 Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:

 A >=80
 B - 60 to 79
C - 50 to 59
D - 40 to 49
E - less than 48.

# steps to follow
have a html with an input, button with onclick function
add styles
 1) get the id elements from the html to connect manipulate the Dom
 
 2) use an if statement to check students grades if its above the passmark or
 certain points of 70, 50 and 40 to grade then
 use a div tag with an id grade to compute the grade



# Challenge 2: Speed Detector
 Write a program that takes as input the speed of a car e.g 80. If the speed ess than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

 For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspend5ed”.

  # steps
 1) create a an input,button  with onclick function
  add styles in css
  2) grab the elements to connect scripts with the dom
  use a function to calculate speed  with an if statement nested inside
  if speed is less than 70 should print "OK"
  for every 5 km/s above limit of 70 get 2 ponts and print total points
  (speed -70)/5
  otherwise if more than 12 points the function prints "Lincense suspended"
 in my case i saw if speed is (135 -70)/5 thus the danger zone




# Challenge 3: Net Salary Calculator
 Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.

 NB: Use KRA, NHIF, and NSSF values provided in the link below.
 https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.


http://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks


KRA Tax Rates
 NHIF and NSSF rates
 # steps
 1) get the id elements income, benefit, and salary to add scripts by using document.getElement by Id
 store income and benefits with the step above
 compute for tax (salary income + benefits)
 compute for nhif *0.02 rates and nssf * .12
 net income = gross - (tax+nssf+nhif deductions)
 2) display the output by asking the user to enter income and benefits

 This repository is open for any comments, and any future changes
 Toy problem is group challenge.


 School: Moringa School
 Author: Group six