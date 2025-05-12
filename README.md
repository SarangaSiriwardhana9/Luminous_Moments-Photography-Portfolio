# Next.js Modern Starter Template

![Next.js 15](https://img.shields.io/badge/next.js-15.3.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/typescript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/tailwind-v4-38bdf8?style=for-the-badge&logo=tailwindcss)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-black?style=for-the-badge)

A modern, lightweight starter template for Next.js projects with the latest tools and best practices.

## ✨ Features

- **Next.js 15** - The React framework with App Router and Server Components
- **TypeScript** - Type safety and improved developer experience
- **Tailwind CSS v4** - The latest version with improved performance and features
- **shadcn UI** - Beautifully designed components built with Radix UI and Tailwind
- **Framer Motion** - Powerful animation library for React
- **Lucide React** - Beautiful, consistent icon set
- **Geist Fonts** - Clean, modern typography
- **ESLint** - Code linting for best practices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (20+ recommended)
- npm or pnpm or yarn or bun

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/next-tailwind-shadcn-starter.git my-project
   cd my-project
   ```

2. Install dependencies:

   ```bash
   npm install --legacy-peer-deps
   ```

   > Note: The `--legacy-peer-deps` flag is currently needed for React 19 compatibility.

3. Start the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
next-tailwind-shadcn-starter/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles with Tailwind import
│   │   ├── layout.tsx        # Root layout with fonts and metadata
│   │   └── page.tsx          # Home page
│   ├── components/
│   │   ├── ui/               # shadcn UI components
│   │   └── ...               # Custom components
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/
│   └── ...                   # Static assets
├── .eslintrc.json            # ESLint configuration
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies and scripts
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## 🧩 Adding Components

This template uses `shadcn/ui` for components. To add a new component:

```bash
npx shadcn@latest add [component-name]
```

For example:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

## 🔧 Customization

### Tailwind CSS

The template uses Tailwind CSS v4. Edit the theme in your `globals.css` file:

```css
@theme {
  --color-primary: rgb(14 165 233);
  --color-secondary: rgb(30 41 59);
  /* Add your custom colors, sizes, etc. */
}
```

### Fonts

The template uses the **Geist** font family. You can change the fonts in `layout.tsx`.

## 🏗️ Building for Production

```bash
# Build the app
npm run build

# Start the production server
npm start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

Made with ❤️ by [Your Name]

Feel free to customize this README with your personal information, additional features you add to the template, or any specific usage instructions that might be relevant for your use case.
