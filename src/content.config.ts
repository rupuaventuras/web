
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Colección de expediciones de montaña
const expediciones = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/expediciones",
  }),

  schema: ({ image }) =>
    z.object({
      // Nombre de la expedición
      title: z.string().min(1),

      // Descripción breve
      description: z.string().min(1),

      // Precio en pesos argentinos (ARS)
      price: z.number().nonnegative(),

      // Duración estimada
      duration: z.string().min(1),

      // Nivel de dificultad
      difficulty: z.enum([
        "baja",
        "media",
        "alta",
      ]),

      // Imagen principal de la expedición
      image: image(),

      // Servicios incluidos
      includes: z.array(z.string()),

      // Servicios no incluidos
      notIncludes: z.array(z.string()),

      // Mensaje para el botón de WhatsApp
      whatsappMessage: z.string().min(1),
    }),
});

// Exportar las colecciones
export const collections = {
  expediciones,
};
