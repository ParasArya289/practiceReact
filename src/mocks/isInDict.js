//seniorDev interview question
//solved it using Map and Hasmap using reduce
function Setup (word){
    const invalidStrEndsWith = ['*',"#","$"];
    // this.dict = new Map();
    // word.forEach(el=>{
    //   if(invalidStr.includes(el.at(-1))){
    //     this.dict.set(el,false);
    //   }else{
    //     this.dict.set(el,true);
    //   }
    // })
    this.dict = word.reduce((acc,el)=>{
      if(invalidStrEndsWith.includes(el.at(-1))){
        acc[el] = false;
        return acc;
      }else{
        acc[el] = true;
      return acc;
      }
    },{})
  }
  
  Setup.prototype.isInDict = function(word){
     return this.dict[word]
  }
  const mySetup = new Setup(['cat','car','bike','*cat','mouse*','mouse#','paras$','$manish'])
  console.log(mySetup);
  console.log(mySetup.isInDict('cat')) // true
  console.log(mySetup.isInDict('*cat')) // true
  console.log(mySetup.isInDict('mouse*')) // false
  console.log(mySetup.isInDict('mouse#')) //false
  console.log(mySetup.isInDict('paras$')) //false
  console.log(mySetup.isInDict('$manish')) //true
  console.log(mySetup.isInDict('$mah')) //false