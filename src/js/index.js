function copyTextToClipboard(text) {
  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

function isWebShareSupported() {
  return !!navigator.share;
}

function shareText(text) {
  navigator
    .share({
      title: "Compartir texto",
      text: text,
    })
    .then(() => {
      console.log("Texto compartido con éxito!");
    })
    .catch((error) => {
      console.error("Error al compartir:", error);
    });
}
