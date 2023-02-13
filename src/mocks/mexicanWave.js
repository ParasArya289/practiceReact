function wave(str){
  let s = [...str].map((el,i)=>str.slice(0,i)+str[i].toUpperCase() + str.slice(i+1)).filter(el=>el !== str)
  return s
}
console.log(wave(''));