

// student details

function Student(name, age, cgpa, lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

var student1 = new Student("Jubayer Safin", 18, 4.83, ["Bengali", "English", "Hindi"]);
var student2 = new Student("Hafsa", 26, 5.00, ["Bengali", "English", "Urdu"]);
var student3 = new Student("Fatima Begum", 45, 4.92, ["Bengali", "English", "Japanese"]);

student1.display();
student2.display();
student3.display();