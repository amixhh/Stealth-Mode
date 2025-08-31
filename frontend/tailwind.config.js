/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF7F4',
        foreground: '#000000',
        primary: '#000000',
        'primary-foreground': '#FFFFFF',
        secondary: '#FFFFFF',
        'secondary-foreground': '#000000',
        muted: '#F5F5F5',
        'muted-foreground': '#666666',
        accent: '#F5F5F5',
        'accent-foreground': '#000000',
        destructive: '#EF4444',
        'destructive-foreground': '#FFFFFF',
        border: '#E5E5E5',
        input: '#E5E5E5',
        ring: '#000000',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
