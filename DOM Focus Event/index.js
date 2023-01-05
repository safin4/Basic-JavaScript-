const input = document.querySelector("input");

input.addEventListener("blur", function (event) {
    console.log(event.target.value);
});


input.addEventListener("focus", function () {
    console.log("focus is occured");
});


input.addEventListener("focusin", function () {
    console.log("focusin is occured");
});


input.addEventListener("focusout", function () {
    console.log("focusout is occured");
});


input.addEventListener("focus", function () {
    input.style.backgroundColor = "tomato";
    input.style.padding = "2rem";
});


input.addEventListener("blur", function () {
    input.style.backgroundColor = "transparent";
    input.style.padding = "2rem";
});