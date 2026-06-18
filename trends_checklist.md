0. Funcionalidades

    [ ] Validar metadados BaseLayout

    [ ] Validar produtos pagina index vitrine e preview catalogo

    [ ] Criar pagina catalogo

1. SEO e Compartilhamento (Redes Sociais)
    [ validar descricao cliente ] Meta Description: Garanta que a descrição tem entre 120 e 160 caracteres e resume bem a proposta de valor.

    [ marcos finalizando ] Open Graph (og:image): Teste o link da Vercel em ferramentas como o Open Graph Check ou envie no seu próprio WhatsApp para ver se a imagem de preview carrega corretamente e não está cortada.

    [x] Sitemap.xml: Verifique se o arquivo está gerado e acessível em seudominio.com/sitemap.xml.

    [x] Robots.txt: Garanta que o arquivo permite a indexação dos motores de busca (User-agent: *, Allow: /).

2. Validação do Fluxo do WhatsApp e Carrinho
    [x] Persistência do Carrinho: Feche a aba do navegador, reabra e garanta que os itens adicionados continuam lá. O localStorage resolve isso, mas isole cenários onde o usuário limpa o cache ou navega em modo anônimo (garanta que a UI não quebre se o localStorage retornar vazio).

    [x] Formatação da Mensagem (URL Encode): Teste a string que é enviada para a API do WhatsApp (https://wa.me/...). Certifique-se de que quebras de linha (%0A), emojis e espaços estão codificados corretamente para que a mensagem chegue legível e organizada para quem vai atender.

    [x] Quantidade e Limites: Teste adicionar muitos itens ou quantidades absurdas no carrinho para garantir que o layout não quebre e que o tamanho da mensagem final não estoure o limite de caracteres que a URL do WhatsApp suporta.

3. Integrações de Rastreamento (Analytics)
    [x] Scripts Ativos: Abra o console do navegador na página publicada e certifique-se de que não há erros de bloqueio de conteúdo (CORS) ou falhas ao carregar o Google Analytics/Meta Pixel.

4. Experiência do Usuário (UX) e Interface
    [ ] Links Quebrados: Clique em absolutamente todos os botões, links de rodapé e políticas de privacidade para garantir que nenhum retorna 404.

    [x] Comportamento do Scroll: Botões que levam o usuário para seções da mesma página (âncoras) devem funcionar de forma suave, sem pular bruscamente.

    [ ] Visualização Mobile: Redimensione o navegador ou teste direto no celular para garantir que nenhum texto longo está cortando ou que botões ficaram pequenos demais para o clique do polegar.

5. Configuração Final do Domínio (Pós-compra)
    [ ] Redirecionamento Apex/WWW: Garanta que tanto site.com quanto www.site.com resolvem para o mesmo lugar. A Vercel geralmente sugere um deles como o principal e faz o redirecionamento automático do outro; aceite essa sugestão.

6. Otimização de Imagens e Assets
    [ ] Imagens dos Produtos/Serviços: Como a página não busca dados de uma API externa, todas as imagens provavelmente estão no seu repositório. Certifique-se de que estão em formatos modernos (.webp ou .avif) e com tamanhos responsivos. Imagens pesadas matam a conversão no mobile, mesmo que o Lighthouse dê nota alta no desktop.

    [ ] SVGs Inline vs Imagens: Garanta que ícones simples (como o logo do WhatsApp e o ícone do carrinho) estejam em SVG para renderização imediata e sem distorção.

7. Contingência e UX
    [ ] Aviso de Redirecionamento: É uma boa prática dar um feedback visual rápido (um spinner ou um texto de "Redirecionando...") logo após o clique no botão do WhatsApp, para o usuário entender que a página está processando a ação e não travou.

    [ ] Políticas e LGPD: Mesmo sem banco de dados, você está utilizando localStorage para persistir dados de escolha do usuário e, possivelmente, cookies de rastreamento (Analytics). Garanta que a página tenha um aviso simples de consentimento de cookies e um link para a Política de Privacidade no rodapé para evitar problemas legais.