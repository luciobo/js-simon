
// cosa devo fare?
// iniziamo con il genaerare 5 numeri casuali e stamparli nel dom poi veidamo

// devo recuperare il bottone per generare il numero casuale

const buttGenNumCas = document.querySelector(".genera-random")
console.log(buttGenNumCas)



buttGenNumCas.addEventListener("click", function () {
    console.log("bottone cliccato")

    
    

})

let contenitoreNumRandom = []

function generatorerandomico() {

    for (let i = 0; i < contenitoreNumRandom.length; i++) {


        // recupero l'html dove inseriro i numeri casuali
        const contnitoreNumeriCasuali = document.querySelector(".cont-num-cas")
        console.log(contnitoreNumeriCasuali)
    }
}

// qui creero una funzione che dopo 30 secondi cancelli il contenitore

// contnitoreNumeriCasuali.innerHTML = "";

