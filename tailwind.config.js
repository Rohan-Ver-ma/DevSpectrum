/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},
	fontFamily: {
  			inter: ['Inter', 'serif'],
  		},	
		  animation: {
			pulse: 'pulse 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
		  }									
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
