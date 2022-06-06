module.exports = {
    // mode: 'jit',
    // content: [
    //     './**/*.{js,jsx,ts,tsx,vue}',
    // ],
    plugins: [
        require('@tailwindcss/typography'),
    ],
    theme: {
      extend: {
        keyframes: {
          slidein: {
            '0%': { transform: 'translate-y(-50vh)' },
            '100%': { transform: 'translate-y(0vh)' }
          }
        },
        animation: {
          slidein: 'slidein 1s ease-in-out infinite'
        }
      }
    }
}
