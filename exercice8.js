function totalAvecRemise(total, remise){
    let totalFinal = total - (total * remise / 100);
    return totalFinal;
}
let total = prompt("veuillez saisi le total HT :");
let remise = prompt("veuillez saisi la remise en % :");
alert("Le total final est :"+totalAvecRemise(total,remise));