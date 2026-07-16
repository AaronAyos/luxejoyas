document.getElementById('leadForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if(!name || !email){
    alert('Por favor completa los campos requeridos.');
    return;
  }
  // Simulación de envío: en producción conectar con tu CRM o servicio de email
  document.getElementById('leadForm').classList.add('hidden');
  document.getElementById('thanks').classList.remove('hidden');
});