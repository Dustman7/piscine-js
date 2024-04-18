function reverse(arr) {
    if (Array.isArray(arr)) {
      var newArray = [];
      for (var i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
      }
      return newArray;
    } else {
      let revSrring = ""
      arr.split("").forEach(char => revSrring = char + revSrring);
      return revSrring;
        
   
    }
  }