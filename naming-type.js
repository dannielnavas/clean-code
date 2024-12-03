// arrays se recomienda usar nombres en plural

// No recomendado ❌

const user = ["John", "Jane", "Jim"];

// Regular

const userList = ["John", "Jane", "Jim"];

// Bueno ✅

const users = ["John", "Jane", "Jim"];

// Recomenado ✅

const userNames = ["John", "Jane", "Jim"];

// uso de Booleanos usar prefijos como is, has, can.

// No recomendado ❌

const valid = true;
const read = false;
const color = "blue";

// Recomendado ✅

const isValid = true;
const hasRead = false;
const hasColor = true;

// uso de numéricos usar prefijos como min, max, total, etc.

// No recomendado ❌
const users = 15;

// Recomendado ✅
const maxUsers = 15;
const minUsers = 10;
const totalUsers = 25;

// uso de funciones usar verbos seguidos de sustantivos y ser consistentes

// No recomendado ❌
createUserIfNotExists();
updateUserIfNotEmpty();
sendEmailIfIsValid();

// Recomendado ✅
createUser();
updateUser();
sendEmail();

// funciones de acceso modificación o predicado usar get, set, is.

getUser(); // obtiene un usuario
setUser(); // establece un usuario
isValidUser(); // devuelve true/false si el usuario es válido

// para clases usar sustantivos  ejemplo user o userProfile ser muy genérico puede definir mas una sola responsabilidad

// No recomendado ❌
class Data {}
class Manager {}
class Info {}

// Recomendado ✅
class User {}
class UserProfile {}
class Account {}
