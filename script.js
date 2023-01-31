// const valor = ["Juliana", "Jéssica", "Evelyn", "Trinity", "Geovanna"];

// document.getElementById("teste").innerHTML = valor[2];

// console.log(valor);



const dados = '{"nome0": "Juliana", "nome1": "Jéssica", "nome2": "Evelyn", "nome3": "Trinity", "nome4": "Geovanna" }'

const mostrar = JSON.parse(dados);

document.getElementById("nome0").innerHTML = mostrar.nome0;

document.getElementById("nome1").innerHTML = mostrar.nome1;

document.getElementById("nome2").innerHTML = mostrar.nome2;

document.getElementById("nome3").innerHTML = mostrar.nome3;

document.getElementById("nome4").innerHTML = mostrar.nome4;


