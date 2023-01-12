
// setItem(key, value)
sessionStorage.setItem("user1", "Safin");
sessionStorage.setItem("user2", "Hafsa");


// getItem(key)
const userName1 = sessionStorage.getItem("user");
console.log(userName1);

// removeItem(key)
// sessionStorage.removeItem("user");

// clearItem(key)
// sessionStorage.clear();


const user = { id : "101", name : "Safin" };
sessionStorage.setItem("user", JSON.stringify(user));


const userInfo  = JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo);