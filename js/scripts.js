var triangleTracker = function(a, b, c) {

  if( (a + b > c) && (a + c > b) && (b + c > a)) {
    if((a === b) && (a === c)) {
      return "equilateral";
    } else if ((a === b) || (b === c)) {
      return "isosceles";
    } else  {
      return "scalene";
    }
  } else {
    return "false";
  }

}
