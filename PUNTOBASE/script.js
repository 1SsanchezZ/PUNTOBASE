// Función para validar el rut
function validarRut(rut) {
    // Implementar validación del rut
  }
  
  // Función para crear la carta de presentación
  function crearCarta() {
    const form = document.getElementById('postulacionForm');
    const rut = form.rut.value;
    const apellidoPaterno = form.apellidoPaterno.value;
    const apellidoMaterno = form.apellidoMaterno.value;
    const nombre = form.nombre.value;
    const fechaNacimiento = form.fechaNacimiento.value;
    const edad = form.edad.value;
    const genero = form.genero.value;
    const email = form.email.value;
    const celular = form.celular.value;
    const profesion = form.profesion.value;
    const motivacion = form.motivacion.value;
  
    const carta = `Estimados,
  
  Me dirijo a ustedes con el fin de expresar mi interés en postular al trabajo de apoyo ambiental en la isla de Chiloé.
  
  Mis datos son los siguientes:
  Rut: ${rut}
  Apellido Paterno: ${apellidoPaterno}
  Apellido Materno: ${apellidoMaterno}
  Nombre: ${nombre}
  Fecha de Nacimiento: ${fechaNacimiento}
  Edad: ${edad}
  Género: ${genero}
  Email: ${email}
  Celular: ${celular}
  Profesión: ${profesion}
  
  Motivación para postular:
  ${motivacion}
  
  Quedo atento a cualquier información adicional que puedan requerir.
  
  Saludos cordiales,
  ${nombre}`;
  
    document.getElementById('carta').value = carta;
  }
  
  // Event Listener para el botón "Crear Carta"
  document.getElementById('crearCarta').addEventListener('click', crearCarta);
  