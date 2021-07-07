const { CalculatePay } = require("./CalculatePay");

class FormatPayslip extends CalculatePay {
  constructor(name, salary, grossMonthly, monthlyTax, netMonthly) {
    super(name, grossMonthly, monthlyTax, netMonthly, salary);
  }

  runFormat() {
    this.getInfo();
    this.runCalc();
    this.makePayslip();
  }

  makePayslip() {
    console.log(`
        Monthly Payslip for:  ${this.name}
        Gross Monthly Income: ${this.grossMonthly}
        Monthly Income Tax:   ${this.monthlyTax}
        Net Monthly Income:   ${this.netMonthly}
        `);
  }
}

module.exports = {
  FormatPayslip,
};
