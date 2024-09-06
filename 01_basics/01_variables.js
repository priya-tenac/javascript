const account_id=12345678
let account_email="abc@google.com"
var account_password="12345"

account_city="vanaras"

//account_id=12345// not allowed as it's type is const=> can't change its value
console.log(account_id);
account_email="xyz@google.com"
account_password="9876"
account_city="bengaluru"
 let account_state;
console.table([account_id,account_email,account_password,account_city,account_state]);


/*

do not use var because of issue in the block scope and function scope

*/