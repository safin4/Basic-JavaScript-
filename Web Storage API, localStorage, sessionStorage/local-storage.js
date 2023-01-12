
// localStorage store data as key value pair - string =>

// setItem(key, value)
localStorage.setItem("userName", "Jubayer Safin");

localStorage.setItem("password", "0123456789");

// getItem(key)
const userName = localStorage.getItem("userName");

const userPassword = localStorage.getItem("password");

console.log(userName, userPassword);

// removeItem(key)
// localStorage.removeItem("userName");
// localStorage.removeItem("password");


// getItem(key, value)
const countries = ["Bangladesh", "Japan", "India"];
localStorage.setItem("countries", JSON.stringify(countries));


// getItem(key)
const countriesList = JSON.parse(localStorage.getItem("countries"));
console.log(countriesList);

//clearItem(key)
//localStorage.clear();