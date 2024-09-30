function copyTextToClipboard(text) {
  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

function shareText(text) {
  // Verificar si el navegador soporta la Web Share API
  if (navigator.share) {
    navigator
      .share({
        title: "Compartir texto",
        text: text, // El texto que deseas compartir
      })
      .then(() => {
        console.log("Texto compartido con éxito!");
      })
      .catch((error) => {
        console.error("Error al compartir:", error);
      });
  } else {
    alert(
      "La API de compartir no es compatible con este navegador o versión de WebView."
    );
  }
}
