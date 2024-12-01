// Agregar funcionalidad básica para el botón "Agregar al carrito"
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Producto agregado al carrito.');
        });
    });
});
