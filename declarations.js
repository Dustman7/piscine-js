const escapeStr = "sup ' \\ \" `/po"
const arr = [4,'2']
Object.freeze(arr)
const obj = {str : "sup", num : 1, bool : true, undef :  undefined}
Object.freeze(obj)
const nested = {arr : [4, undefined ,'2'], obj : {str : "nul", num : 2, bool : true}}
Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)