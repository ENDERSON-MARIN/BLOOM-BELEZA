# 🌸 Bloom Beleza

## Descrição do Projeto

O Bloom Beleza é uma plataforma de e-commerce moderna e completa para produtos de moda e beleza, desenvolvida com foco em desempenho, segurança e uma experiência de usuário excepcional. O projeto oferece uma interface intuitiva para navegação de produtos, gerenciamento de carrinho de compras, autenticação de usuários e processamento de pedidos com endereços de entrega.

## ✨ Funcionalidades-Chave

**Catálogo de Produtos**: Sistema completo de exibição de produtos com variantes (cores, tamanhos), imagens de alta qualidade e descrições detalhadas organizadas por categorias.

**Carrinho de Compras**: Experiência fluida de compra com adição, remoção e atualização de quantidades de produtos, cálculo automático de totais e persistência de dados.

**Autenticação Segura**: Sistema de autenticação robusto implementado com Better Auth, suportando login por email/senha e autenticação social via Google.

**Gestão de Endereços**: Gerenciamento completo de endereços de entrega com validação de dados, suporte a múltiplos endereços por usuário e seleção durante o checkout.

**Navegação por Categorias**: Organização inteligente de produtos por categorias, facilitando a descoberta e navegação pelos itens disponíveis.

**Marcas Parceiras**: Showcase de marcas parceiras renomadas como Nike, Adidas, Puma, New Balance, Converse, Polo e Zara.

**Gateway de Pagamento**: Integração completa com Stripe para processamento seguro de pagamentos, suporte a múltiplos métodos de pagamento e gerenciamento de transações.

## 📸 Screenshots

<div style="overflow-x: auto;">
    <table style="width: 100%;">
        <tr>
            <td style="width: 50%;"><img src="./public/banner-01.png" alt="Banner Principal" style="width: 100%; height: auto; object-fit: cover;" /></td>
            <td style="width: 50%;"><img src="./public/banner-02.png" alt="Banner Promocional" style="width: 100%; height: auto; object-fit: cover;" /></td>
        </tr>
    </table>
</div>

## 🚀 Stack Tecnológica

**Frontend**: Interface construída com React 19 e Next.js 15.4.1 (App Router), garantindo desempenho otimizado com renderização do lado do servidor (SSR) e Server Components. TypeScript 5 para maior robustez e tipagem estática de código.

**Design e Componentes**: Design moderno e responsivo utilizando Tailwind CSS 4 para estilização. Componentes UI acessíveis e reutilizáveis implementados com Radix UI e shadcn/ui, seguindo as melhores práticas de acessibilidade.

**Gerenciamento de Formulários**: Validação de formulários com React Hook Form 7.62 e Zod 4.0, garantindo dados consistentes e validados no lado do cliente e servidor.

**Gerenciamento de Estado**: TanStack Query (React Query) 5.83 para fetching, caching e sincronização de dados do servidor, proporcionando uma experiência de usuário fluida.

**Backend e Banco de Dados**: PostgreSQL como banco de dados relacional, gerenciado através do Drizzle ORM 0.44 para queries tipadas, seguras e com excelente performance.

**Autenticação**: Better Auth 1.2 para autenticação moderna e segura, com suporte a email/senha e provedores sociais (Google), integrado nativamente com Drizzle ORM.

**Pagamentos**: Stripe para processamento seguro de pagamentos online, com suporte a cartões de crédito/débito, webhooks para confirmação de pagamentos e gerenciamento de transações.

**Notificações**: Sistema de notificações toast elegante e acessível com Sonner 2.0 para feedback visual ao usuário.

## 📊 Modelo de Dados

O sistema trabalha com as seguintes entidades principais:

**User (Usuário)**: Gerenciamento de usuários autenticados com os seguintes atributos:

- ID único
- Nome completo
- Email (único)
- Email verificado
- Imagem de perfil
- Datas de criação e atualização
- Relacionamentos: endereços de entrega e carrinho

**Product (Produto)**: Catálogo de produtos com:

- ID único
- Nome do produto
- Slug para URLs amigáveis
- Descrição detalhada
- Categoria associada
- Variantes (cores, tamanhos)
- Data de criação

**ProductVariant (Variante de Produto)**: Variações de produtos com:

- ID único
- Nome da variante
- Cor
- Preço em centavos
- URL da imagem
- Slug único
- Relacionamento com produto pai

**Category (Categoria)**: Organização de produtos por:

- ID único
- Nome da categoria
- Slug para navegação
- Lista de produtos associados

