const { User } = require("./User");
class CalculatePay extends User{
     constructor(name, salary, grossMonthly, monthlyTax, netMonthly, netAnnual, annualTax) {
        super(name, salary)
        this.grossMonthly = grossMonthly;
        this.monthlyTax = monthlyTax;
        this.netMonthly = netMonthly;
        this.netAnnual = netAnnual;
        this.annualTax = annualTax;

        this.taxRate = [
            0,   // 0-20
            0.1, // 20-40
            0.2, // 40-80
            0.3, // 80-180
            0.4, // 180+
        ]

        this.maxTaxs = [
            0,      //   0  - 20000
            0,      //   20000 - 40000
            2000,   // > 40000
            10000,  // > 80000
            40000,  // > 180000
        ];

        this.taxBrackets = [
            0,          // 0  - 20
            20000,      // 20 - 40
            40000,      // 40 - 80
            80000,      // 80 - 180
            180000,     // 180+
        ]
    }
    
    calcAnnualTax() {
        let salary = this.salary
        let taxBrackets = this.taxBrackets
        let tax = 0

        for (let i in taxBrackets) {
            if(salary > taxBrackets[i]) {
                tax = this.maxTaxs[i]
                tax += (salary - taxBrackets[i]) * this.taxRate[i]
            }
        }
        this.annualTax = tax.toFixed(2)
    }

    calcNetAnunal() {
        this.calcAnnualTax()
        let netAnnual = this.salary - this.annualTax
        this.netAnnual = netAnnual.toFixed(2)
    }

    calcNetMontly() {
        let netMonthly = this.netAnnual / 12
        this.netMonthly = netMonthly.toFixed(2)
    }

    calcGrossMonthly() {
        let grossMonthly = this.salary / 12
        this.grossMonthly = grossMonthly.toFixed(2)
    }

    calcMonthlyTax() {
        let monthlyTax = this.annualTax / 12
        this.monthlyTax = monthlyTax.toFixed(2)
    }
    
}
module.exports = {
  CalculatePay,
};
