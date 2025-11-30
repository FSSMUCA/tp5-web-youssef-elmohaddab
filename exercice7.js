function verifierMotDePasse(mdp){
    if(mdp.length < 8)return false;
    if(mdp.includes("@"))return true;
    return false;
}
let mdp = prompt("Veuillez entrer le mot de passe :");
if(verifierMotDePasse(mdp)){
    alert("Mot de passe valide");
}else {
    alert("Mot de passe non valide");
}