**Cart (Carrinho)**: Carrinho de compras do usuário com:

- ID único
- Usuário proprietário
- Endereço de entrega selecionado
- Itens do carrinho
- Data de criação

**CartItem (Item do Carrinho)**: Itens individuais no carrinho:

- ID único
- Variante do produto
- Quantidade
- Relacionamento com carrinho

**ShippingAddress (Endereço de Entrega)**: Endereços cadastrados com:

- Nome do destinatário
- Endereço completo (rua, número, complemento, bairro)
- Cidade, estado e CEP
- País
- Telefone e email de contato
- CPF ou CNPJ
- Relacionamento com usuário

## 🛠️ Tecnologias e Ferramentas

- **Next.js 15.4.1** - Framework React com App Router e Server Components
- **React 19.1.0** - Biblioteca para construção de interfaces modernas
- **TypeScript 5** - Superset JavaScript com tipagem estática
- **Tailwind CSS 4** - Framework CSS utility-first com PostCSS
- **Drizzle ORM 0.44.2** - ORM TypeScript-first para PostgreSQL
- **PostgreSQL** - Banco de dados relacional
- **Better Auth 1.2.12** - Autenticação moderna com suporte a múltiplos provedores
- **React Hook Form 7.62** - Gerenciamento de formulários performático
- **Zod 4.0.15** - Validação de schemas TypeScript-first
- **TanStack Query 5.83** - Gerenciamento de estado assíncrono e cache
- **Radix UI** - Componentes UI acessíveis e sem estilo
- **shadcn/ui** - Componentes UI reutilizáveis e customizáveis
- **Lucide React 0.536** - Biblioteca de ícones moderna
- **Sonner 2.0.7** - Sistema de notificações toast elegante
- **React Number Format 5.4.4** - Formatação de números e máscaras
- **Stripe** - Gateway de pagamento para processamento de transações
- **Next Themes 0.4.6** - Gerenciamento de temas (dark/light mode)
- **class-variance-authority** - Utilitário para variantes de componentes
- **clsx & tailwind-merge** - Utilitários para classes CSS condicionais

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 20 ou superior)
- **npm** (versão 10 ou superior)
- **Git**
- **PostgreSQL** (versão 14 ou superior)

## 🚀 Começando

### 1. Clone o repositório

```bash
git clone https://github.com/ENDERSON-MARIN/BLOOM-BELEZA.git
cd BLOOM-BELEZA
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Banco de Dados PostgreSQL
DATABASE_URL="postgresql://user:password@host:port/database?sslmode=require"

# Better Auth - Google OAuth
GOOGLE_CLIENT_ID="seu_google_client_id"
GOOGLE_CLIENT_SECRET="seu_google_client_secret"

# URL da Aplicação
BETTER_AUTH_URL="http://localhost:3000"
BETTER_AUTH_SECRET="sua_chave_secreta_aleatoria"

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="sua_chave_publica_stripe"
STRIPE_SECRET_KEY="sua_chave_secreta_stripe"
STRIPE_WEBHOOK_SECRET="seu_webhook_secret_stripe"
```

### 4. Configure o banco de dados

Certifique-se de que o PostgreSQL está rodando e crie um banco de dados para o projeto.

### 5. Execute as migrações do banco de dados

```bash
npx drizzle-kit generate
npx drizzle-kit push
```

### 6. (Opcional) Visualize o banco de dados com Drizzle Studio

```bash
npx drizzle-kit studio
```

Acesse: http://localhost:4983

### 7. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

## 📦 Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Cria a build de produção
npm run start        # Inicia o servidor de produção
npm run lint         # Executa o linter
npm run prepare      # Configura os hooks do Husky
```

## 🔐 Configuração de Serviços Externos

### Better Auth (Autenticação)

O projeto utiliza Better Auth para autenticação moderna e segura.

**Configuração do Google OAuth:**

1. Acesse o [Google Cloud Console](https://console.cloud.google.com)
2. Crie um novo projeto ou selecione um existente
3. Ative a API do Google+
4. Vá em "Credenciais" e crie credenciais OAuth 2.0
5. Configure as URLs de redirecionamento:
   - Desenvolvimento: `http://localhost:3000/api/auth/callback/google`
   - Produção: `https://seu-dominio.com/api/auth/callback/google`
6. Copie o Client ID e Client Secret para o arquivo `.env`

**Gerar Secret Key:**

```bash
openssl rand -base64 32
```

Copie o resultado para `BETTER_AUTH_SECRET` no arquivo `.env`

### Stripe (Gateway de Pagamento)

