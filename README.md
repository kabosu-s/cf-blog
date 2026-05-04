# My Blog

Cloudflareのサービスをつかって、ブログを作ってみる。

## 🚀 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library**: [React 19 (Server Components)](https://react.dev/)
- **Runtime/Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) via [OpenNext](https://opennext.js.org/)
- **Database**: [Cloudflare D1](https://developers.cloudflare.com/d1/) (SQLite on the Edge)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: Global CSS with Design Tokens (CSS Variables)

## 🎨 Design Philosophy

As outlined in `DESIGN.md`, this project adheres to:
- **Precision**: Consistent spacing and typography using Noto Sans JP.
- **Visual Polish**: Peacock Blue (`#009aa3`) accents with interactive feedback.
- **Minimalism**: Clean layout, fast loading, and focus on content.

## 🛠️ Development

### Prerequisites
- Node.js (Latest LTS recommended)
- Cloudflare Wrangler CLI

### Setup & Dev
```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

### Preview & Deploy
```bash
# Preview locally on Cloudflare runtime
npm run preview

# Deploy to Cloudflare
npm run deploy
```

## 📂 Architecture

- `src/app/`: Page components and routing.
- `src/components/ui/`: Reusable, atomic UI components (Button, Card, etc.).
- `src/server/`: Edge-compatible logic and Cloudflare D1 interactions.
- `src/domain/`: Domain models and type definitions.
