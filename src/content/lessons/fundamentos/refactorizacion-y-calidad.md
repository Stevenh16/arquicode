---
title: "Refactorización y calidad del código"
description: "Mejora la estructura interna del código sin cambiar su comportamiento y aprende a reconocer olores y refactorizar con seguridad."
slug: "refactorizacion-y-calidad"
category: "fundamentos-poo"
subcategory: "calidad"
type: "concept"
level: "intermediate"
order: 15
draft: false
status: "published"
estimatedMinutes: 20
languages:
  - java
prerequisites:
  - "fundamentos/principios-de-buen-diseno"
  - "fundamentos/pruebas-unitarias"
related:
  - "fundamentos/proyecto-integrador"
tags:
  - "refactorizacion"
  - "code-smells"
  - "clean-code"
  - "calidad"
learningObjectives:
  - "Distinguir refactorización de cambios de funcionalidad."
  - "Reconocer métodos extensos, duplicación y responsabilidades mezcladas como señales de revisión."
  - "Aplicar una extracción sencilla y comprobar el comportamiento con pruebas."
sources:
  - "Martin Fowler. Refactoring: Improving the Design of Existing Code, 2nd Edition. Addison-Wesley, 2018."
---

# Refactorización y calidad del código

> **En una frase:** refactorizar es mejorar la estructura interna de un programa sin cambiar su comportamiento observable.

## ¿Qué aprenderás?

- Separar refactorización de una nueva funcionalidad.
- Reconocer olores de código como indicios, no como fallos automáticos.
- Extraer responsabilidades en pasos pequeños y comprobar resultados.

## 1. El problema que queremos resolver

Con el tiempo, una función puede acumular validaciones, cálculos y presentación. Añadir una regla nueva se vuelve arriesgado porque nadie sabe qué parte depende de cada bloque. Reescribir toda la clase puede resolverlo, pero también introduce cambios difíciles de verificar.

## 2. Conceptos clave

Un **code smell** (olor de código) es una señal de que una estructura podría dificultar cambios o comprensión. No demuestra por sí sola que haya un defecto. Ejemplos: método demasiado largo, código duplicado, nombres ambiguos, clase con demasiadas responsabilidades o condicionales complejos para seleccionar variantes.

Una refactorización conserva el comportamiento externo: primero identifica lo que debe mantenerse, luego realiza cambios pequeños y verificables. Las pruebas ayudan a detectar regresiones; no garantizan por sí solas que todos los requisitos estén cubiertos.

## 3. Ejemplo: extraer un método

```java
class Factura {
    private final double subtotal;

    Factura(double subtotal) {
        if (subtotal < 0) {
            throw new IllegalArgumentException("El subtotal no puede ser negativo");
        }
        this.subtotal = subtotal;
    }

    public double totalConImpuesto() {
        return subtotal + calcularImpuesto();
    }

    private double calcularImpuesto() {
        return subtotal * 0.19;
    }
}
```

La extracción da nombre a una decisión de cálculo y mantiene el mismo resultado para la tasa fija asumida en este ejemplo. En un sistema real, la tasa debe provenir del requisito aplicable, no de este valor ilustrativo.

## 4. Proceso seguro

1. Describe el comportamiento observable que no debe cambiar.
2. Si es posible, ejecuta pruebas antes del cambio.
3. Haz un cambio estructural cada vez: extrae método, renombra, mueve una responsabilidad.
4. Ejecuta pruebas y revisa el diff.
5. Deja las nuevas funcionalidades para un cambio separado cuando sea práctico.

Usa nombres claros, funciones enfocadas y formato consistente como ayudas a la lectura; «código limpio» no significa obedecer un estilo universal separado de las convenciones del equipo.

## 5. Errores frecuentes

- **Refactorizar y añadir funcionalidad a la vez:** complica encontrar la causa de una regresión.
- **Cambiar código sin pruebas ni verificación manual definida:** no hay una señal fiable de que el comportamiento se conservó.
- **Tratar todo smell como un defecto:** evalúa el coste real y el cambio probable antes de intervenir.
- **Reescribir por completo como primera opción:** los pasos pequeños reducen el área de riesgo.

## 6. Ejercicio práctico

### Enunciado

Identifica dos responsabilidades que podrían separarse en una clase de 100 líneas que valida un pedido y construye el texto del recibo. Propón un primer paso seguro y una comprobación.

<details>
<summary>Mostrar orientación</summary>

Extrae el formato del recibo a un método o clase pequeña sin cambiar primero las reglas de validación. Define ejemplos de salida para pedidos vacíos y no vacíos, y comprueba que se conserven después del cambio.
</details>

## 7. Resumen y comprensión

- Refactorizar cambia la estructura interna, no el comportamiento observable esperado.
- Los smells son señales que se investigan, no reglas automáticas.
- Cambios pequeños junto a pruebas adecuadas reducen el riesgo de mantenimiento.

1. ¿Qué diferencia una refactorización de una nueva funcionalidad?
2. ¿Por qué una función larga es una señal y no necesariamente un defecto?
3. ¿Qué aporta ejecutar pruebas después de cada cambio pequeño?

## 8. Continúa aprendiendo

- **Requisito previo:** [Principios de buen diseño](/lecciones/principios-de-buen-diseno/), [Pruebas unitarias](/lecciones/pruebas-unitarias/).
- **Siguiente lección:** [Proyecto integrador](/lecciones/proyecto-integrador/).

## 9. Fuente

- Fowler, Martin. *Refactoring: Improving the Design of Existing Code*, 2.ª ed. Addison-Wesley, 2018.
