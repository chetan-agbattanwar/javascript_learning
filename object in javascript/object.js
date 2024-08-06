// object using literals

const product = {
    id: 1,
    pName: 'laptop'
}

const student = {
    id: 1,
    name: 'chetan',
    age: 20,
    isStudent:true,
    greeting:function(){
        console.log('welcom to school');
    }
}
// student.greeting()

// their are two ways to assess the property of object
// way 1. using dot
// console.log(student.age);

// way 2 using square bracket
// console.log(student['age']);

// adding and modifying existing properties
student.city = 'nagpur'
// console.log(student);

student.age = 15
// console.log(student);

//  method in object
student.greeting()

