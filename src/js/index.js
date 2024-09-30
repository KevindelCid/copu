function copyTextToClipboard(text) {
  // Crea un elemento de texto temporal para seleccionar el contenido
  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  document.body.appendChild(tempInput);

  // Seleccionar y copiar el texto
  tempInput.select();
  document.execCommand("copy");

  // Eliminar el elemento temporal
  document.body.removeChild(tempInput);

  alert("Texto copiado al portapapeles!");
}
