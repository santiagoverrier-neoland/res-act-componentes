// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // Hace que le ponga los estilos responsivos automáticamente a las imágenes
    image: {
        responsiveStyles: true,
    },
});
