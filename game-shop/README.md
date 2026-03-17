# Game Stop Shop

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-3-319795?logo=chakraui)
![License](https://img.shields.io/badge/license-MIT-green)

Game Stop Shop is a modern game discovery app built with React, TypeScript, and Chakra UI, powered by the RAWG API.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Routing](#routing)
- [Data Source](#data-source)

## Overview

This project focuses on a layered, feature-first frontend architecture where pages orchestrate data flow and feature components handle presentation and interaction.

## Features

- Infinite game browsing with loading states
- Debounced search
- Genre filtering (desktop sidebar + mobile select)
- Sort/order controls
- Game detail page with:
  - Hero section
  - Genre and release metadata
  - Platform icon rendering from API platform data
  - Developer and description sections
- Scroll restore and return-to-top behavior

## Tech Stack

| Category      | Tools          |
| ------------- | -------------- |
| Framework     | React 19       |
| Language      | TypeScript     |
| Build Tool    | Vite           |
| UI            | Chakra UI      |
| Data Fetching | TanStack Query |
| Routing       | React Router   |
| State         | Zustand        |
| HTTP Client   | Axios          |
| Icons         | React Icons    |

## Project Architecture

Feature-first, layered structure:

```text
src/
   api-clients/
      hooks/               # shared API hooks
      rawg-api-client.ts   # API client + DTO mapping
   components/            # reusable cross-feature UI
   features/
      game-grid/
         api/
         hooks/
         components/
      game-info/
         api/
         hooks/
         components/
      genre-filter/
         api/
         components/
         store/
   layout/                # app layouts
   pages/                 # route-level orchestrators
   routes/                # router config
```

Architecture guideline used in this project:

- `pages` handle orchestration (loading/error/routing states)
- `features/*/api` and shared `api-clients/hooks` handle server access
- `features/*/hooks` contain feature logic
- `features/*/components` contain feature UI
- shared components live in `components`

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- RAWG API key

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

## Environment Variables

Create a `.env` file in the project root:

```bash
VITE_RAWG_API_KEY=your_rawg_api_key_here
```

Without this key, game and genre requests will fail.

## Available Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start Vite dev server               |
| `npm run build`   | Type-check and build for production |
| `npm run lint`    | Run ESLint                          |
| `npm run preview` | Preview production build            |

## Routing

Current routes:

- `/` -> Game grid page
- `/game/:id` -> Game detail page

## Data Source

- API: RAWG Video Games Database
- Client integration: `src/api-clients/rawg-api-client.ts`
- Query hooks: `src/api-clients/hooks`
