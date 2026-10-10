# ArquiCode

### Comprende el código. Diseña mejores sistemas.

**ArquiCode** es una plataforma educativa gratuita y de código abierto orientada al aprendizaje de la programación orientada a objetos, los principios de diseño, los patrones de diseño y la arquitectura de software.

Su objetivo es ayudar a estudiantes y desarrolladores a comprender no solo cómo funciona el código, sino también por qué se diseña de determinada manera y cuándo aplicar cada concepto en proyectos reales.

---

## 🎯 Objetivo del proyecto

Aprender a programar no consiste únicamente en conocer un lenguaje de programación. También implica desarrollar la capacidad de construir software organizado, comprensible, reutilizable y fácil de mantener.

ArquiCode nace con el propósito de facilitar este aprendizaje mediante contenido estructurado, explicaciones progresivas, ejemplos prácticos y ejercicios que permitan conectar la teoría con la práctica.

## 📚 Contenido educativo

La plataforma está organizada en las siguientes categorías:

| Categoría                    | Descripción                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Fundamentos de POO**       | Clases, objetos, atributos, métodos, encapsulamiento, abstracción, herencia y polimorfismo.             |
| **Principios de diseño**     | Cohesión, acoplamiento, refactorización y principios como KISS, DRY y YAGNI.                            |
| **SOLID**                    | Los cinco principios fundamentales para diseñar software orientado a objetos más flexible y mantenible. |
| **Patrones de diseño**       | Patrones creacionales, estructurales y de comportamiento, acompañados de ejemplos prácticos.            |
| **Arquitectura de software** | Arquitectura por capas, MVC, arquitectura hexagonal, Clean Architecture y otros enfoques.               |
| **Práctica y proyectos**     | Ejercicios, análisis de código y actividades para aplicar los conocimientos adquiridos.                 |

*Las rutas de las seis categorías ya están disponibles; las lecciones se incorporarán progresivamente.*

### Publicar una lección

Las lecciones publicadas se escriben como archivos Markdown dentro de `src/content/lessons/`. Se pueden
organizar en subdirectorios; la ruta de cada archivo determina su URL bajo `/lecciones/`. Cada archivo
debe incluir estos datos:

```yaml
---
title: "Título de la lección"
description: "Qué aprenderá el lector en esta lección."
category: fundamentos-poo
order: 1
draft: false
---
```

`category` acepta `fundamentos-poo`, `principios`, `solid`, `patrones`, `arquitectura` o `practica`.
Las lecciones que tengan `draft: true` no se publican. Las publicadas aparecen automáticamente en su
categoría y, si están entre las primeras por `order`, en la portada.

## 💡 Metodología de aprendizaje

Cada lección busca facilitar la comprensión de los conceptos mediante una estructura didáctica:

1. **Identificar el problema:** comprender la situación que motiva el uso de un concepto o técnica.
2. **Comprender la teoría:** estudiar el concepto con explicaciones claras y ejemplos intuitivos.
3. **Analizar el código:** comparar implementaciones y comprender sus diferencias.
4. **Visualizar las relaciones:** utilizar diagramas y representaciones cuando aporten valor.
5. **Practicar:** resolver ejercicios y aplicar lo aprendido.
6. **Profundizar:** explorar conceptos relacionados y continuar con nuevas lecciones.

El propósito no es memorizar soluciones, sino desarrollar el razonamiento necesario para tomar mejores decisiones de diseño.

## 🛠️ Tecnologías

ArquiCode utiliza tecnologías orientadas a crear un sitio educativo rápido, accesible y fácil de mantener.

- **[Astro](https://astro.build/):** generación de páginas y estructura del sitio web.
- **[TypeScript](https://www.typescriptlang.org/):** soporte para desarrollo con tipos estáticos.
- **Markdown:** escritura y organización de las lecciones educativas.
- **HTML y CSS:** estructura, presentación y diseño adaptable.
- **Git y GitHub:** control de versiones y alojamiento del código fuente.

La arquitectura inicial prioriza un sitio estático, sin necesidad de un backend o una base de datos para publicar el contenido educativo.

## 🚀 Instalación y ejecución local

### Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) en una versión compatible con Astro.
- npm, incluido normalmente con Node.js.
- Git, si deseas clonar el repositorio.

### 1. Clonar el repositorio

```bash
git clone https://github.com/Stevenh16/arquicode.git
cd arquicode
```

### 2. Instalar las dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Astro mostrará la dirección local donde puedes abrir el sitio, normalmente:

```text
http://localhost:4321/
```

### 4. Construir la versión de producción

```bash
npm run build
```

Este comando genera la versión optimizada del sitio en el directorio `dist/`.

### 5. Previsualizar la versión de producción

```bash
npm run preview
```

Utiliza este comando después de generar la compilación para revisar localmente la versión de producción.

## 📂 Organización del proyecto

La estructura puede evolucionar a medida que se desarrollen nuevas funcionalidades. La organización inicial de Astro contempla directorios como los siguientes:

```text
arquicode/
├── public/             # Recursos estáticos e imágenes
├── src/
│   ├── components/     # Cabecera, pie de página e iconos reutilizables
│   ├── content/        # Lecciones Markdown
│   ├── data/           # Categorías educativas compartidas
│   ├── layouts/        # Plantilla y estilos globales
│   ├── pages/          # Portada y rutas estáticas de categorías/lecciones
│   └── content.config.ts # Esquema de la colección de lecciones
├── astro.config.mjs    # Configuración de Astro
├── package.json        # Dependencias y comandos
└── README.md           # Documentación del proyecto
```

La estructura exacta puede variar conforme avance el desarrollo. Las lecciones se organizarán en archivos Markdown y se integrarán con el sistema de contenido de Astro.

## 🌱 Estado del proyecto

**En desarrollo.**

ArquiCode se encuentra en una etapa inicial de construcción. La plataforma se desarrollará progresivamente, comenzando por la interfaz principal, la organización de las categorías y el sistema de publicación de lecciones.

Las funcionalidades, los contenidos y los componentes se incorporarán a medida que el proyecto avance.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas participar, puedes:

- Reportar errores o problemas mediante *Issues*.
- Proponer nuevas lecciones o mejoras educativas.
- Sugerir correcciones y ejemplos más claros.
- Contribuir con código, diagramas o documentación.

Para contribuir con contenido educativo, se recomienda priorizar la precisión técnica, la claridad de las explicaciones, los ejemplos reproducibles y el uso adecuado de las fuentes.

## 📖 Fuentes de aprendizaje

El contenido podrá apoyarse en documentación oficial, libros especializados y recursos reconocidos de ingeniería de software, entre ellos:

- [Documentación oficial de Java](https://docs.oracle.com/en/java/)
- [Refactoring.Guru](https://refactoring.guru/)
- [Martin Fowler](https://martinfowler.com/)
- *Effective Java*, de Joshua Bloch.
- *Design Patterns: Elements of Reusable Object-Oriented Software*, de Erich Gamma, Richard Helm, Ralph Johnson y John Vlissides.

Las fuentes se utilizarán como referencias de estudio, procurando elaborar explicaciones, ejemplos e ilustraciones propios y respetar las licencias y los derechos de autor correspondientes.

## 📄 Licencia

La licencia del proyecto está **pendiente de definir**.

Antes de distribuir o permitir la reutilización del código y del contenido, se especificará una licencia que indique claramente las condiciones de uso, modificación y redistribución.

---

Desarrollado como un proyecto educativo para promover el aprendizaje de la programación y las buenas prácticas de ingeniería de software.

**ArquiCode — Aprende a escribir código. Aprende a diseñar software.**
