function solution(A) {
    var n = '';
    var r = '';
    for( var i=1; i < A.length; ++i ){
        n = ( A.includes( i ) );
        
          if( n === false ){
            if( n !== undefined ){
                r = i;
            }         
          }
                
    }

    if( r === '' ) {
    		return A.length+1;
     }else{
     		return r;
     }
}

console.log( solution([1,2,3,4,6,7]) );
console.log( solution([1,2,3]) );
console.log( solution([-1,-2]) );
