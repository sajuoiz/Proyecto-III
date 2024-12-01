document.addEventListener('DOMContentLoaded', () => {
    // Manejo del envío del formulario
    const form = document.getElementById('service-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario
        const email = document.getElementById('email').value;
        const problem = document.getElementById('problem').value;

        if (email && problem) {
            alert(`Gracias por contactarnos. Te responderemos pronto al correo: ${email}`);
            form.reset(); // Limpia el formulario después de enviarlo
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    // Acceso al chat
    const chatButton = document.getElementById('chat-button');
    chatButton.addEventListener('click', () => {
        alert('Redirigiendo al chat de servicio al cliente...');
        // Aquí puedes redirigir a una página de chat real:
        // window.location.href = 'chat.html';
    });
});
