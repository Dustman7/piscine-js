function adder(array1, work = 0){ 
    let arr = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return arr + work
}
const initialValue = 0;
function sumOrMul(array1, work = 0){
    let i = 0
    let even = array1.reduce((acc, cuu) => {
        if (work == 0){
            if(cuu%2 == 0) {
                acc *= cuu   
            } else {
                acc += cuu   
            }
        } else {
            if (i != 0){
                if(cuu%2 == 0) {
                    acc *= cuu   
                } else {
                    acc += cuu   
                }
            } else {
                if(work%2 == 0 && cuu%2 == 0) {
                    acc *= work * cuu 
                    i++
                } else if (work%2 != 0 && cuu%2 != 0){
                    acc += cuu  + work  
                    i++
                } else if (work%2 != 0 && cuu%2 == 0){
                    acc = (acc + work) * cuu
                    i++
                }else if (work%2 == 0 && cuu%2 != 0){
                    i++
                    acc =acc * work + cuu
                }
            }
        }
        return acc    
      })  
      return even
}

function funcExec(func,x = 0){
    let result = func.reduce((sum, current) => {
        return current(sum);
      },x)
      return result
}