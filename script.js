document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener todos los botones de compra
    const buyButtons = document.querySelectorAll('.buy-btn');

    // 2. Iterar sobre cada botón y añadir un 'escuchador' de clics
    buyButtons.forEach(button => {
        // Ignoramos los botones deshabilitados (como 'Ver Detalles' de productos próximos)
        if (button.classList.contains('disabled')) {
            return;
        }

        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            
            // Lógica de Redirección o Carrito
            handleCheckout(productId);
        });
    });

    // 3. Función principal de Checkout
    function handleCheckout(productId) {
        let productName = '';
        let productPrice = 0;
        let paymentLink = ''; // Enlace real de PayPal o Stripe

        // --- MAPEO DE PRODUCTOS (IMPORTANTE: REEMPLAZA ESTOS ENLACES) ---

        switch (productId) {
            case 'D001':
                productName = 'Curso de Diseño Web Avanzado';
                productPrice = 59.99;
                // **AQUÍ DEBES PONER TU ENLACE REAL DE PAGO SEGURO**
                paymentLink = 'https://paypal.me/TuCuenta/59.99/CursoWeb'; 
                break;
            
            case 'D002':
                productName = 'Ebook: 10 Claves del Marketing';
                productPrice = 19.99;
                // **AQUÍ DEBES PONER TU ENLACE REAL DE PAGO SEGURO**
                paymentLink = 'https://paypal.me/TuCuenta/19.99/EbookMarketing';
                break;
            
            default:
                console.error("Producto no encontrado:", productId);
                alert("Error: El producto seleccionado no está disponible para compra.");
                return;
        }

        console.log(`Iniciando compra: ${productName} por $${productPrice} USD`);
        
        // --- REDIRECCIÓN AL PAGO ---
        
        if (paymentLink && paymentLink.includes('TuCuenta')) {
             // Si el enlace de ejemplo aún está, pedimos al usuario que lo cambie
             alert("¡Casi listo! Debes reemplazar el enlace 'paypal.me/TuCuenta' en el archivo script.js por tu enlace de pago real para que la compra funcione.");
             // Opcionalmente, puedes comentar la línea de abajo para evitar la redirección de prueba:
             window.open(paymentLink, '_blank');
        } else if (paymentLink) {
            const confirmPurchase = confirm(
                `Estás a punto de comprar:\n${productName} por $${productPrice} USD.\n\n¿Continuar con el pago?`
            );
            
            if (confirmPurchase) {
                // Abre el enlace de pago en una nueva pestaña (tu checkout)
                window.open(paymentLink, '_blank');
            }
        } else {
             alert("El enlace de pago para este producto aún no está configurado.");
        }
    }
});