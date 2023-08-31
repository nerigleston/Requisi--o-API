const botaoFetch = window.document.getElementById("botaoFetch")
const resultado = document.getElementById("resultado")

botaoFetch.addEventListener('click', ()=> {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => {return res.json()})
  .then(data => resultado.innerHTML = `<img src=${data.message}/>`)
  .catch(error => console.log(error))
})