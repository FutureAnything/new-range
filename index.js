module.exports = range;

function range(start, end){
  var range, i;

  end  || ( end = start, start = 0 );

  range = [];
  i     = start - 1;

  while( ++i < end ){
    range.push(i);
  }

  return range;
}
