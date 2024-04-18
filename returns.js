const id = (n) => n
function getLength(str) {
    // The string iterator that is used here iterates over characters,
    //  not mere code units
    return [...str].length;
  }
