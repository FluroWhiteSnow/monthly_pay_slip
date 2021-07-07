const CalculatePay = require("../CalculatePay").CalculatePay;

const user = new CalculatePay("Ananda Rodziewicz", 500);
const user1 = new CalculatePay("Ananda Rodziewicz", 10000);
const user2 = new CalculatePay("Ananda Rodziewicz", 30000);
const user3 = new CalculatePay("Ananda Rodziewicz", 60000);
const user4 = new CalculatePay("Ananda Rodziewicz", 90000);
const user5 = new CalculatePay("Ananda Rodziewicz", 190000);

describe("Testing for correct annual tax", () => {
  test("500 salary annual tax to be 0", () => {
    expect(user.calcAnnualTax()).toEqual("0.00");
  });
  test("10000 salary annual tax to be 0", () => {
    expect(user1.calcAnnualTax()).toEqual("0.00");
  });
  test("30000 salary annual tax to be 1000", () => {
    expect(user2.calcAnnualTax()).toEqual("1000.00");
  });
  test("60000 annual salary to not be 0", () => {
    expect(user3.calcAnnualTax()).not.toBe("0.00");
  });
  test("60000 salary annual tax to be 6000", () => {
    expect(user3.calcAnnualTax()).toEqual("6000.00");
  });
  test("90000 salary annual tax to be 13000", () => {
    expect(user4.calcAnnualTax()).toEqual("13000.00");
  });
  test("190000 salary annual tax to be 44000", () => {
    expect(user5.calcAnnualTax()).toEqual("44000.00");
  });
  test("190000 salary annual tax not to be 0", () => {
    expect(user5.calcAnnualTax()).not.toBe("0.00");
  });
});

describe("Testing for correct Net Annual", () => {
  test("500 salary annual tax to be 500", () => {
    expect(user.calcNetAnnunal()).toEqual("500.00");
  });
  test("10000 salary annual tax to be 0", () => {
    expect(user1.calcNetAnnunal()).toEqual("10000.00");
  });
  test("30000 salary annual tax to be 1000", () => {
    expect(user2.calcNetAnnunal()).toEqual("29000.00");
  });
  test("60000 annual salary to not be 0", () => {
    expect(user3.calcNetAnnunal()).not.toBe("0.00");
  });
  test("60000 salary annual tax to be 6000", () => {
    expect(user3.calcNetAnnunal()).toEqual("54000.00");
  });
  test("90000 salary annual tax to be 13000", () => {
    expect(user4.calcNetAnnunal()).toEqual("77000.00");
  });
  test("190000 salary annual tax to be 44000", () => {
    expect(user5.calcNetAnnunal()).toEqual("146000.00");
  });
  test("190000 salary annual tax not to be 0", () => {
    expect(user5.calcNetAnnunal()).not.toBe("0.00");
  });
});

describe("Testing for correct gross Monthly", () => {
  test("500 salary gross monthly to be 41.67", () => {
    expect(user.calcGrossMonthly()).toEqual("41.67");
  });
  test("10000 salary gross monthly to be 833.33", () => {
    expect(user1.calcGrossMonthly()).toEqual("833.33");
  });
  test("30000 salary gross monthly to be 2500", () => {
    expect(user2.calcGrossMonthly()).toEqual("2500.00");
  });
  test("60000 salary gross monthly to be 5000", () => {
    expect(user3.calcGrossMonthly()).toEqual("5000.00");
  });
  test("90000 salary gross monthly to be 7500", () => {
    expect(user4.calcGrossMonthly()).toEqual("7500.00");
  });
  test("190000 salary gross monthly to be 15833.33", () => {
    expect(user5.calcGrossMonthly()).toEqual("15833.33");
  });
});

describe("Testing for correct Net Monthly", () => {
  test("500 salary net monthly to be 41.67", () => {
    expect(user.calcNetMontly()).toEqual("41.67");
  });
  test("10000 salary net monthly to be 833.33", () => {
    expect(user1.calcNetMontly()).toEqual("833.33");
  });
  test("30000 salary net monthly to be 2416.67", () => {
    expect(user2.calcNetMontly()).toEqual("2416.67");
  });
  test("60000 salary net monthly to be 4500", () => {
    expect(user3.calcNetMontly()).toEqual("4500.00");
  });
  test("90000 salary net monthly to be 6415.67", () => {
    expect(user4.calcNetMontly()).toEqual("6416.67");
  });
  test("190000 salary net monthly to be 12166.67", () => {
    expect(user5.calcNetMontly()).toEqual("12166.67");
  });
});

describe("Testing for correct Monthly Tax", () => {
  test("500 salary monthly tax to be 0.00", () => {
    expect(user.calcMonthlyTax()).toEqual("0.00");
  });
  test("10000 salary monthly tax to be 833.33", () => {
    expect(user1.calcMonthlyTax()).toEqual("0.00");
  });
  test("30000 salary monthly tax to be 83.33", () => {
    expect(user2.calcMonthlyTax()).toEqual("83.33");
  });
  test("60000 salary monthly tax to be 500", () => {
    expect(user3.calcMonthlyTax()).toEqual("500.00");
  });
  test("90000 salary monthly tax to be 1083.33", () => {
    expect(user4.calcMonthlyTax()).toEqual("1083.33");
  });
  test("190000 salary monthly tax to be 3666.67", () => {
    expect(user5.calcMonthlyTax()).toEqual("3666.67");
  });
});
