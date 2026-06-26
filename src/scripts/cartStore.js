export const CART_STORAGE_KEY = 'trends_brindes_cart';
export const MAX_CART_ITEM_QUANTITY = 10000;

let _cartCache = null;

const clampQuantity = (quantity) => {
    const parsed = Number(quantity);
    if (!Number.isFinite(parsed)) return 1;
    return Math.min(MAX_CART_ITEM_QUANTITY, Math.max(1, Math.floor(parsed)));
};

const normalizeCart = (cart) => cart.map(item => ({
    ...item,
    quantity: clampQuantity(item.quantity),
}));

export const invalidateCache = () => {
    _cartCache = null;
};

export const getCart = () => {
    if (typeof window === 'undefined') return [];
    if (_cartCache !== null) return _cartCache;
    try {
        const saved = localStorage.getItem(CART_STORAGE_KEY);
        const parsedCart = saved ? JSON.parse(saved) : [];
        _cartCache = normalizeCart(parsedCart);
        if (saved && JSON.stringify(parsedCart) !== JSON.stringify(_cartCache)) {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(_cartCache));
        }
    } catch (e) {
        console.warn('[cartStore] Dados do carrinho corrompidos. Limpando.', e);
        localStorage.removeItem(CART_STORAGE_KEY);
        _cartCache = [];
    }
    return _cartCache;
};

export const saveCart = (cart) => {
    const normalizedCart = normalizeCart(cart);
    _cartCache = normalizedCart; // Atualiza cache ANTES de persistir
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(normalizedCart));
    } catch (e) {
        console.warn('[cartStore] Falha ao salvar carrinho.', e);
    }
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: normalizedCart }));
};

export const addToCart = (product) => {
    const cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id);
    if (existingIndex > -1) {
        cart[existingIndex].quantity = clampQuantity(cart[existingIndex].quantity + 1);
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
    const index = cart.findIndex(item => String(item.id) === String(productId));
    if (index > -1) {
        cart[index].quantity = clampQuantity(quantity);
        saveCart(cart);
    }
};

export const clearCart = () => {
    saveCart([]);
};

export const generateWhatsAppUrl = (cart = getCart(), phone = "5551984287099") => {
    if (cart.length === 0) return null;
    let message = "Olá! Gostaria de solicitar um orçamento para os seguintes produtos:\n\n";
    cart.forEach(item => {
        message += `* *${item.nome}* (_Cód. ${item.codigo}_) - Quantidade: ${item.quantity}\n`;
    });
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    message += `\nTotal de itens: ${totalItems}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
