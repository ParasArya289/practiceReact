// Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.
let obj1 = {
    name: "Ram",
    age: 25,
    yuga: "Treta"
  };
  let obj2 = {
    name: "Krishna",
    age: 31,
    yuga: "Dwapar"
  };
  
  let Age = () => {
    let calAge = (a, b) => {
      let { name: name1, age: age1 } = a;
      let { name: name2, age: age2 } = b;
      // console.log(name1,name2,age2,age1);
      if (age1 > age2) {
        console.log(`${name1} is older then ${name2}`);
      } else if (age1 < age2) {
        console.log(`${name2} is older then ${name1}`);
      }
    };
    calAge(obj1, obj2);
  };
  
  export default Age;
  