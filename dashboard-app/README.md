# Dashboard Application

A modern, responsive dashboard application built with React, TypeScript, and TailwindCSS.

## Features

- **Responsive Layout**: Mobile-first design that works on all screen sizes
- **Sidebar Navigation**: Collapsible sidebar with navigation links
- **Dynamic Content**: Content area that updates based on navigation
- **Data Table**: Interactive table with search, filtering, and pagination
- **Modern UI**: Clean, professional design using TailwindCSS

## Project Structure

```
src/
├── components/
│   └── Layout.tsx          # Main layout component with sidebar
├── pages/
│   ├── Home.tsx            # Home page with stats and quick actions
│   └── Data.tsx            # Data management page with table
├── App.tsx                 # Main app component with routing
└── index.css               # Global styles and TailwindCSS imports
```

## Components

### Layout Component
- Responsive sidebar navigation
- Mobile-friendly hamburger menu
- Active route highlighting
- Clean, modern design

### Home Page
- Welcome header
- Statistics cards (Total Records, Active Users, Last Updated, Success Rate)
- Quick action buttons
- Responsive grid layout

### Data Page
- Data management header
- Search and filter functionality
- Interactive data table with:
  - Sortable columns
  - Status badges
  - Action buttons (Edit/Delete)
  - Pagination
- Sample data for demonstration

## Technologies Used

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Vite** - Fast build tool and dev server

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

2. Start development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Responsive Design

The application is fully responsive with:
- **Mobile**: Collapsible sidebar with overlay
- **Tablet**: Sidebar becomes fixed position
- **Desktop**: Full sidebar always visible
- **All sizes**: Adaptive content layout

## Customization

- Modify navigation items in `Layout.tsx`
- Add new pages in the `pages/` directory
- Update routing in `App.tsx`
- Customize styles using TailwindCSS classes
- Add new data fields to the table in `Data.tsx`
