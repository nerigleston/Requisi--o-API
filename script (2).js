const botaoFetch = window.document.getElementById("botaoFetch")
const resultado = document.getElementById("resultado")

botaoFetch.addEventListener('click', ()=> {
  fetch("https://dog.ceo/api/breed/corgi/images/random/3")
  .then((res) => res.json())
  .then((data) => data.message.map((foto)=>{
    resultado.innerHTML += `<img src=${foto}/>`
  }))
  .catch(error => resultado.innerHTML = '<h1>Erro no fetch</h1>')
})
