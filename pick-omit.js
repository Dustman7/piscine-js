const pick = (obj,str) => {
  let res = {}
  if (typeof str == 'string') {
      str = [str]
  }
  Object.keys(obj).forEach((key)=> str.forEach((str)=> key == str ? res[str]=obj[str] : ""))
  return res
}

const omit = (obj,str) => {
  let res = Object.assign({},obj)
  if (typeof str == 'string') {
      str = [str]
  }
  str.forEach((key)=>delete res[key])
  return res
}