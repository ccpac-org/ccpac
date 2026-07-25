/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				spaceDark: '#030712',
				spaceCard: '#0b1329',
				neonCyan: '#06b6d4',
				neonBlue: '#3b82f6',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
