// Tipando parametros de funções
function sum(a:number, b:number){
    return a + b
}

// Interfaces
interface iAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquático'
    domestico: boolean
}

interface iFelinos extends iAnimal{
    visaoNoturna: boolean;
}

interface iCanino extends iAnimal{
    porte: 'Grande' | 'Medio' | 'Pequeno'
}

const animal: iAnimal = {
    nome: 'Elefante',
    tipo: 'aquático',
    domestico: false
    
} 
const felino: iFelinos = {
    nome:'Leão',
    tipo: 'terrestre',
    domestico: false,
    visaoNoturna: true

}

// Types - pode receber mais de uma interface
type iDomestico = iFelinos | iCanino

const animal2: iDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'Medio',
    tipo: 'terrestre',
}

// Tag e input
const input = document.getElementById('input') as HTMLInputElement;
input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement
    console.log(i.value)
})