document.addEventListener("DOMContentLoaded", () => {
  const botaoFetch = document.getElementById("botaoFetch");
  const resultado = document.getElementById("resultado");

  botaoFetch.addEventListener('click', () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => resultado.innerHTML = `<img src="${data.message}" alt="Dog"/>`)
      .catch((error) => console.log(error));
  });
});
