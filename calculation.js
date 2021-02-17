// Copyright by Dario Passariello 2021

function solution(A) {
    var n = '';
    var r = '';
    for( var i=1; i < A.length; ++i ){
        n = ( A.includes( i ) );
        
          if( n === false && n !== undefined ){
                r = i;      
          }
                
    }

    if( r === '' ) {
    		return A.length+1;
     }else{
     		return r;
     }
}

console.log( solution([1,2,3,4,6,7]) );     // return 5
console.log( solution([1,2,3]) );           // return 4
console.log( solution([-1,-2]) );           // return 1
