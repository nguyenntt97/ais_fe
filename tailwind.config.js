const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    ripple: theme => ({
      colors: theme('colors'),
      darken: 0.1
    }),
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      gray: colors.gray,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
      body: ['Roboto', 'sans-serif'],
    },
    backgroundImage: {
      'round-table': "url('https://pbs.twimg.com/media/DBIHmxZUAAQivT4?format=jpg&name=large')",
      'party': "url('https://img.upanh.tv/2022/05/05/DCvgtbJUAAAvZFc_auto_x2-min05a068b6047436f4.jpg')",
      'group': "url('https://pbs.twimg.com/media/DiYEjpVUEAcUH8f?format=jpg&name=large')",
      'adventure': "url('https://pbs.twimg.com/media/D_w11WWUwAAi79-?format=jpg&name=large')"
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin'),
    require('tailwindcss-ripple')()
  ]
}