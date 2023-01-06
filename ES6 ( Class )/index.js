
class Student {

   constructor(id, name) {
     this.id = id;
     this.name = name;
   }

   set StudentName(name) {
     this.name = name;
   }

   get StudentInfo() {
      return this.id + " " + this.name;
   }

}

let s1 = new Student(101,"Jubayer Safin");
console.log(s1.id)
console.log(s1.name)

s1.StudentName = "Hafsa";
console.log(s1.name)


console.log(s1.StudentInfo)