# Water Saver / Gotita · Landing

Landing page de **Gotita** (español) / **Water Saver** (inglés), la app Android de IdmaSoft que mide la ducha con el micrófono.
Contenido, textos, colores y reglas de lo que se puede decir: [`landing/BRIEF.md`](landing/BRIEF.md).

## Desarrollo

```bash
npm install
cp .env.example .env   # opcional
npm run dev            # http://localhost:3000
```

## Variables de entorno

| Variable | Uso |
|---|---|
| `NEXT_PUBLIC_APP_URL` | URL pública (canonical, hreflang, Open Graph, sitemap). En Vercel: el dominio final. |

## Idiomas

- Rutas `/es` y `/en`, generadas estáticas. `/` redirige con `proxy.ts`: cookie `NEXT_LOCALE` → `Accept-Language` → `en`.
- Textos en `dictionaries/en.ts` y `dictionaries/es.ts`. El inglés define el tipo: si falta una clave en español, TypeScript falla.
- Capturas por idioma en `public/images/screenshots/{es,en}`; imagen social en `public/images/social/og-{es,en}.png`.

## Estructura

- `app/[locale]/layout.tsx`: layout raíz (`<html lang>`), metadatos, SEO y hreflang por idioma.
- `app/[locale]/page.tsx`: composición de secciones.
- `app/global-not-found.tsx`: 404 bilingüe.
- `components/`: `Navbar`, `Hero`, `HowItWorks`, `Features`, `Levels`, `Screenshots`, `Privacy`, `FAQ`, `FinalCTA`, `Footer`, y piezas como `Drop` (la mascota en SVG, con los accesorios de cada nivel), `StoreButton`, `PhoneFrame` y `Wave`.
- `lib/site.ts`: enlaces (Play Store, política de privacidad, contacto).
- `assets/images.ts`: imports estáticos de imágenes.

## Despliegue en Vercel

Importa el repositorio en Vercel (framework Next.js, sin configuración extra) y define `NEXT_PUBLIC_APP_URL`.

## Tecnología

Next.js 16 · React 19 · Tailwind CSS 4 · TypeScript · fuente Nunito (`next/font`).
