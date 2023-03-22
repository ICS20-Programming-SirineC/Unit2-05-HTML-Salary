// Copyright (c) 2022 Sirine Cherkaoui All rights reserved
//
// Created by: Sirine Cherkaoui
// Created on: March 2022
// This file contains the JS functions for index.html

// Hours Worked
function calculateSalary() {
   let hoursWorked = parseFloat(document.getElementById("hours").value);

   // Hourly Rate
   let hourlyRate = parseFloat(document.getElementById("rate").value);
   let grossSalary = hoursWorked * hourlyRate;

   //Taxes
   let tax = grossSalary * 0.185;
   let takeHomeSalary = grossSalary - tax;

   //Rounding Decimal
   let num_decimals = 2;
   let base = 10 ** num_decimals;
   takeHomeSalary = Math.round(takeHomeSalary * base) / base;
   tax = Math.round(tax * base) / base;

   //Result display
   document.getElementById("result").innerHTML = "Your pay will be: $" + takeHomeSalary.toFixed(2) + "<br>Amount of tax the government will take: $" + tax.toFixed(2);
}
