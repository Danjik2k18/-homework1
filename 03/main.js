var a = 10, b = 6, c = 1;
var min = 0; 

function minElem(min) {
	if(a < b){
		if(a < c) {
			min = a;
      console.log( 'a:' + min);  
		} else {
			min = c;
      console.log( 'c:' + min);
		}
    
	} else if ( a > b) {
		if (b < c){
			min = b;
      console.log( 'b:' + min);
		} else {
      min = c;
      console.log( 'c:' + min);
    }
}
}
minElem();
