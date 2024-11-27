// Nombres descriptivos

// No recomendado ❌
const yyyymmdstr = moment().format("YYYY/MM/DD");

// Recomendado ✅
const currentDate = moment().format("YYYY/MM/DD");

// nombres sin información técnica

// No recomendado ❌
let arrayNames = ["John", "Jane", "Jim"];

// Recomendado ✅
let nameList = ["John", "Jane", "Jim"];

// Lenguaje ubicuo -> usar el mismo vocabulario para el mis mo concepto

// No recomendado ❌
getUserInfo();
getClientData();
getCustomerRecord();

// Recomendado ✅
getUser();
