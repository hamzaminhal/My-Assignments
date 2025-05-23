var laptop = 500;
var smartWatch = 300;
var headPhones = 200;

var qtyLaptop = +prompt("Enter your required quantity of Laptop! Price Rs 500");
var qtySmartWatch = +prompt(
  "Enter your required quantity of mart Watch! Price Rs 300"
);
var qtyHeadPhones = +prompt(
  "Enter your required quantity of Headphones! Price Rs 200"
);

var totalLaptop = laptop * qtyLaptop;
var totalSmartWatch = smartWatch * qtySmartWatch;
var totalHeadPhones = headPhones * qtyHeadPhones;

var totalBill = totalLaptop + totalSmartWatch + totalHeadPhones;

document.write("Total Bill : Rs " + totalBill + "<br />");

if (totalBill > 5000) {
  discount = (totalBill * 20) / 100;
  document.write("20% Discount  : Rs " + discount + "<br />");
} else if ((totalBill > 3000) & (totalBill <= 5000)) {
  discount = (totalBill * 15) / 100;
  document.write("15% Discount  : Rs " + discount + "<br />");
} else if ((totalBill > 1000) & (totalBill <= 3000)) {
  discount = (totalBill * 10) / 100;
  document.write("10% Discount : Rs  " + discount + "<br />");
} else if (totalBill <= 1000) {
  discount = 0;
  document.write("0% Discount : Rs " + discount + "<br />");
}
var amountPay = totalBill - discount;
document.write("Amount to Pay : Rs " + amountPay + "<br />");
