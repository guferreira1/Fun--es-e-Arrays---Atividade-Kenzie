let competidores = [
    'Rafael',
    'Daniel',
    'Manoel'
]

function positions(competidores){
    let podio = []
    
    if(competidores.indexOf('Daniel') == 2){
        podio.push(competidores[0]);
        podio.push(competidores[2]);
        podio.push(competidores[1])
        
    } else if(competidores.indexOf('Daniel') == 1){
        podio.push(competidores[1]);
        podio.push(competidores[0]);
        podio.push(competidores[2])
        
    } else {
        podio.push(competidores[0]);
        podio.push(competidores[1]);
        podio.push(competidores[2])
        return `Daniel é o vencedor` 
        
    }

    return `Esse é o pódio:
    
1 - ${podio[0]}
2 - ${podio[1]}
3 - ${podio[2]}` 
} 

console.log(positions(competidores))