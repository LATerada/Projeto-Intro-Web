//SEMANA 1
//item: Filmes

// // const titulo = 
// // const anoLancamento = 
// // const nomeadoMelhorFilme =

// const titulo1 = "O REGRESSO"
// const anoLancamento1 = 2015
// const nomeadoMelhorFilme1 = true

// const titulo2 = "MATRIX RESURRECTIONS"
// const anoLancamento2 = 2021
// const nomeadoMelhorFilme2 = false

// const titulo3 = "LA LA LAND: CANTANDO ESTACOES"
// const anoLancamento3 = 2016
// const nomeadoMelhorFilme3 = true

// // const mediaAnos = (anoLancamento1 + anoLancamento2 + anoLancamento3)/3
// //     console.log(mediaAnos.toFixed(0))

// // const nomeadosMelhorFilme = nomeadoMelhorFilme1 && nomeadoMelhorFilme2 && nomeadoMelhorFilme3
// //     console.log(nomeadosMelhorFilme)

// //const atoresPrincipais = 

// const atoresPrincipais1 = ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"]
// const atoresPrincipais2 = ["Keanu Reeves", "Carrie-Anne Moss", "Hugo Weaving"]
// const atoresPrincipais3 = ["Emma Stone", "Ryan Gosling", "John Legend"]

// console.log(`${titulo1}

// Ano de Lancamento: ${anoLancamento1}
// Nomeado ao Oscar? ${nomeadoMelhorFilme1}
// Atores principais: ${atoresPrincipais1}`)

// console.log(`${titulo2}

// Ano de Lancamento: ${anoLancamento2}
// Nomeado ao Oscar? ${nomeadoMelhorFilme2}
// Atores principais: ${atoresPrincipais2}`)

// console.log(`${titulo3}

// Ano de Lancamento: ${anoLancamento3}
// Nomeado ao Oscar? ${nomeadoMelhorFilme3}
// Atores principais: ${atoresPrincipais3}`)


// SEMANA 2

const filme1 = {
    titulo: "O REGRESSO",
    anoLancamento: 2015,
    nomeadoMelhorFilme: true,
    atoresPrincipais: ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"]
}
const filme2 = {
    titulo: "MATRIX RESURRECTIONS",
    anoLancamento: 2021,
    nomeadoMelhorFilme: false,
    atoresPrincipais: ["Keanu Reeves", "Carrie-Anne Moss", "Hugo Weaving"]
}
const filme3 = {
    titulo: "LA LA LAND: CANTANDO ESTACOES",
    anoLancamento: 2016,
    nomeadoMelhorFilme: true,
    atoresPrincipais: ["Emma Stone", "Ryan Gosling", "John Legend"]
}

const filmesNomeados = []
let filme

function verificarFilmeNomeado (filme){
    if(filme.nomeadoMelhorFilme){
        filmesNomeados.push(filme)
        console.log(`O filme ${filme.titulo} foi adicionado à lista de Filmes Nomeados ao Oscar na categoria Melhor Filme`)
    }else{
        alert(`O filme ${filme.titulo} não foi adicionado`)
    }
}
verificarFilmeNomeado(filme1)
verificarFilmeNomeado(filme2)
verificarFilmeNomeado(filme3)

console.log(filmesNomeados)