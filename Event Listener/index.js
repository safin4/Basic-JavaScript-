var myVar = document.querySelector("h1");

myVar.addEventListener("mouseover", function () {

    myVar.classList.add("my-style");

});


myVar.addEventListener("mouseout", function () {

    myVar.classList.remove("my-style");

});


var len = document.querySelectorAll(".myButton").length;

for (var i = 0; i < len; i++) {

    document.querySelectorAll(".myButton")[i].addEventListener("click", function () {

        var text = this.innerHTML;
        document.querySelector("#Id").innerHTML = text + " is clicked";
    
    });

}