function sommeIterative(n){
    let sum = 0 ;
    for(i=1 ; i<=n ; i++){
        sum += i;
    }
    return sum;
}
function sommeRecursive(n){
    if(n == 0) return 0;
    return n + sommeRecursive(n-1);
}
let n = 10;
console.log("la somme de 1 a 10 utlisant sommeIterative() est : ",sommeIterative(n));
console.log("la somme de 1 a 10 utlisant sommeRecursive() est : ",sommeRecursive(n));