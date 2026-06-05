import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'rgb(var(--color-bg-primary) / <alpha-value>)',
        'bg-card': 'rgb(var(--color-bg-card) / <alpha-value>)',
        'bg-card-hover': 'rgb(var(--color-bg-card-hover) / <alpha-value>)',
        'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        'accent': 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-hover': 'rgb(var(--color-accent-hover) / <alpha-value>)',
        'border': 'rgb(var(--color-border) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section': '7.5rem',
        'card-gap': '2rem',
        'page-x': '5rem',
      },
      letterSpacing: {
        'wide': '0.05em',
      },
    },
  },
  plugins: [],
} satisfies Config