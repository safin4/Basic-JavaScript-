
// Object Literals

function studentInfo1 (name, age) {
    return {
        name,
        age
    }
}
console.log(studentInfo1("Jubayer Safin", 18));

let message = {
    'body name'() {
        return `Hi, I am object function`
    }
}
console.log(message['body name']())