# Luminous Moments - Photography Portfolio

A modern, responsive photography portfolio website built with Next.js 14, showcasing professional photography services across Sri Lanka. The platform features a beautiful UI with optimized image loading, smooth animations, and a seamless user experience.

![Luminous Moments](public/images/hero-bg1.jpg)

## 🌟 Features

- **Modern Design**: Clean, elegant UI with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Optimized Performance**: Fast loading times with optimized images and lazy loading
- **Service Showcase**: Dedicated pages for different photography services
- **Portfolio Gallery**: Beautiful image galleries with hover effects and tags
- **Contact System**: Easy-to-use contact form for client inquiries
- **SEO Optimized**: Built-in metadata and SEO best practices

## 📸 Photography Services

- Wedding Photography
- Graduation Photography
- Birthday Celebrations
- Engagement Sessions
- Corporate Events
- Cultural Ceremonies

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Image Optimization**: Next.js Image Component
- **Type Safety**: TypeScript

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/luminous-moments.git
cd luminous-moments
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
luminous-moments/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # Reusable components
│   ├── constants/          # Constants and configuration
│   ├── lib/                # Utility functions
│   └── styles/             # Global styles
├── public/                 # Static assets
│   └── images/            # Image assets
└── ...
```

## 🎨 Customization

### Adding New Services
1. Update `src/constants/services-data.ts`
2. Add corresponding images to `public/images/`
3. Create new service page in `src/app/(main)/services/[slug]`

### Modifying Portfolio
1. Update `src/constants/portfolio-data.ts`
2. Add new images to `public/images/`
3. Update gallery components as needed

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop screens
- Large displays

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=your-site-url
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For any inquiries or support, please contact:
- Email: your-email@example.com
- Website: [luminousmoments.com](https://luminousmoments.com)

---

Built with ❤️ by [Your Name]
