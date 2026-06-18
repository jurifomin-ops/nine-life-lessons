# Девять фундаментальных уроков жизни

Представительский сайт образовательного проекта «Девять фундаментальных уроков жизни» — программы развития человеческого потенциала для подростков.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — запустить API сервер (порт 5000)
- `pnpm run typecheck` — полная проверка типов
- `pnpm run build` — typecheck + сборка всех пакетов
- `pnpm --filter @workspace/api-spec run codegen` — регенерация API хуков и Zod схем из OpenAPI spec
- `pnpm --filter @workspace/db run push` — применить изменения схемы БД (только dev)
- Required env: `DATABASE_URL` — строка подключения к Postgres

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Framer Motion, Tailwind CSS, shadcn/ui
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/nine-lessons/` — фронтенд React (основной сайт)
- `artifacts/nine-lessons/src/components/sections/` — секции лендинга
- `artifacts/api-server/src/routes/applications.ts` — API для заявок
- `lib/db/src/schema/applications.ts` — схема таблицы заявок
- `lib/api-spec/openapi.yaml` — OpenAPI контракт (источник правды)

## Architecture decisions

- Presentation-first: сайт-лендинг без авторизации, только публичный API для заявок
- Форма заявок сохраняет данные в PostgreSQL через `/api/applications`
- Цветовая палитра: тёмно-синий (#0D1B3E), золото (#C9A84C), бирюза (#2EC4B6) задана в CSS custom properties в `index.css`
- Типографика: Playfair Display (заголовки) + Inter (тело) — загружаются из Google Fonts

## Product

Одностраничный сайт с якорной навигацией: герой → почему сейчас → 9 уроков (интерактивные карточки) → как работает программа → первый модуль → что создано → безопасность и этика → кого приглашаем → дорожная карта → об авторе → скачать материалы → FAQ → финальный призыв → контактная форма.

## User preferences

- Все тексты на русском языке
- Без эмодзи в UI
- Стиль: серьёзный образовательный проект, не инфобизнес-лендинг
- Тёмно-синий фон, золото, бирюза

## Gotchas

- `ApplicationInputRole` — TypeScript type, not runtime enum. Use string literals ("expert", "school", etc.) in runtime code and `z.enum([...])` in Zod schemas
- After OpenAPI spec changes, always run codegen before using updated types
- Import hooks from `@workspace/api-client-react`, never from relative paths or deep subpaths

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
