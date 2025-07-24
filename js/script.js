const primeiraSection = document.querySelector("[data-firstSection]");
const segundaSection = document.querySelector("[data-secondSection]");
const input = document.querySelector("[data-form]");
const btn = document.querySelector("[data-btn]");
const qrcode = document.querySelector("[data-qrcode]");
const botoes = document.querySelectorAll("[data-buttons]");
const regex = /^(https?:\/\/)([\w-]+(\.[\w-]+)+)(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;

function handleClick(event) {
  event.preventDefault();
  const valor = input.value.trim();
  qrcode.innerHTML = "";
  

  
  if (!valor.match(regex)) {
      alert("Valor Invalido");
    } else {
        primeiraSection.style.display = "none";
        segundaSection.style.display = "block";
        new QRCode(qrcode, {
          text: valor,
          width: 250,
          height: 250,
        });
  }
}

btn.addEventListener("click", handleClick);

botoes.forEach(item =>{
    item.addEventListener('click', () => alert('Essa funcionalidade ainda está em desenvolvimento'))
})