O projeto utiliza Stripe para processamento seguro de pagamentos.

**Configuração do Stripe:**

1. Crie uma conta em [stripe.com](https://stripe.com)
2. Acesse o Dashboard do Stripe
3. Vá em "Developers" > "API keys"
4. Copie a "Publishable key" para `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
5. Copie a "Secret key" para `STRIPE_SECRET_KEY`

**Configuração de Webhooks:**

1. No Dashboard do Stripe, vá em "Developers" > "Webhooks"
2. Clique em "Add endpoint"
3. Configure a URL do webhook:
   - Desenvolvimento: `http://localhost:3000/api/webhooks/stripe`
   - Produção: `https://seu-dominio.com/api/webhooks/stripe`
4. Selecione os eventos a serem monitorados:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Copie o "Signing secret" para `STRIPE_WEBHOOK_SECRET`

**Teste em Desenvolvimento:**

Para testar webhooks localmente, use o Stripe CLI:

```bash
# Instalar Stripe CLI
# Windows (com Scoop): scoop install stripe
# macOS: brew install stripe/stripe-cli/stripe
# Linux: https://stripe.com/docs/stripe-cli

# Login no Stripe
stripe login

# Encaminhar webhooks para localhost
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

**Métodos de Pagamento Suportados:**

- Cartões de crédito (Visa, Mastercard, American Express, etc.)
- Cartões de débito
- PIX (para clientes brasileiros)
- Boleto bancário (para clientes brasileiros)
- Outros métodos regionais

### PostgreSQL (Banco de Dados)

**Opções de hospedagem recomendadas:**

- **Neon** - PostgreSQL serverless gratuito ([neon.tech](https://neon.tech))
- **Supabase** - PostgreSQL com recursos adicionais ([supabase.com](https://supabase.com))
- **Railway** - Deploy simplificado ([railway.app](https://railway.app))
- **Vercel Postgres** - Integração nativa com Vercel ([vercel.com/storage/postgres](https://vercel.com/storage/postgres))

## 🗂️ Estrutura do Projeto

```
bloom-beleza/
├── src/
│   ├── app/                      # App Router do Next.js
│   │   ├── api/                  # API Routes
│   │   │   └── auth/             # Endpoints de autenticação
│   │   ├── authentication/       # Página de login/registro
│   │   ├── cart/                 # Fluxo do carrinho de compras
│   │   │   ├── identification/   # Identificação do usuário
│   │   │   ├── confirmation/     # Confirmação do pedido
│   │   │   └── components/       # Componentes do carrinho
│   │   ├── category/             # Páginas de categorias
│   │   │   └── [slug]/           # Categoria dinâmica
│   │   ├── product-variant/      # Páginas de produtos
│   │   │   └── [slug]/           # Produto dinâmico
│   │   ├── layout.tsx            # Layout raiz
│   │   ├── page.tsx              # Página inicial
│   │   └── globals.css           # Estilos globais
│   ├── actions/                  # Server Actions
│   │   ├── add-cart-product/     # Adicionar ao carrinho
│   │   ├── get-cart/             # Buscar carrinho
│   │   ├── get-user-addresses/   # Buscar endereços
│   │   └── ...                   # Outras actions
│   ├── components/               # Componentes reutilizáveis
│   │   ├── common/               # Componentes comuns
│   │   │   ├── header.tsx        # Cabeçalho
│   │   │   ├── footer.tsx        # Rodapé
│   │   │   ├── cart.tsx          # Carrinho lateral
│   │   │   ├── product-list.tsx  # Lista de produtos
│   │   │   └── ...
│   │   └── ui/                   # Componentes UI (shadcn/ui)
│   ├── db/                       # Configuração do banco
│   │   ├── schema.ts             # Schema Drizzle
│   │   └── index.ts              # Instância do Drizzle
│   ├── lib/                      # Bibliotecas e configurações
│   │   ├── auth.ts               # Configuração Better Auth
│   │   ├── auth-client.ts        # Cliente de autenticação
│   │   └── utils.ts              # Utilitários
│   ├── hooks/                    # Custom Hooks
│   ├── helpers/                  # Funções auxiliares
│   └── providers/                # Context Providers
│       └── react-query.tsx       # Provider TanStack Query
├── public/                       # Arquivos estáticos
│   ├── banner-01.png             # Banners promocionais
│   ├── banner-02.png
│   └── brand_*.png               # Logos das marcas
├── drizzle/                      # Migrações do Drizzle
├── drizzle.config.ts             # Configuração Drizzle Kit
├── components.json               # Configuração shadcn/ui
├── tailwind.config.ts            # Configuração Tailwind
└── tsconfig.json                 # Configuração TypeScript
```

## 🎨 Funcionalidades Detalhadas

### Catálogo de Produtos

- Exibição de produtos com imagens de alta qualidade
- Variantes de produtos (cores, tamanhos, preços)
- Navegação por categorias
- Produtos mais vendidos e novos produtos em destaque
- URLs amigáveis (slugs) para SEO otimizado

### Carrinho de Compras

- Adicionar produtos ao carrinho com seleção de variantes
- Atualizar quantidades de produtos
- Remover produtos do carrinho
- Cálculo automático de subtotais e total
- Persistência do carrinho no banco de dados
- Carrinho lateral (sheet) para acesso rápido

### Sistema de Autenticação

- Registro de usuários com email e senha
- Login com email e senha
- Autenticação social via Google OAuth
- Sessões seguras com tokens
- Proteção de rotas autenticadas
- Gerenciamento de perfil de usuário

### Gestão de Endereços

- Cadastro de múltiplos endereços de entrega
- Validação completa de dados (CEP, CPF/CNPJ, telefone)
- Seleção de endereço durante o checkout
- Edição e exclusão de endereços
- Campos para informações de contato

### Processamento de Pagamentos

- Integração completa com Stripe Checkout
- Suporte a múltiplos métodos de pagamento
- Processamento seguro de transações
- Webhooks para confirmação de pagamentos
- Gerenciamento de status de pedidos
- Histórico de transações
- Reembolsos e cancelamentos
- Ambiente de testes (test mode) e produção

### Navegação e UI

- Design responsivo para mobile, tablet e desktop
- Tema claro/escuro com Next Themes
- Componentes acessíveis (ARIA labels, keyboard navigation)
- Notificações toast para feedback ao usuário
- Loading states e skeleton screens
- Animações suaves e transições

## 🔒 Segurança

- Autenticação robusta com Better Auth
- Validação de dados com Zod no cliente e servidor
- Proteção contra SQL Injection via Drizzle ORM
- Variáveis de ambiente para dados sensíveis
- Sessões seguras com tokens e expiração
- Hashing de senhas com bcrypt
- HTTPS obrigatório em produção
- CSRF protection integrado
- Sanitização de inputs de usuário
- Rate limiting em endpoints sensíveis

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Importe o projeto no [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente:
   - `DATABASE_URL`
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `BETTER_AUTH_URL` (URL do seu domínio)
   - `BETTER_AUTH_SECRET`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
4. Configure o banco de dados (Neon, Supabase ou Vercel Postgres)
5. Execute as migrações do Drizzle
6. Configure o webhook do Stripe apontando para seu domínio
7. Deploy automático a cada push

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js 15:

- **Netlify** - Deploy simplificado com Git
- **Railway** - Deploy com banco de dados integrado
- **Render** - Hospedagem com PostgreSQL incluído
- **AWS Amplify** - Infraestrutura escalável da AWS
- **DigitalOcean App Platform** - Deploy containerizado

### Checklist de Deploy

- [ ] Configurar variáveis de ambiente
- [ ] Configurar banco de dados PostgreSQL
- [ ] Executar migrações do Drizzle
- [ ] Configurar Google OAuth (URLs de callback)
- [ ] Configurar Stripe (chaves de API e webhooks)
- [ ] Testar pagamentos em modo de teste
- [ ] Configurar domínio customizado
- [ ] Habilitar HTTPS
- [ ] Testar autenticação em produção
- [ ] Testar fluxo completo de checkout
- [ ] Ativar modo de produção no Stripe
- [ ] Configurar CDN para imagens (opcional)

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Padrões de Código

### Princípios Gerais

- **SEMPRE** utilize TypeScript para todo o código
- **SEMPRE** siga os princípios SOLID e Clean Code
- **SEMPRE** use kebab-case para nomes de arquivos e pastas
- **SEMPRE** use nomes de variáveis descritivos (ex: `isLoading`, `hasError`)
- **SEMPRE** aplique DRY (Don't Repeat Yourself) - evite duplicidade de código

### Estrutura de Componentes

- Componentes reutilizáveis devem estar em `src/components/common` ou `src/components/ui`
- Componentes específicos de página devem estar em `_components` dentro da pasta da página
- **SEMPRE** use componentes shadcn/ui quando disponíveis

### Estilização

- **SEMPRE** utilize Tailwind CSS para estilização
- Use `clsx` e `tailwind-merge` para classes condicionais
- Siga o design system estabelecido

### Formulários e Validação

- **SEMPRE** use React Hook Form para criação de formulários
- **SEMPRE** use Zod para validação de schemas
- Use o componente `Form` de shadcn/ui como base

### Fetching de Dados

- **SEMPRE** use TanStack Query para fetching de dados
- Crie custom hooks em `src/hooks/queries` para queries
- Crie custom hooks em `src/hooks/mutations` para mutations
- Exemplo: `use-get-products.ts`, `use-create-order.ts`

### Server Actions

- Crie Server Actions em `src/actions` organizadas por funcionalidade
- Cada action deve ter sua própria pasta com `index.ts`
- Valide dados com Zod antes de processar

### Commits

- **SEMPRE** siga o padrão Conventional Commits
- Use letras minúsculas
- Exemplos:
  - `feat: adiciona página de checkout`
  - `fix: corrige cálculo do carrinho`
  - `docs: atualiza readme`
  - `style: ajusta espaçamento do header`
  - `refactor: melhora estrutura de componentes`

## 🐛 Problemas Conhecidos

Nenhum problema conhecido no momento. Reporte bugs através das [Issues](https://github.com/ENDERSON-MARIN/BLOOM-BELEZA/issues).

## 📚 Recursos Adicionais

### Documentação Oficial

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview)
- [Better Auth Documentation](https://www.better-auth.com/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe API Reference](https://stripe.com/docs/api)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Zod Documentation](https://zod.dev)

### Tutoriais e Guias

- [Next.js App Router Guide](https://nextjs.org/docs/app)
- [Drizzle ORM Quick Start](https://orm.drizzle.team/docs/quick-start)
- [Better Auth Setup Guide](https://www.better-auth.com/docs/installation)
- [Stripe Checkout Integration](https://stripe.com/docs/checkout/quickstart)
- [Stripe Webhooks Guide](https://stripe.com/docs/webhooks)
- [React Hook Form Guide](https://react-hook-form.com/get-started)

## 🎯 Roadmap

### Funcionalidades Futuras

- [x] Sistema de pagamento integrado com Stripe
- [ ] Histórico de pedidos do usuário
- [ ] Sistema de avaliações e comentários de produtos
- [ ] Wishlist (lista de desejos)
- [ ] Busca avançada de produtos com filtros
- [ ] Sistema de cupons de desconto
- [ ] Notificações por email (confirmação de pedido, envio)
- [ ] Painel administrativo para gestão de produtos
- [ ] Sistema de rastreamento de pedidos
- [ ] Integração com APIs de frete (Correios, transportadoras)
- [ ] Recomendações personalizadas de produtos
- [ ] Chat de suporte ao cliente

### Melhorias Técnicas

- [ ] Testes unitários com Vitest
- [ ] Testes E2E com Playwright
- [ ] CI/CD com GitHub Actions
- [ ] Monitoramento de erros (Sentry)
- [ ] Analytics (Google Analytics/Plausible)
- [ ] Otimização de imagens com CDN
- [ ] Cache de dados com Redis
- [ ] Documentação de API com Swagger

## 👨‍💻 Autor

**Enderson Marín**

- 🎨 Portfolio: [portfolio-ecmm.vercel.app](https://portfolio-ecmm.vercel.app/)
- 📧 Email: marinenderson1@gmail.com
- 💼 LinkedIn: [enderson-millan](https://www.linkedin.com/in/enderson-millan)
- 🐱 GitHub: [@ENDERSON-MARIN](https://github.com/ENDERSON-MARIN)
- 🎥 YouTube: [Canal de Demonstrações](https://www.youtube.com/channel/UCDIIj706aFneZlfVJucVkhA)

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

## ⭐ Agradecimentos

Obrigado por conferir este projeto! Se você achou útil, considere dar uma estrela ⭐ no repositório.

### Tecnologias e Bibliotecas

Agradecimentos especiais aos criadores e mantenedores das tecnologias utilizadas:

- [Vercel](https://vercel.com) - Next.js e hospedagem
- [Drizzle Team](https://orm.drizzle.team) - Drizzle ORM
- [Better Auth](https://www.better-auth.com) - Sistema de autenticação
- [Stripe](https://stripe.com) - Gateway de pagamento
- [shadcn](https://ui.shadcn.com) - Componentes UI
- [TanStack](https://tanstack.com) - React Query
- [Radix UI](https://www.radix-ui.com) - Primitivos acessíveis

---

Desenvolvido com 💙 por [Enderson Marín](https://github.com/ENDERSON-MARIN)
