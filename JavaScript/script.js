// Cette fonction affiche la valeur passée en paramètre dans l'élément HTML avec l'ID "output"
function forDisplay(value) {
    // Vérifie si la valeur n'est pas "C"
    if (value !== "C") {
        // Ajoute la valeur à l'élément "output" sans effacer le contenu précédent
        document.getElementById("output").innerHTML += value;
    }
    // Si la valeur est "C"
    else if (value === "C") {
        // Efface le contenu de l'élément "output"
        document.getElementById("output").innerHTML = "";
    }
}

// Cette fonction est appelée lorsqu'on clique sur le bouton d'égalité (=)
function equal() {
    // Récupère le contenu de l'élément "output"
    let equation = document.getElementById("output").innerHTML;
    // Évalue l'expression mathématique en utilisant la fonction eval()
    let resolve = eval(equation);
    // Affiche le résultat dans l'élément "output"
    document.getElementById("output").innerHTML = resolve;
}



