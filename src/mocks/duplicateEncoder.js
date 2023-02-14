function duplicateEncode(word){
    let map = new Map();
    [...word.toLowerCase()].forEach(el=>map.set(el,(map.get(el) || 0)+1));
    return [...word.toLowerCase()].map(el=> map.get(el)>1? ')':'(').join('')
  }
  console.log(duplicateEncode('NaN != NaN'))