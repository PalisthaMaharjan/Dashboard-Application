# Dashboard-Application

### Overview
A responsive dashboard built with React, Redux Toolkit, TypeScript, Vite, and TailwindCSS. It features a collapsible sidebar, routing, an API-driven data table with search, filters, pagination, and robust error handling.

### Tech Stack
- React 19 + TypeScript + Vite
- Redux Toolkit + React Redux
- TailwindCSS 3
- React Router


### Features
- Sidebar layout with mobile overlay and desktop collapse/expand
- Pages: `Home`, `Data`
- Data table: fetches users from `https://jsonplaceholder.typicode.com/users`
- Search (name/email/role), status/role filters, pagination
- Loading and error states with retry
- Type-safe Redux slices for users/filters/pagination

### Project Structure
```
src/
├── components/
│   └── Layout.tsx
├── pages/
│   ├── Home.tsx
│   └── Data.tsx
├── store/
│   ├── hooks.ts
│   ├── index.ts
│   └── slices/
│       ├── usersSlice.ts
│       ├── filterSlice.ts
│       └── paginationSlice.ts
├── App.tsx
├── main.tsx
└── index.css
```

### Prerequisites
- Node.js 18+ (LTS recommended)
- pnpm or npm

### Setup and Run
```bash
# install deps
pnpm install
# or
npm install

# start dev server
pnpm dev
# or
npm run dev
```
Open `http://localhost:5173`.

### Build and Preview
```bash
# production build
pnpm build
# or
npm run build



### Scripts
- `dev`: start Vite dev server
- `build`: type-check and build
- `preview`: preview production build
- `lint`: run ESLint
