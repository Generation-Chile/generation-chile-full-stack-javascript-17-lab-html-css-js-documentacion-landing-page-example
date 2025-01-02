function presionarBoton() {
  let nombre = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let mensaje = document.getElementById('message').value;
  if (nombre === '' || email === '' || mensaje === '') {
    alert('Por favor, complete todos los campos');
    return;
  }
  alert('Gracias por enviar tu mensaje, revisa la consola por favor');
  console.log({ nombre, email, mensaje });
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}

function getCurrentYear() {
  const today = new Date();

  return today.getFullYear();
}

let form = document.getElementById('cta-form');
form.addEventListener('click', function () {
  let formElement = document.getElementById('form');
  formElement.scrollIntoView({ behavior: 'smooth' });
});

const paragraphFooter = document.getElementById('year');

paragraphFooter.textContent = `\u00A9 ${getCurrentYear()} FullStack Developers. Todos los derechos reservados`;
