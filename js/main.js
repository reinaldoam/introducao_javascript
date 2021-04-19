var nome = "Reinaldo Magalhães";
var idade = 18;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo!"
var n1 = 5;
var n2 = 3;
var frutas = ["Maça","Pêra","Uva","Laranja"];
var animal = {nome:"cachorro",genero:"mamifero"};
var carros = [{nome:"Gol",marca:"VW"},{nome:"Palio",marca:"GM"},{nome:"Corolla",marca:"Toyota"}];
var validar = 0;

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse.";
    elemento.innerHTML = "Obrigado por passar o mouse.";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaochange(elemento){
    console.log(elemento.value)
}


/*
function validaidade(idade){
  if(idade >= 18){
      validar = true;
  }
  else {
      validar = false;
  }
  return validar;
}

var idade = prompt("Qual a sua idade?");
validaidade(idade);
//console.log(validar)

if (validar){
    console.log("Maior de 18 anos");
}
else {
    console.log("Menor de 18 anos");
}
*/
/*
function SetReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome);
} 

console.log(SetReplace("Vai Japão","Japão","Brasil"));
*/

/*
function soma(n1,n2){
    return n1+n2;
};
console.log(soma(2,3));
*/

/*
var d = new Date();
alert(d.getMonth()+1);
*/

/*
var i;
for (i=1; i <= 5; i++){
    console.log(i);
};
*/

/*
var idade = prompt("Qual a sua idade?");
if(idade >= 18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
};
*/
/*
var i = 0;
while(i < 5){
    console.log(i);
    i++;
};
*/

//console.log(carros[0].nome);
//console.log(carros[0].marca);
//console.log(animal.nome);
//alert(animal.genero);
//frutas.push("Caju");
//console.log(frutas.join(" | "));
//console.log(frutas[0]);
//console.log(frutas.toString()[0]);
//console.log(frutas.toString());
//console.log(frutas.reverse());
//frutas.pop();
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
///console.log(frutas.length);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão","Brasil"));
//console.log("5 x 3 = " + n1 * n2);
//console.log(frutas);
//alert(frase.replace("Japão","Brasil"));
//alert(frase.toUpperCase());
//alert(frase.toLowerCase());
//alert(frutas);