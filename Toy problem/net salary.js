//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

//NB: Use KRA, NHIF, and NSSF values provided in the link below.

const basicSalary = parseInt(prompt("Enter your basic salary"))
const benefits = parseInt(prompt("Enter your benefits"))

const grossSalary=basicSalary 
function calculatePayee(grossSalary) {
    // Implement the PAYE (Pay As You Earn) calculation based on the KRA tax rates

     if (grossSalary <= 24000) {
      return grossSalary * 0.1;
     } else if (24001 <= grossSalary && grossSalary <= 32333) {
      return (grossSalary - 24000) * 0.25 + 2400;
    }
    
  }
  
  function calculateNHIF(grossSalary) {
    // Implement NHIF deduction calculation
    const nhifRate = 0.01; 
     return grossSalary * nhifRate;
  }
  
  function calculateNSSF(grossSalary) {
    // Implement NSSF deduction calculation
     const nssfRate = 0.05; 
     return grossSalary * nssfRate;
  }
  
  function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
  
    const payee = calculatePayee(grossSalary);
    const nhifDeduction = calculateNHIF(grossSalary);
    const nssfDeduction = calculateNSSF(grossSalary);
  
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;
  
    return {
      grossSalary,
      payee,
      nhifDeduction,
      nssfDeduction,
      netSalary,
    };
  }
  