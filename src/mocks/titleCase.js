function titleCase(title = ' ', minorWords = '') {
    let m = minorWords.toLowerCase().split(' ');
    let s = title.toLowerCase().split(' ').map(el=> m.includes(el) ?el.toLowerCase() :el[0].toUpperCase() + el.slice(1)).join(' ');
    return s[0].toUpperCase() + s.slice(1)
  }
  
  console.log(titleCase('this is Paras','is'));