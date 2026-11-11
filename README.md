# Kitchen Recipes Application

A React application for managing kitchen recipes with Firebase integration, built with TypeScript, Tailwind CSS, and Vite.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture & Design Decisions](#architecture--design-decisions)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Firebase Setup](#firebase-setup)
- [Available Scripts](#available-scripts)
- [How It Works](#how-it-works)
- [Code Guidelines](#code-guidelines)

## Features

- Create, read, and update recipes
- Real-time synchronization with Firebase Firestore
- Search recipes by name
- Filter recipes by cooked status
- Rate recipes with a 5-star system
- Mark recipes as "cooked before"
- Responsive design with Tailwind CSS
- Toast notifications for user feedback
- Type-safe with TypeScript

## Tech Stack

### Core

- **React 19** - Latest React version with concurrent features
- **TypeScript 5.9** - Type-safe development
- **Vite 7** - Fast build tool and dev server

### UI & Styling

- **Tailwind CSS 4** - Utility-first CSS framework
- **React Toastify** - Toast notifications

### Backend & Database

- **Firebase 12** - Backend as a Service
- **Firestore** - NoSQL cloud database

### Routing

- **React Router DOM 7** - Client-side routing

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## Architecture & Design Decisions

### Component Architecture

The project follows the **Atomic Design Pattern**:

```
components/
├── atoms/          # Basic building blocks (Button, Switch, Icons)
├── molecules/      # Simple component groups (SearchBar, FilterSelector)
└── organisms/      # Complex components (RecipeForm, RecipeList, RecipeAside)
```

**Why Atomic Design?**

- Clear component hierarchy
- Easy to locate and maintain components
- Promotes component reusability
- Scales well as the project grows

### State Management

**Custom Hooks Strategy** - No external state management library needed.

Two specialized hooks were created:

1. **`useRecipeList`** - Manages the recipe list page
   - Fetches recipes from Firebase
   - Handles search and filtering
   - Manages aside visibility for recipe details

2. **`useRecipeForm`** - Manages recipe forms (create/edit/view)
   - Handles form modes (NEW, DETAIL, EDIT)
   - Creates and updates recipes
   - Manages form state and validation

**Why Custom Hooks?**

- Separates business logic from UI components
- Easier to test and maintain
- No overhead from external state management libraries
- Better performance with focused re-renders

### Firebase Integration

**Service Layer Pattern** - All Firebase operations are abstracted in `recipeService.ts`

```typescript
services/
└── recipeService.ts  # CRUD operations for recipes
```

**Why Service Layer?**

- Decouples Firebase from components
- Easy to mock for testing
- Single source of truth for data operations
- Easy to switch backend if needed

### Type Safety

**Strict TypeScript Configuration**

- All components and functions are fully typed
- Type definitions in `types/recipe.ts`
- No `any` types allowed (enforced by ESLint)

### Styling Approach

**Tailwind CSS with Inline Classes**

- Rapid development
- No CSS file bloat
- Consistent design system
- Easy to customize

### Error Handling

**Centralized Toast Notifications**

- All errors and success messages use `toast-notification.ts` utility
- Consistent user feedback
- Clean error handling without try-catch blocks in components

## Project Structure

```
kitchen-recipes/
├── src/
│   ├── assets/              # Static assets (images, icons)
│   │   └── icons/           # SVG icons
│   ├── components/          # React components (Atomic Design)
│   │   ├── atoms/           # Basic UI elements
│   │   ├── molecules/       # Composite components
│   │   └── organisms/       # Complex features
│   ├── config/              # Configuration files
│   │   └── firebase.ts      # Firebase initialization
│   ├── data/                # Static data
│   │   └── recipes.ts       # Initial recipes for migration
│   ├── hooks/               # Custom React hooks
│   │   ├── useRecipeForm.ts # Form management hook
│   │   └── useRecipeList.ts # List management hook
│   ├── pages/               # Page components
│   │   └── Home/            # Home page
│   ├── router/              # Routing configuration
│   │   └── AppRouter.tsx    # Router setup
│   ├── services/            # External services
│   │   └── recipeService.ts # Firebase CRUD operations
│   ├── types/               # TypeScript type definitions
│   │   └── recipe.ts        # Recipe-related types
│   ├── utils/               # Utility functions
│   │   └── toast-notification.ts # Toast helpers
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── scripts/                 # Utility scripts
│   └── migrate-data.ts      # Migrate initial data to Firebase
├── public/                  # Public static files
├── .gitignore
├── eslint.config.js         # ESLint configuration
├── package.json             # Dependencies and scripts
├── tailwind.config.cjs      # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd kitchen-recipes
```

2. Install dependencies:

```bash
npm install
```

3. Configure Firebase (see [Firebase Setup](#firebase-setup))

4. Start the development server:

```bash
npm run dev
```

5. Open your browser at `http://localhost:5173`

## Firebase Setup

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database

### 2. Configure Firestore Rules

In Firebase Console, go to Firestore Database > Rules.

For local development, allow reads and writes so you can create and edit recipes:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /recipes/{document} {
      allow read, write: if true;
    }
  }
}
```

For a public demo, switch to read-only so nobody can modify or delete your data:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /recipes/{document} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

> With read-only rules, creating, editing, rating or marking recipes as cooked will show an error in the app. Run `npm run migrate` before switching to read-only if your database is empty.

### 3. Get Firebase Configuration

1. Go to Project Settings > Your apps
2. Select Web app
3. Copy the configuration

### 4. Update Configuration

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

```bash
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

The `.env` file is ignored by git, so your credentials are never committed.

### 5. Migrate Initial Data (Optional)

Populate Firestore with sample recipes:

```bash
npm run migrate
```

## Available Scripts

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Code Quality

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### Database

```bash
npm run migrate      # Migrate initial recipes to Firebase
```

## How It Works

### Data Flow

```
User Interaction
      ↓
  Components (UI)
      ↓
  Custom Hooks (Business Logic)
      ↓
  Service Layer (Firebase Abstraction)
      ↓
  Firebase Firestore (Database)
```

### Creating a Recipe

1. User clicks "Add Recipe" button
2. `useRecipeList` hook sets `asideVisible` to true
3. `RecipeAside` component renders with `useRecipeForm` in NEW mode
4. User fills form and clicks "Create"
5. `handleSave` in `useRecipeForm` calls `createRecipeService`
6. `recipeService` adds document to Firestore
7. Toast notification confirms success
8. Aside closes and list refreshes automatically

### Editing a Recipe

1. User clicks on a recipe row
2. `useRecipeList` sets `currentRecipeId` and shows aside
3. `RecipeAside` renders in DETAIL mode
4. User clicks "Edit" button
5. Mode changes to EDIT
6. User modifies data and clicks "Update"
7. `handleSave` calls `updateRecipeService` with recipe ID
8. Firestore updates the document
9. Toast confirms success
10. Aside closes and list refreshes

### Search & Filter

- **Search**: Filters recipes by title (case-insensitive)
- **Filter**: Shows all recipes, only cooked, or only not cooked
- Both filters work together using `useMemo` for performance

### Real-time Updates

Although the app doesn't use real-time listeners (due to complexity), it refreshes the list:

- After creating a recipe
- After updating a recipe
- When closing the aside panel

## Code Guidelines

### TypeScript

- All components are typed with `React.FC<Props>`
- No `any` types allowed
- Explicit return types for functions
- Use type inference when possible

### React Patterns

- Functional components only
- Custom hooks for business logic
- Props destructuring
- Meaningful component and variable names

### Styling

- Use Tailwind utility classes
- Follow mobile-first approach
- Keep consistent spacing and sizing
- Use Tailwind's color palette

### Git Workflow

- Write clear commit messages
- One feature per commit
- Keep commits small and focused
- Use conventional commits format

### File Naming

- Components: PascalCase (e.g., `RecipeForm.tsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useRecipeList.ts`)
- Utils: camelCase (e.g., `toast-notification.ts`)
- Types: camelCase (e.g., `recipe.ts`)

## Performance Considerations

### Optimizations Implemented

1. **useMemo** for filtered recipes - Prevents unnecessary recalculations
2. **useCallback** for stable function references - Prevents child re-renders
3. **Component lazy loading** - React Router handles code splitting
4. **Optimized re-renders** - State is colocated where needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author

Eliana Suancha Guzman - [@elianisdev](https://github.com/elianisdev)
