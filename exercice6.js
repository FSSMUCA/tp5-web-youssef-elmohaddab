let sum_pair= 0;
let sum_impair = 0;
for(i = 1 ; i<=50 ; i++){
    if(i%2 == 0){
        sum_pair+=i;
    }else{
        sum_impair+=i;
    }
}
console.log("la somme des nombres pairs entre 1 et 50 est : "+sum_pair);
console.log("la somme des nombres impairs entre 1 et 50 est : "+sum_impair);