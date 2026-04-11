(function(){
  emailjs.init("SUA_PUBLIC_KEY"); // coloque sua chave
})();

// INTRO
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
}, 1500);

// ENVIO
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", this)
    .then(() => {
      alert("Inscrição enviada com sucesso!");
    }, (error) => {
      alert("Erro: " + error.text);
    });
});