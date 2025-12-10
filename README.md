# Lays Sonego - Catálogo e Spa

Site institucional e catálogo de serviços para Lays Sonego, especialista em Estética Integrativa e Terapias Holísticas.

## 📋 Sobre o Projeto

Este projeto é um site moderno e elegante desenvolvido para apresentar os serviços de estética e terapias holísticas oferecidos por Lays Sonego. O site apresenta uma interface sofisticada com suporte a modo claro/escuro, navegação intuitiva e integração com WhatsApp para agendamentos.

## ✨ Características

- 🎨 Design moderno e responsivo com suporte a tema claro/escuro
- 📱 Totalmente responsivo para dispositivos móveis, tablets e desktops
- 🚀 Performance otimizada com Vite e React
- 💬 Integração direta com WhatsApp para agendamentos
- 🖼️ Galeria de imagens otimizada
- ♿ Acessibilidade e SEO otimizados

## 🛠️ Tecnologias Utilizadas

- **React 19.2.1** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.8.2** - Superset JavaScript com tipagem estática
- **Vite 6.2.0** - Build tool e dev server de alta performance
- **Lucide React 0.556.0** - Biblioteca de ícones moderna
- **Tailwind CSS** - Framework CSS utility-first (via configuração)

## 📦 Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositório>
cd lays-sonego
```

2. Instale as dependências:

```bash
npm install
```

## 🚀 Como Executar

### Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

### Build para Produção

Gere a build otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Preview da Build

Visualize a build de produção localmente:

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
lays-sonego/
├── public/              # Arquivos estáticos públicos
│   └── favicon.ico
├── src/
│   ├── assets/         # Imagens e recursos estáticos
│   │   └── images/
│   ├── components/     # Componentes React reutilizáveis
│   │   ├── BrandLogo.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── PackageCard.tsx
│   │   ├── SectionHeader.tsx
│   │   └── ServiceCard.tsx
│   ├── App.tsx         # Componente principal da aplicação
│   ├── constants.ts    # Constantes e dados dos serviços
│   ├── index.tsx       # Ponto de entrada da aplicação
│   ├── types.ts        # Definições de tipos TypeScript
│   └── utils.ts        # Funções utilitárias
├── index.html          # HTML principal
├── package.json        # Dependências e scripts
├── tsconfig.json       # Configuração TypeScript
└── vite.config.ts      # Configuração Vite
```

## 🎯 Funcionalidades Principais

### Seções do Site

1. **Hero** - Apresentação inicial com imagem e call-to-action
2. **Essenciais** - Serviços individuais de estética
3. **Alquimia Terapêutica** - Serviços terapêuticos e holísticos
4. **Face & Glow** - Tratamentos faciais especializados
5. **Corporais** - Pacotes de tratamentos corporais
6. **Exclusivos** - Pacotes especiais para ocasiões únicas
7. **Sobre Mim** - Apresentação pessoal e profissional

### Integração WhatsApp

O site possui integração completa com WhatsApp, permitindo que os visitantes:

- Agendem serviços diretamente
- Solicitem informações sobre pacotes
- Entrem em contato de forma rápida e direta

## 🎨 Personalização

### Modificar Serviços

Edite o arquivo `src/constants.ts` para adicionar, remover ou modificar serviços e pacotes.

### Alterar Imagens

Substitua as imagens na pasta `src/assets/images/` e atualize as referências em `src/constants.ts`.

### Configurar WhatsApp

O número do WhatsApp pode ser alterado no arquivo `src/utils.ts` na constante `WHATSAPP_NUMBER`.

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção localmente

## 🌐 Deploy

Após executar `npm run build`, os arquivos na pasta `dist/` podem ser deployados em qualquer serviço de hospedagem estática, como:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Qualquer servidor web estático

## 📄 Licença

Este projeto é privado e de uso exclusivo para Lays Sonego.

## 👤 Contato

Para mais informações sobre os serviços, visite o site ou entre em contato via WhatsApp através do site.

---

Desenvolvido com ❤️ para Lays Sonego
