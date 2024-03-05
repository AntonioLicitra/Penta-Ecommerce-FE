/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
		  colors: {
			'custom-blue': '#007bff', // Esempio di colore esadecimale
			'custom-green': 'green', // Esempio di nome di colore CSS
			'custom-gradient': ['#ff0000', '#00ff00'], // Esempio di array di gradienti
			'grigio':'#eaeae7'
		  },
		  fontSize: {
			'grande': '40px',
			'medio':'24px',
			'piccolo':'18px',
			'grandeMobile':'32px',
			'medioMobile':'20px',
			'piccoloMobile':'16px',
			
		  },
		},
	  },
	plugins: [],
};
