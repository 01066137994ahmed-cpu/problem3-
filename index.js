let itemPrice = +prompt("ادخل سعر المنتج");
console.log(`سعر المنتج  : ${itemPrice}`);
let quantity = +prompt("ادخل الكمية");
console.log(`الكمية : ${quantity}`);
let subtotal = itemPrice * quantity;
if (subtotal >= 1000) {
  console.log("مبروك حصلت على شحن مجاني");
} else {
  console.log("مصاريف الشحن 60");
  subtotal = subtotal + 60;
}
let coupon = confirm("معاك كوبون خصم ولا لا");
if (coupon == true) {
  let couponCode = prompt("ادخل كوبون الخصم");
  if (couponCode == "save10") {
    let discount = (10 / 100) * subtotal;
    console.log(`الخصم : ${discount}`);
    subtotal = subtotal - discount;
  }
}
let vat = (14 / 100) * subtotal;
let totalCost = subtotal + vat;
console.log(`the total is : ${totalCost}`);
