document.addEventListener("DOMContentLoaded", () => {
  const botaoFetch = document.getElementById("botaoFetch");
  const resultado = document.getElementById("resultado");

  botaoFetch.addEventListener('click', () => {
    resultado.innerHTML = '';

    fetch("https://dog.ceo/api/breed/corgi/images/random/3")
      .then((res) => res.json())
      .then((data) => {
        data.message.forEach((foto) => {
          resultado.innerHTML += `<img src="${foto}" alt="Corgi"/>`;
        });
      })
      .catch(error => resultado.innerHTML = '<h1>Erro no fetch</h1>');
  });
});

