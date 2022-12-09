// // SEMANA 1
// // item: Filmes

// // const titulo
// // const anoLancamento
// // const nomeadoMelhorFilme

// const titulo1 = "O REGRESSO"
// const anoLancamento1 = 2015
// const nomeadoMelhorFilme1 = true

// const titulo2 = "MATRIX RESURRECTIONS"
// const anoLancamento2 = 2021
// const nomeadoMelhorFilme2 = false

// const titulo3 = "LA LA LAND: CANTANDO ESTACOES"
// const anoLancamento3 = 2016
// const nomeadoMelhorFilme3 = true

// // CALCULO DA MEDIA DE ANOS
// // const mediaAnos = (anoLancamento1 + anoLancamento2 + anoLancamento3)/3
// //     console.log(mediaAnos.toFixed(0))

// // BOOLEANO SE TODOS OS FILMES FORAM NOMEADOS
// // const nomeadosMelhorFilme = nomeadoMelhorFilme1 && nomeadoMelhorFilme2 && nomeadoMelhorFilme3
// //     console.log(nomeadosMelhorFilme)

// //const atoresPrincipais
// const atoresPrincipais1 = ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"]
// const atoresPrincipais2 = ["Keanu Reeves", "Carrie-Anne Moss", "Hugo Weaving"]
// const atoresPrincipais3 = ["Emma Stone", "Ryan Gosling", "John Legend"]

// RELATORIO DOS FILMES
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


// // SEMANA 2

let filme1 = {
    titulo: "O REGRESSO",
    anoLancamento: 2015,
    nomeadoMelhorFilme: true,
    atoresPrincipais: ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"]
}
let filme2 = {
    titulo: "MATRIX RESURRECTIONS",
    anoLancamento: 2021,
    nomeadoMelhorFilme: false,
    atoresPrincipais: ["Keanu Reeves", "Carrie-Anne Moss", "Hugo Weaving"]
}
let filme3 = {
    titulo: "LA LA LAND: CANTANDO ESTAÇÕES",
    anoLancamento: 2016,
    nomeadoMelhorFilme: true,
    atoresPrincipais: ["Emma Stone", "Ryan Gosling", "John Legend"]
}

// // const filmesNomeados = []
// // let filme

// // function verificarFilmeNomeado (filme){
// //     if(filme.nomeadoMelhorFilme){
// //         filmesNomeados.push(filme)
// //         console.log(`O filme ${filme.titulo} foi adicionado à lista de Filmes Nomeados ao Oscar na categoria Melhor Filme`)
// //     }else{
// //         alert(`O filme ${filme.titulo} não foi adicionado`)
// //     }
// // }
// // verificarFilmeNomeado(filme1)
// // verificarFilmeNomeado(filme2)
// // verificarFilmeNomeado(filme3)

// // console.log(filmesNomeados)


// // SEMANA 3
let string1Atores = ``
    for(ator of filme1.atoresPrincipais){
        if(filme1.atoresPrincipais.indexOf(ator) === filme1.atoresPrincipais.length -1){
            string1Atores += `${ator}.`
        }else{
            string1Atores += `${ator}, `
        }
    }
let string2Atores = ``
    for(ator of filme2.atoresPrincipais){
        if(filme2.atoresPrincipais.indexOf(ator) === filme2.atoresPrincipais.length -1){
            string2Atores += `${ator}.`
        }else{
            string2Atores += `${ator}, `
        }
    }
let string3Atores = ``
    for(ator of filme3.atoresPrincipais){
        if(filme3.atoresPrincipais.indexOf(ator) === filme3.atoresPrincipais.length -1){
            string3Atores += `${ator}.`
        }else{
            string3Atores += `${ator}, `
        }
    }
filme1.atoresPrincipais = string1Atores
filme2.atoresPrincipais = string2Atores
filme3.atoresPrincipais = string3Atores

let filmes = []
filmes.push(filme1,filme2,filme3)
// teste do FOR
//filmes.push(serie = {
//     titulo: `GOT`,
//     ano: 2021,
//     temContinuacao: true,
//     atores: [`a`, `b`, `c`]
// })

// // FOR PARA EXIBIR O RELATORIO DO ARRAY DE FILMES
// for(filme of filmes){
//     for(propriedades in filme){
//         console.log(`${propriedades}: ${filme[propriedades]}`)
//     }
// }

// //FUNCAO QUE RETORNA RELATORIO DE OBJETO
// const retornarRelatorio = (objeto) => {
//     for(propriedades in objeto){
//         console.log(`${propriedades}: ${objeto[propriedades]}`)
//     }
// }
// retornarRelatorio()

function retornarObjetoQueTemONomeNaString (arrayDeObj,string) {
    for(objeto of arrayDeObj){
        for(n in objeto){
            if(objeto[n] === string){
                return objeto
            }
        }
    }
    if(objeto[n] !== string){
        alert(`Nenhum item encontrado`)
    }
}
console.log(retornarObjetoQueTemONomeNaString(filmes,"LA LA LAND: CANTANDO ESTAÇÕES"))