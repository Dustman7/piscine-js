function repeat(string, time) {
    if (time <= 0)
        return ""
    if(time < 0) 
      return "";
    if(time === 1) 
      return string;
    else 
      return string + repeat(string, time - 1);
  }
