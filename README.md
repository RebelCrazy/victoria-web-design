# 🌐 Victoria Ramos - Sitio Web de Diseño Web Profesional

Landing page profesional para servicios de diseño y desarrollo web en Tlajomulco, Jalisco.

## 📦 Contenido del Proyecto

- `index.html` - Página principal con todos los servicios y paquetes
- `styles.css` - Estilos modernos y responsivos
- `script.js` - Funcionalidad interactiva
- `aviso-privacidad.html` - Aviso de privacidad (cumplimiento legal)
- `terminos.html` - Términos y condiciones de servicio
- `README.md` - Este archivo con instrucciones

## ✨ Características

- ✅ Diseño 100% responsivo (móvil, tablet, desktop)
- ✅ 3 paquetes de servicio claramente definidos
- ✅ Formulario de contacto integrado con WhatsApp
- ✅ Sección de portfolio
- ✅ Páginas legales incluidas (LFPDPPP compliant)
- ✅ SEO optimizado
- ✅ Animaciones suaves
- ✅ Velocidad de carga optimizada
- ✅ Sin dependencias externas (JavaScript vanilla)

## 🚀 Opción 1: Deployment en Cloudflare Pages (RECOMENDADO)

### Paso 1: Crear cuenta en GitHub

1. Ve a [github.com](https://github.com)
2. Clic en "Sign up"
3. Crea tu cuenta (usa tu email personal)
4. Verifica tu email

### Paso 2: Crear repositorio en GitHub

1. Inicia sesión en GitHub
2. Clic en el botón **"+"** arriba a la derecha → **"New repository"**
3. Llena los datos:
   - **Repository name:** `victoria-web-design`
   - **Description:** "Sitio web profesional de diseño web"
   - **Public** (selecciona esta opción)
   - ✅ Marca "Add a README file"
4. Clic en **"Create repository"**

### Paso 3: Subir archivos a GitHub

**Opción A - Usando la interfaz web (más fácil):**

1. En tu repositorio, clic en **"Add file"** → **"Upload files"**
2. Arrastra TODOS los archivos de este proyecto:
   - index.html
   - styles.css
   - script.js
   - aviso-privacidad.html
   - terminos.html
3. Escribe un mensaje: "Initial commit - Landing page"
4. Clic en **"Commit changes"**

**Opción B - Usando Git (avanzado):**

```bash
# En tu computadora, abre Terminal/CMD en la carpeta del proyecto
git init
git add .
git commit -m "Initial commit - Landing page"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/victoria-web-design.git
git push -u origin main
```

### Paso 4: Crear cuenta en Cloudflare

1. Ve a [cloudflare.com](https://cloudflare.com)
2. Clic en **"Sign up"**
3. Crea tu cuenta (usa el mismo email que GitHub)
4. Verifica tu email

### Paso 5: Conectar GitHub con Cloudflare Pages

1. Inicia sesión en Cloudflare
2. En el panel izquierdo, clic en **"Workers & Pages"**
3. Clic en **"Create application"**
4. Clic en la pestaña **"Pages"**
5. Clic en **"Connect to Git"**
6. Selecciona **"GitHub"**
7. Autoriza a Cloudflare a acceder a tu GitHub
8. Selecciona el repositorio **"victoria-web-design"**
9. Clic en **"Begin setup"**

### Paso 6: Configurar el deployment

En la página de configuración:

- **Project name:** `victoria-web-design` (o el que prefieras)
- **Production branch:** `main`
- **Build settings:**
  - **Framework preset:** None
  - **Build command:** (dejar vacío)
  - **Build output directory:** `/`

Clic en **"Save and Deploy"**

### Paso 7: ¡Listo! Tu sitio está en línea

Cloudflare te dará una URL como:
```
https://victoria-web-design.pages.dev
```

**Esta es tu URL temporal gratuita.** Puedes compartirla inmediatamente.

### Paso 8 (Opcional): Conectar dominio personalizado

Si quieres un dominio como `victoriaweb.com`:

1. Compra un dominio en [Namecheap](https://namecheap.com) o [GoDaddy](https://godaddy.com)
2. En Cloudflare Pages, ve a tu proyecto
3. Clic en **"Custom domains"**
4. Clic en **"Set up a custom domain"**
5. Ingresa tu dominio
6. Sigue las instrucciones para configurar los DNS

---

## 🚀 Opción 2: Deployment en GitHub Pages (Alternativa)

### Paso 1-3: Igual que arriba (crear repo y subir archivos)

### Paso 4: Activar GitHub Pages

1. En tu repositorio, ve a **"Settings"**
2. En el menú izquierdo, clic en **"Pages"**
3. En **"Source"**, selecciona **"Deploy from a branch"**
4. En **"Branch"**, selecciona **"main"** y **"/ (root)"**
5. Clic en **"Save"**

Espera 1-2 minutos y tu sitio estará en:
```
https://TU-USUARIO.github.io/victoria-web-design/
```

---

## 📝 Cómo Actualizar tu Sitio

Cuando quieras hacer cambios:

**Método 1 - Interfaz web (fácil):**
1. Ve a tu repositorio en GitHub
2. Navega al archivo que quieres editar
3. Clic en el ícono del lápiz (Edit)
4. Haz tus cambios
5. Clic en "Commit changes"
6. Tu sitio se actualizará automáticamente en 1-2 minutos

**Método 2 - Git (avanzado):**
```bash
# Haz cambios en tus archivos localmente
git add .
git commit -m "Descripción de cambios"
git push
```

---

## 🎨 Personalización

### Cambiar colores principales:

Edita las variables en `styles.css`:

```css
:root {
    --primary-color: #667eea;  /* Color primario */
    --secondary-color: #764ba2; /* Color secundario */
    /* ... más variables ... */
}
```

### Actualizar información de contacto:

Busca y reemplaza en todos los archivos:
- `334-007-9524` → Tu nuevo teléfono
- `victoriagalilearamosorozco@gmail.com` → Tu nuevo email
- `Tlajomulco de Zuñiga` → Tu ubicación

### Agregar proyectos al portfolio:

Edita la sección `<section id="portfolio">` en `index.html`

### Cambiar precios:

Edita los precios en la sección de paquetes en `index.html`

---

## 📱 Integración WhatsApp

El formulario de contacto está integrado con WhatsApp. Cuando alguien lo llena:
1. Los datos se formatean automáticamente
2. Se abre WhatsApp con el mensaje pre-llenado
3. El cliente solo tiene que presionar "Enviar"

**Para cambiar el número de WhatsApp:**

En `script.js`, busca y cambia:
```javascript
const whatsappURL = `https://wa.me/523340079524?text=${...}`;
```

Reemplaza `523340079524` con tu número (formato: código país + número sin espacios)

---

## 🔧 Solución de Problemas

### El sitio no se ve bien en móvil
- Asegúrate de que `<meta name="viewport">` esté en el `<head>`
- Verifica que `styles.css` esté cargando correctamente

### Los enlaces no funcionan
- Verifica que todos los archivos estén en la misma carpeta
- Asegúrate de que los nombres sean exactos (mayúsculas/minúsculas)

### Cloudflare no actualiza mi sitio
- Espera 1-2 minutos después de hacer push a GitHub
- En Cloudflare Pages, ve a Deployments y verifica el status
- Puedes forzar un nuevo deployment con "Retry deployment"

### El formulario no envía a WhatsApp
- Verifica que el número esté en formato correcto
- Asegúrate de que `script.js` esté cargando
- Abre la consola del navegador (F12) para ver errores

---

## 📊 Métricas y Analytics (Opcional)

Para rastrear visitantes, puedes agregar:

### Google Analytics

1. Crea cuenta en [analytics.google.com](https://analytics.google.com)
2. Obtén tu código de tracking
3. Agrégalo antes del `</head>` en `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU-ID');
</script>
```

---

## 🎯 SEO - Optimización para Buscadores

El sitio ya incluye:
- ✅ Meta tags descriptivos
- ✅ Títulos optimizados
- ✅ Estructura semántica HTML5
- ✅ URLs limpias

**Para mejorar aún más:**

1. **Crea un sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tu-sitio.pages.dev/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tu-sitio.pages.dev/aviso-privacidad.html</loc>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://tu-sitio.pages.dev/terminos.html</loc>
    <priority>0.5</priority>
  </url>
</urlset>
```

2. **Registra tu sitio en:**
   - Google Search Console
   - Bing Webmaster Tools

---

## 📞 Soporte

Si necesitas ayuda adicional:
- Documentación Cloudflare Pages: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- Documentación GitHub Pages: [pages.github.com](https://pages.github.com)
- Ayuda Git: [git-scm.com/doc](https://git-scm.com/doc)

---

## 📜 Licencia

Este sitio fue creado específicamente para Victoria Galilea Ramos Orozco.
Todos los derechos reservados © 2026.

---

## ✅ Checklist de Deployment

- [ ] Crear cuenta GitHub
- [ ] Crear repositorio
- [ ] Subir archivos
- [ ] Crear cuenta Cloudflare
- [ ] Conectar GitHub con Cloudflare
- [ ] Configurar deployment
- [ ] Verificar que el sitio funcione
- [ ] Probar en móvil
- [ ] Probar formulario de contacto
- [ ] Compartir URL con primeros clientes
- [ ] (Opcional) Comprar y conectar dominio personalizado

---

**¡Tu sitio web profesional está listo para conseguir clientes! 🚀**
