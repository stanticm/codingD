/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
		},

		extend: {
			colors: {
				primary: '#50DE4D',
				secondary: '#173317',
				bg: '#434343',
				text: '#1D1818',
			},
			fontFamily: {
				customFont: ['Fira Code', 'monospace'],
			},
			backgroundImage: {
				heroImg: "url('/assets/banner.png')",
				screenImg: "url('/assets/screen.png')",
			},
		},
	},
	plugins: [],
};
