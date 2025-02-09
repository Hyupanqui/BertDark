/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#0e0e11',
				'y': '#18181b',
				'mauve': {
					'50': '#fcf5ff',
					'100': '#f8e8ff',
					'200': '#f1d5ff',
					'300': '#e7b5fe',
					'400': '#d884fc',
					'500': '#c855f7',
					'600': '#b733ea',
					'700': '#a022ce',
					'800': '#8621a8',
					'900': '#6d1c87',
					'950': '#4d0764',
				},
			},
		},
		keyframes: {
			fadeDown: {
				'0%': { opacity: 0, transform: 'translateY(-5px)' },
				'100%': { opacity: 1, transform: 'translateY(0)' },
			},
			flicker: {
				'0%': { opacity: 0.5, textShadow: '0 0 5px rgba(16, 185, 129, 1), 0 0 10px rgba(16, 185, 129, 1)' },
				'20%': { opacity: 1, textShadow: '0 0 10px rgba(16, 185, 129, 1), 0 0 20px rgba(16, 185, 129, 1)' },
				'50%': { opacity: 0.7, textShadow: '0 0 5px rgba(16, 185, 129, 1), 0 0 10px rgba(16, 185, 129, 1)' },
				'80%': { opacity: 1, textShadow: '0 0 10px rgba(16, 185, 129, 1), 0 0 20px rgba(16, 185, 129, 1)' },
				'100%': { opacity: 0.5, textShadow: '0 0 5px rgba(16, 185, 129, 1), 0 0 10px rgba(16, 185, 129, 1)' },
			},
		},
		animation: {
			fadeDown: 'fadeDown 0.5s ease-out',
			flicker: 'flicker 2s ease-in infinite',
		},
	},
	plugins: [],
}
