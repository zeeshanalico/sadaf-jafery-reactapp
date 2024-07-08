/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#f4afab',
        'secondary': '#f4cbc6',
        'tertiary': '#f7edf0',
        'btn': '#02614B',
        'golden': '#BF8A46',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      lineHeight: {
        '70': '70px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        bounceUpIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50%)',
          },
          '60%': {
            opacity: '1',
            transform: 'translateY(-10%)',
          },
          '80%': {
            transform: 'translateY(5%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slide: {
          '0%, 25%': { transform: 'translateX(0)' },         // Image 1 stays for 10 seconds
          '33.33%, 58.33%': { transform: 'translateX(-100%)' }, // Image 2 stays for 10 seconds
          '66.66%, 91.66%': { transform: 'translateX(-200%)' }, // Image 3 stays for 10 seconds
          '100%': { transform: 'translateX(-300%)' },         // Loop back to the first image
        },
      },
      animation: {
        scroll: 'scroll 50s linear infinite',
        slide: 'slide 30s linear infinite', // 30s for 3 images (10s each)
        bounceUpIn: 'bounceUpIn 1s ease-out forwards',
        flip: 'flip 1s ease-in-out forwards',

      },
    },
  },
  plugins: [],
}