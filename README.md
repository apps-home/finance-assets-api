# Finance Assets API - Monorepo

Este é um monorepo gerenciado com pnpm workspaces contendo:

- **packages/api**: API NestJS principal
- **packages/lib-db**: Biblioteca compartilhada do banco de dados (submódulo Git)

## Estrutura

```
finance-assets-api/
│── apps/service          # API NestJS
├── packages/
│   └── lib-db/       # Biblioteca do banco de dados (submódulo)
├── package.json      # Configuração do monorepo
└── pnpm-workspace.yaml
```

## Setup

### Instalar dependências

```bash
pnpm install
```

### Inicializar submódulo Git

Se o submódulo ainda não foi clonado:

```bash
git submodule update --init --recursive
```

## Scripts

### Desenvolvimento

```bash
# Rodar API em modo watch
pnpm dev

# Rodar apenas a API
pnpm --filter api dev
```

### Build

```bash
# Build da API
pnpm build

# Build apenas da API
pnpm --filter api build
```

### Produção

```bash
# Iniciar API em produção
pnpm start:prod
```

### Linting e Formatação

```bash
# Lint
pnpm lint

# Format
pnpm format

# Check (lint + format)
pnpm check
```

## Trabalhando com o submódulo lib-db

O `lib-db` é um submódulo Git. Para atualizar:

```bash
# Atualizar submódulo
git submodule update --remote packages/lib-db

# Ou entrar no diretório e fazer pull
cd packages/lib-db
git pull origin main
cd ../..
```

## Desenvolvimento

A API está configurada para usar o `@lib/db` como dependência do workspace. Certifique-se de que o `lib-db` está buildado antes de usar:

```bash
# Build do lib-db
pnpm --filter @lib/db build

# Gerar Prisma Client do lib-db
pnpm --filter @lib/db generate
```
