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

$(document).ready(function() {

  $('form').submit(function(event) {

    $('#result').show();
    // grab the inputs
    var a = parseInt( $('input#a').val() );
    var b = parseInt( $('input#b').val() );
    var c = parseInt( $('input#c').val() );

    var triangle = triangleTracker(a, b, c);
    var sides = [a,b,c].join(',');

    $('.do_not').text('');

    $('.sides').text(sides);

    if(triangle !== "false") {
      $('.type').text(triangle);
    } else {
      $('.type').text('');
      $('.do_not').text("do not");
    }

    event.preventDefault();
  });
});
