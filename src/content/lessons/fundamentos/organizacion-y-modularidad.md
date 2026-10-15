---
title: "Organización del código y modularidad"
description: "Organiza clases Java en archivos y paquetes, entiende importaciones y visibilidad, y documenta APIs con Javadoc."
slug: "organizacion-y-modularidad"
category: "fundamentos-poo"
subcategory: "organizacion"
type: "concept"
level: "beginner"
order: 11
draft: false
status: "published"
estimatedMinutes: 18
languages:
  - java
prerequisites:
  - "fundamentos/clases-objetos"
  - "fundamentos/encapsulamiento"
related:
  - "fundamentos/modelado-con-uml"
  - "fundamentos/colecciones-de-objetos"
tags:
  - "paquetes"
  - "import"
  - "javadoc"
  - "modularidad"
learningObjectives:
  - "Organizar tipos públicos en archivos y paquetes Java coherentes."
  - "Distinguir package-private de los modificadores de acceso explícitos."
  - "Separar responsabilidades y documentar una API con Javadoc."
sources:
  - "Oracle. The Java Tutorials: Creating and Using Packages. https://docs.oracle.com/javase/tutorial/java/package/packages.html"
---

# Organización del código y modularidad

> **En una frase:** organizar clases en paquetes y módulos comprensibles ayuda a limitar el alcance de los detalles y facilita localizar, reutilizar y mantener el código.

## ¿Qué aprenderás?

- Relacionar paquetes con directorios y declaraciones `package`.
- Usar `import` y comprender la visibilidad de paquete.
- Separar responsabilidades sin crear capas arbitrarias y escribir documentación útil.

## 1. El problema que queremos resolver

Un proyecto con muchas clases en un único archivo o paquete dificulta reconocer qué tipos colaboran, cuáles son parte de la API pública y qué dependencias son accidentales. La organización en unidades pequeñas y coherentes ayuda a limitar el conocimiento que necesita cada componente.

## 2. Paquetes, archivos y acceso

Un paquete agrupa tipos relacionados y define un espacio de nombres. La declaración `package` aparece al principio del archivo. En la organización habitual, la ruta de directorios corresponde al nombre del paquete. Un tipo público de nivel superior se declara en un archivo con el mismo nombre. `import` permite usar un tipo de otro paquete por su nombre simple; no copia ni carga el código.

Los miembros sin modificador tienen **acceso de paquete** (*package-private*): solo son accesibles desde el mismo paquete. `public`, `protected` y `private` tienen reglas distintas explicadas en [Encapsulamiento](/lecciones/encapsulamiento/). Agrupa por cohesión del dominio; no conviertas «modelo, lógica, presentación» en una estructura obligatoria para todo programa.

## 3. Ejemplo de estructura

```text
src/
└── biblioteca/
    ├── modelo/
    │   └── Libro.java
    └── app/
        └── Main.java
```

`Libro.java`:

```java
package biblioteca.modelo;

public class Libro {
    private final String titulo;

    public Libro(String titulo) {
        if (titulo == null || titulo.isBlank()) {
            throw new IllegalArgumentException("El título es obligatorio");
        }
        this.titulo = titulo;
    }

    public String getTitulo() {
        return titulo;
    }
}
```

`Main.java`:

```java
package biblioteca.app;

import biblioteca.modelo.Libro;

public class Main {
    public static void main(String[] args) {
        Libro libro = new Libro("Diseño de software");
        System.out.println(libro.getTitulo());
    }
}
```

Desde la raíz del proyecto, compila con `javac -d out src/biblioteca/modelo/Libro.java src/biblioteca/app/Main.java` y ejecuta con `java -cp out biblioteca.app.Main`. El resultado esperado es `Diseño de software`.

## 4. Separación y documentación

Mantén juntas las clases que cambian por una misma razón y evita que un paquete dependa de detalles internos de otro. Para APIs públicas, Javadoc describe el contrato: propósito, parámetros, retorno y excepciones relevantes.

```java
/**
 * Representa un libro identificado por su título.
 */
public class Libro {
    /**
     * Devuelve el título del libro.
     *
     * @return título no vacío
     */
    public String getTitulo() {
        return titulo;
    }
}
```

El fragmento de Javadoc ilustra el estilo; la clase completa debe conservar el campo y constructor del ejemplo anterior.

## 5. Errores frecuentes

- **Crear paquetes por cada clase:** aumenta la navegación sin mejorar la cohesión.
- **Importar todo con comodines por costumbre:** puede ocultar de dónde viene un nombre; imports explícitos mejoran la lectura.
- **Hacer `public` todo tipo y miembro:** amplía la API que otros deben mantener; restringe el acceso a lo necesario.

## 6. Ejercicio práctico

### Enunciado

Divide una clase `Producto` y una clase ejecutable en los paquetes `tienda.modelo` y `tienda.app`. Mantén el precio privado y documenta el método público que lo devuelve.

<details>
<summary>Mostrar pista</summary>

La primera línea de cada archivo debe ser su `package`; importa `tienda.modelo.Producto` desde la aplicación. No expongas el campo directamente.
</details>

## 7. Resumen y comprensión

- El paquete es un espacio de nombres y un límite de acceso, además de una forma de organizar tipos.
- Una organización clara sigue las responsabilidades y necesidades reales del proyecto.
- Documenta contratos públicos, no cada línea de implementación.

1. ¿Qué diferencia hay entre `import` y copiar el código?
2. ¿Desde dónde se accede a un miembro package-private?
3. ¿Qué tipo de información útil debería incluir Javadoc de un método público?

## 8. Continúa aprendiendo

- **Requisito previo:** [Encapsulamiento](/lecciones/encapsulamiento/).
- **Siguiente lección:** [Colecciones de objetos](/lecciones/colecciones-de-objetos/).

## 9. Fuente

- [Oracle. The Java Tutorials: Creating and Using Packages](https://docs.oracle.com/javase/tutorial/java/package/packages.html).
