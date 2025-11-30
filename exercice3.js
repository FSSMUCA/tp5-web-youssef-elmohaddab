let n = prompt("Veuilez entrer un nombre :");
if(n<0){
    alert("Nombre négatif");
}else if(n<=10){
    alert("Petit");
}else if(n<=50){
    alert("Moyen");
}else if(n<=100){
    alert("Grand");
}else {
    alert("Très grand");
}