// ============================================================
// FONTE ÚNICA DE DADOS DOS PRODUTOS — Trends Brindes
// Importe este arquivo nos frontmatter das páginas Astro.
// NÃO importe diretamente em scripts client-side.
// ============================================================

export interface ProductColor {
    name: string;
    hex: string;
    image: string;
}

export interface Product {
    id: number;
    code: string;
    name: string;
    category: string;
    description: string;
    image: string;
    availability: string;
    colors: ProductColor[];
}

export const products: Product[] = [
    {
        id: 1,
        code: "9139A",
        name: "Squeeze Alumínio 500ml",
        category: "Garrafas e Squeezes",
        description:
            "Squeeze de alumínio 500ml com gravação laser. Leve, durável e perfeito para manter suas bebidas em temperatura ambiente.",
        image: "/squeeze-preta.png",
        availability: "Em estoque",
        colors: [
            { name: "Preto", hex: "#000000", image: "/squeeze-preta.png" },
            { name: "Prata", hex: "#C0C0C0", image: "/squeeze-prata.png" },
            { name: "Azul",  hex: "#0000FF", image: "/squeeze-azul.png"  },
        ],
    },
    {
        id: 2,
        code: "18821",
        name: "Squeeze Inox 750ml",
        category: "Garrafas e Squeezes",
        description:
            "Squeeze em aço inoxidável 750ml com design moderno. Mantém bebidas frias por até 24 horas. Resistente e elegante.",
        image: "https://www.cdncloud.com.br/content/interfaces/cms/userfiles/pacotes_xbzbrindes/pack_202407181828472162/adicionais/squeeze-inox-750ml-5287-adic.jpg",
        availability: "Em estoque",
        colors: [
            { name: "Inox",  hex: "#A8A9AD", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&h=500&q=80" },
            { name: "Branco", hex: "#FFFFFF", image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=600&h=500&q=80" },
        ],
    },
    {
        id: 3,
        code: "19032",
        name: "Garrafa Térmica Premium 800ml",
        category: "Garrafas e Squeezes",
        description:
            "Garrafa térmica premium 800ml com isolamento duplo. Ideal para manter bebidas quentes ou frias durante o dia todo.",
        image: "https://claraeletro.fbitsstatic.net/img/p/garrafa-termica-paramount-premium-4-0l-inox-73147/260532.jpg?w=800&h=800&v=202511061427",
        availability: "Em estoque",
        colors: [
            { name: "Preto",    hex: "#000000", image: "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?auto=format&fit=crop&w=600&h=500&q=80" },
            { name: "Vermelho", hex: "#FF0000", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=600&h=500&q=80" },
            { name: "Azul",     hex: "#0080FF", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&h=500&q=80" },
        ],
    },
    {
        id: 4,
        code: "18969",
        name: "Copo Térmico Flex 900ml",
        category: "Copos e Canecas",
        description:
            "Copo térmico flexível 900ml com design moderno. Confortável de segurar e com capacidade generosa para bebidas.",
        image: "https://lojassommer.cdn.magazord.com.br/img/2024/12/produto/2949/copo-mor-550.png?ims=fit-in/600x600/filters:fill(white)",
        availability: "Em estoque",
        colors: [
            { name: "Verde", hex: "#008000", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=600&h=500&q=80" },
            { name: "Cinza", hex: "#808080", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&h=500&q=80" },
        ],
    },
    {
        id: 6,
        code: "CUIA-001",
        name: "Cuia Térmica em Inox Gaúcha",
        category: "Copos e Canecas",
        description:
            "Cuia tradicional gaúcha em inox com isolamento térmico. Mantém a temperatura do chimarrão perfeita. Presente cultural e funcional.",
        image: "https://acdn-us.mitiendanube.com/stores/002/566/450/products/6570eee904881de987775e7bd4ab2402-005583cc7b70b134c217519258752331-1024-1024.webp",
        availability: "Sob encomenda",
        colors: [
            { name: "Inox",  hex: "#A8A9AD", image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=600&h=500&q=80" },
            { name: "Cobre", hex: "#B87333", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&h=500&q=80" },
        ],
    },
    {
        id: 7,
        code: "06099A",
        name: "Agenda Diária 2026 Linho Luxo",
        category: "Materiais de Escritório",
        description:
            "Agenda diária 2026 em capa de linho com gravação personalizada. Acessório profissional e elegante para organização pessoal.",
        image: "https://www.crossbrindes.com.br/image/cache/catalog/products_2025/Agenda-Diaria-2025-7881-1756293519-276x276.jpg",
        availability: "Em estoque",
        colors: [
            { name: "Preto",  hex: "#000000", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&h=500&q=80" },
            { name: "Cinza",  hex: "#808080", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=600&h=500&q=80" },
            { name: "Marrom", hex: "#8B4513", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&h=500&q=80" },
        ],
    },
    {
        id: 8,
        code: "10998",
        name: "Kit Executivo Premium 3 Peças",
        category: "Materiais de Escritório",
        description:
            "Kit executivo com 3 peças premium: caneta, marker e lápis. Embalagem sofisticada, ideal para presentear executivos e parceiros.",
        image: "https://papabrindes.com/uploads/91350b6fc75b562f17e6e962f6405ad8ab86fc8b.jpg",
        availability: "Em estoque",
        colors: [
            { name: "Preto", hex: "#000000", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&h=500&q=80" },
            { name: "Azul",  hex: "#000080", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=600&h=500&q=80" },
        ],
    },
    {
        id: 9,
        code: "1329P",
        name: "Bolsa Térmica 7L",
        category: "Bolsas Térmicas e Marmitas",
        description:
            "Bolsa térmica com capacidade 7L e isolamento eficiente. Mantém alimentos e bebidas em temperatura ideal. Prática e durável.",
        image: "https://cm3.com.br/wp-content/uploads/2023/04/BOLSA-TERMICA-7-LITROS-BRINDES-PERSONALIZADOS-CM3-BT307EC_0013_LOGO-CM3-simples-copy-122-copiar-58-1.jpg",
        availability: "Em estoque",
        colors: [
            { name: "Preto",    hex: "#000000", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&h=500&q=80" },
            { name: "Cinza",    hex: "#808080", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=600&h=500&q=80" },
            { name: "Vermelho", hex: "#DC143C", image: "https://images.unsplash.com/photo-1510307704987-b8f5070fc64d?auto=format&fit=crop&w=600&h=500&q=80" },
        ],
    },
    {
        id: 10,
        code: "14185",
        name: "Mochila Antifurto Inteligente 16L",
        category: "Bolsas e Mochilas",
        description:
            "Mochila com capacidade 16L, recursos antifurto e compartimentos organizados. Perfeita para trabalho, viagens ou uso diário.",
        image: "https://www.cdncloud.com.br/content/interfaces/cms/userfiles/pacotes_xbzbrindes/pack_202407181828472162/fotos003/mochila-de-nylon-17-litros-3427.jpg",
        availability: "Em estoque",
        colors: [
            { name: "Preto", hex: "#000000", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&h=500&q=80" },
            { name: "Cinza", hex: "#808080", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&h=500&q=80" },
            { name: "Azul",  hex: "#0066CC", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=600&h=500&q=80" },
        ],
    },
];

// Índice por ID para lookup O(1) — use productMap.get(id) em vez de products.find()
export const productMap = new Map<number, Product>(
    products.map((p) => [p.id, p])
);

// Categorias únicas derivadas dos dados — sem hardcode, cresce com o catálogo
export const categories: string[] = [
    ...new Set(products.map((p) => p.category)),
];