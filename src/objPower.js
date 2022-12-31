// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar Write a function which takes two objects and return the person with more power.

let obj1 = {
    name: "Ram",
    age: "Treta",
    power: 2500
  };
  let obj2 = {
    name: "Krishna",
    age: "Dwapar",
    power: 2325
  };
  
  let Power = () => {
    let calPower = (a, b) => {
      let { name: name1, power: power1 } = a;
      let { name: name2, power: power2 } = b;
  
      if (power1 > power2) {
        console.log(`${name1} is more powerfull`);
      } else if (power2 > power1) {
        console.log(`${name2} is more powerful`);
      }
    };
    calPower(obj1,obj2);
  };
  export default Power;
  