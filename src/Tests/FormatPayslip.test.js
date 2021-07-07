const FormatPayslip = require("../FormatPayslip").FormatPayslip;

const user = new FormatPayslip("Ananda Rodziewicz", 41.67, 0, 41.67);
const user2 = new FormatPayslip("Ananda Rodziewicz", 30000);
const user3 = new FormatPayslip("Ananda Rodziewicz", 5000.0, 500.0, 4500.0);
const user4 = new FormatPayslip("Ananda Rodziewicz", 90000);
const user5 = new FormatPayslip("Ananda Rodziewicz", 190000);

describe("Testing for correct formating and correct pay", () => {
  test("500 salary to be", () => {
    expect(user.makePayslip()).toEqual(`
        Monthly Payslip for:  Ananda Rodziewicz
        Gross Monthly Income: 41.67
        Monthly Income Tax:   0.00
        Net Monthly Income:   41.67
        `);
  });
  test("60000 salary to be", () => {
    expect(user3.makePayslip()).toEqual(`
        Monthly Payslip for:  Ananda Rodziewicz
        Gross Monthly Income: 5000.00
        Monthly Income Tax:   500.00
        Net Monthly Income:   4500.00
        `);
  });
});
