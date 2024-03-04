/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
		  colors: {
			'custom-blue': '#007bff', // Esempio di colore esadecimale
			'custom-green': 'green', // Esempio di nome di colore CSS
			'custom-gradient': ['#ff0000', '#00ff00'], // Esempio di array di gradienti
		  },
		  fontSize: {
			'enorme': '200px'
		  },
		},
	  },
	plugins: [],
};
