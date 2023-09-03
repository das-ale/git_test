const parrafo = document.createElement('p');
parrafo.textContent="Hey I'm red!";
parrafo.style.color='red';
const container=document.querySelector('#container');
container.appendChild(parrafo);

const titulo3=document.createElement('h3');
titulo3.textContent="I'm a blue h3";
titulo3.style.cssText='color:blue';
container.insertBefore(titulo3, parrafo);

const nuevoDiv=document.createElement('div');
nuevoDiv.classList.add('cajaRoja');
nuevoDiv.setAttribute('id','nuevoId');
nuevoDiv.style.cssText=('border:black 1px; background-color:pink');

const titulo1=document.createElement('h1');
titulo1.textContent="I'm in a div";
const parrafo2=document.createElement('p');
parrafo2.textContent="Me too!";

nuevoDiv.appendChild(titulo1);
nuevoDiv.appendChild(parrafo2);

document.querySelector('#container').insertBefore(nuevoDiv,document.querySelector('.content'));

const btn=document.querySelector('#btn');

function helloWorld() {
    alert('Hello World!')
}

btn.addEventListener('click', function (e) {
    e.target.style.background='blue';
  });