/* Function to get the inputs of loan amount, annual interest,
payment period and zipcode then calculate and output the approximate
monthy payment, total payment and total interest in decimal values.
*/
function calculateLoan() {
    let amount = document.getElementById("amount").value;
    let annualint = document.getElementById("annualint").value;
    let period = document.getElementById("period").value;
    let monthlyp = document.getElementById("monthlyp");
    let total = document.getElementById("total");
    let totalint = document.getElementById("totalint");
    
    //This gets the principal value input by a user and converts it to a decimal value
    var principal = parseFloat(amount);
    //This converts interest from a percentage value to a decimal and from an annual rate to a monthly rate
    var interest = parseFloat(annualint)/100 / 12;
    //This gets payment period given in years and converts it to monthly payments
    var totalMonths = parseFloat(period) * 12;
      
    // This computes the monthly payment value
    var monthlyPayment = ((principal*interest)/ (1- (Math.pow(interest+1, -totalMonths))));
   
    //Checking if the result is a finite number and if so, display the results.
    if (isFinite(monthlyPayment)){
      // These three lines populate the output fields with values rounded to 2 decimal places
      monthlyp.innerHTML = monthlyPayment.toFixed(2);
      total.innerHTML = (monthlyPayment * totalMonths).toFixed(2);
      totalint.innerHTML = ((monthlyPayment*totalMonths)-principal).toFixed(2);
    }
    // Otherwise, if the user inputs an invalid value then anything is displayed.
    else {
      monthlyp.innerHTML = "No inputs provided";
      total.innerHTML = "No inputs provided";
      totalint.innerHTML = "No inputs provided";
  }
};
  
  