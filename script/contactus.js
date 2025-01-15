function sendToWhatsAppString() {
  const firstName = document.querySelector(".First-Name").value;
  const LastName = document.querySelector(".Last-Name").value;
  const Email = document.querySelector(".E-mail").value;
  const Dateofbirth = document.querySelector(".dateOfBirth").value;
  const message = document.querySelector(".Message").value;

  const phoneno = "918824458774";

  const whatsappMessage = `Hello, I am ${firstName} ${LastName} , Date of birth : ${Dateofbirth} , E-mail adress : (${Email}). Message : ${message}`;

  const whatsappUrl = `https://wa.me/${phoneno}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  window.open(whatsappUrl, "_blank");
}
