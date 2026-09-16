# 🧼 CleanTech Pro — Landing Page B2B de Limpieza Técnica

Una landing page corporativa orientada a servicios B2B (oficinas, naves industriales, centros sanitarios y fin de obra) enfocada en **alta conversión (CRO), accesibilidad, maquetación semántica y diseño responsive**.

![CleanTech Pro Preview]((<img width="1200" height="798" alt="image" src="https://github.com/user-attachments/assets/e9ce04f8-1a23-496d-9bff-ad5c14aba940" />
))

## 🚀 Demo En Vivo

- **Sitio web:** [https://tu-usuario.vercel.app](https://tu-usuario.vercel.app)
- **Repositorio:** https://github.com/PaulaKDev/CleanTech-Pro


## 🛠️ Tecnologías Utilizadas

- **HTML5 Semántico:** Estructura accesible (`<header>`, `<main>`, `<section>`, `<article>`, `<details>`).
- **CSS3 (Modular):**
  - **Design System Tokens:** Variables CSS nativas para tematización y consistencia visual.
  - **Layout Flexbox & CSS Grid:** Adaptabilidad fluida a todos los dispositivos.
  - **Animaciones y Microinteracciones:** Transiciones CSS para componentes y botones.
- **JavaScript Vanilla (ES Modules):**
  - Módulos organizados para separación de responsabilidades.
  - Manipulación eficiente del DOM sin dependencias externas.


## ✨ Funcionalidades Clave

* **Buscador de Cobertura por Código Postal:** Componente JS que evalúa la disponibilidad de retén técnico e informa en tiempo real al usuario.
* **Validación de Formulario en Cliente:** Comprobación estricta de campos obligatorios, selección de sector, volumen de superficie (m²) y formato de email.
* **Desplegables Accesibles (FAQ):** Componentes nativos con `<details>` y `<summary>` para resolver dudas frecuentes.
* **Header Sticky & Navegación Móvil:** Menú hamburguesa accesible con bloqueo de scroll y efecto de fondo translúcido (`backdrop-filter`).
* **Diseño Orientado a Negocio:** Bloques de confianza visual con métricas (ISO 9001, Póliza de Seguro RC y Personal en plantilla).

## 📂 Estructura del Proyecto

landing_cleantech_pro/
├── index.html
├── assets/
│   └── img/             # Logotipos e imágenes optimizadas (.webp / .svg)
├── css/
│   ├── variables.css    # Tokens de diseño (Colores B2B, fuentes, espaciados)
│   ├── base.css         # Reset y estilos globales
│   ├── components.css   # Botones, cards, badges e inputs
│   └── main.css         # Secciones de página y media queries responsive
└── js/
    ├── main.js          # Punto de entrada de scripts
    └── modules/
        ├── nav.js       # Menú hamburguesa y navegación
        ├── coverage.js  # Widget interactivo de cobertura postal
        └── form.js      # Validación del formulario de contacto
