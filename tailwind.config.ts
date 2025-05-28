import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('../../public/abstract.jpg')",
        stars: "url('../../public/stars.png')",
        experience: 'url("../../public/abstract2.png")',
        'gradient-black':
          'linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
        'gradient-radial':
          'radial-gradient(circle at bottom right, #7637db 0%, transparent 75%, transparent 100%)',
      },
    },
  },
  plugins: [],
}
export default config
