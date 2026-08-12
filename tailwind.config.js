/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'DM Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        pastel: {
          bg: '#F7F3ED',        // Beige pastel cálido (Fondo principal)
          card: '#EFE7DD',      // Nude / Beige crema (Tarjetas y contenedores)
          accent: '#B88A75',    // Marrón arcilla pastel (Botones / CTAs)
          accentHover: '#A37763',// Marrón arcilla para Hover
          border: '#CBB5A1',    // Marrón café con leche pastel (Bordes suaves)
          text: '#4A3E3D',      // Marrón mocha suave (Texto principal)
          muted: '#8C7D75',     // Marrón taupe (Subtítulos y textos secundarios)
          sage: '#C2C8B8',      // Verde salvia pastel (Badges, detalles y destaca)
        }
      }
    }
  },
  plugins: [],
}
