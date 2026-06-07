export const CART_STORAGE_KEY = 'trends_brindes_cart';

export const getCart = () => {
    if (typeof window === 'undefined') return [];
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
};

export const saveCart = (cart) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: cart }));
};

export const addToCart = (product) => {
    const cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart(cart);
};

export const removeFromCart = (productId) => {
    const cart = getCart().filter(item => item.id !== productId);
    saveCart(cart);
};

export const updateQuantity = (productId, quantity) => {

    const cart = getCart();

    const index = cart.findIndex(item => item.id === productId);

    if (index > -1) {
        cart[index].quantity = Math.max(1, Math.floor(quantity));
        saveCart(cart);
    }
};

export const clearCart = () => {
    saveCart([]);
};

export const generateWhatsAppUrl = (phone = "5551984287099") => {
    const cart = getCart();
    if (cart.length === 0) return null;

    let message = "Olá! Gostaria de solicitar um orçamento para os seguintes produtos:\n\n";
    cart.forEach(item => {
        message += `* *${item.nome}* (_Cód. ${item.codigo}_) - Quantidade: ${item.quantity}\n`;
    });

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    message += `\nTotal de itens: ${totalItems}`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};