/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#BF4408',
          2: '#E65103',
        },
        accent: {
          1: '#FFFFFF',
          2: '#F5D1B0',
        },
        secondary: {
          1: '#FFFFFF',
          2: '#FBF1EB',
        },
        neutral: {
          dark: '#191818',
          light: '#FBFAF9',
        }
      },
      fontFamily: {
        'heading': ['STIX Two Text', 'serif'],
        'body': ['Noto Sans', 'sans-serif'],
      },
      spacing: {
        'half': '8px',
        'unit': '16px',
        'oneandhalfunits': '24px',
        'twounits': '32px',
        'threeunits': '48px',
        'fourunits': '64px',
        'fiveunits': '80px',
        'sixunits': '96px',
      },
      borderRadius: {
        'button': '24px',
        'input': '24px',
        'card': '8px',
        'image': '8px',
      }
    },
  },
  plugins: [],
}