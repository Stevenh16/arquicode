---
title: "Principios de buen diseño"
description: "Aplica SOLID, DRY, KISS y YAGNI como criterios para reducir rigidez sin convertirlos en reglas mecánicas."
slug: "principios-de-buen-diseno"
category: "fundamentos-poo"
subcategory: "diseno"
type: "principle"
level: "intermediate"
order: 14
draft: false
status: "published"
estimatedMinutes: 25
languages:
  - java
prerequisites:
  - "fundamentos/interfaces-y-contratos"
  - "fundamentos/composicion-y-diseno"
  - "fundamentos/excepciones-y-robustez"
related:
  - "fundamentos/refactorizacion-y-calidad"
  - "fundamentos/pruebas-unitarias"
tags:
  - "solid"
  - "srp"
  - "ocp"
  - "lsp"
  - "isp"
  - "dip"
  - "dry"
  - "kiss"
  - "yagni"
learningObjectives:
  - "Describir los cinco principios SOLID y los criterios DRY, KISS y YAGNI."
  - "Identificar rigidez, dependencias inadecuadas y contratos que las subclases rompen."
  - "Evaluar cuándo aplicar un principio y cuándo una abstracción agregaría complejidad innecesaria."
sources:
  - "Robert C. Martin. Agile Software Development: Principles, Patterns, and Practices. Prentice Hall, 2002."
  - "Martin Fowler. Refactoring, 2nd Edition. Addison-Wesley, 2018."
---

# Principios de buen diseño

> **En una frase:** los principios de diseño son criterios para tomar decisiones que hagan más comprensible y modificable el software; su aplicación depende del contexto.

## ¿Qué aprenderás?

- Reconocer SRP, OCP, LSP, ISP y DIP.
- Relacionar DRY, KISS y YAGNI con cambios concretos.
- Identificar dependencias rígidas sin añadir abstracciones preventivas.

## 1. El problema que queremos resolver

Una clase que valida pedidos, calcula impuestos, guarda datos y envía correos concentra motivos de cambio distintos. Al modificar una regla tributaria, se puede alterar accidentalmente la notificación o el almacenamiento. Los principios ayudan a ver estas tensiones y proponer límites más claros.

## 2. SOLID en pocas palabras

- **SRP — Responsabilidad única:** una clase o módulo debe tener una razón principal de cambio, relacionada con una responsabilidad cohesiva.
- **OCP — Abierto/cerrado:** debe ser posible extender comportamientos sin modificar repetidamente el código estable que los usa. No significa prohibir todo cambio.
- **LSP — Sustitución de Liskov:** una instancia de un subtipo debe poder sustituir a su tipo base sin romper las expectativas y contratos de los clientes.
- **ISP — Segregación de interfaces:** conviene tener contratos pequeños y específicos para sus clientes, en lugar de obligarlos a depender de operaciones que no usan.
- **DIP — Inversión de dependencias:** políticas de alto nivel y detalles de bajo nivel deben depender de abstracciones estables; las abstracciones no deberían depender de detalles concretos.

Otros criterios relacionados:

- **DRY:** evita mantener varias fuentes de verdad para una misma regla. No es una orden de fusionar código parecido cuya semántica pueda divergir.
- **KISS:** prefiere la solución más sencilla que satisfaga los requisitos.
- **YAGNI:** no implementes hoy una capacidad especulativa que no se necesita todavía.

## 3. Ejemplo: depender de un contrato

Una política de envío no necesita conocer el transporte concreto:

```java
interface Enviador {
    void enviar(String destino, String mensaje);
}

class ServicioAvisos {
    private final Enviador enviador;

    ServicioAvisos(Enviador enviador) {
        if (enviador == null) {
            throw new IllegalArgumentException("Se requiere un enviador");
        }
        this.enviador = enviador;
    }

    public void avisar(String destino, String mensaje) {
        enviador.enviar(destino, mensaje);
    }
}
```

El constructor permite proporcionar distintas implementaciones de `Enviador`. Esto ilustra DIP y facilita pruebas; no demuestra que toda clase necesite una interfaz o una inyección configurable.

## 4. Detectar violaciones con preguntas

- **SRP:** ¿cambia esta clase por motivos independientes?
- **OCP:** ¿cada variante nueva exige editar una cadena central de condicionales?
- **LSP:** ¿la subclase rechaza operaciones que el tipo base promete o rompe sus invariantes?
- **ISP:** ¿un cliente implementa métodos vacíos o que nunca usa?
- **DIP:** ¿la regla central conoce detalles como una base de datos o un SDK concreto?

Estas preguntas identifican áreas de revisión; no sustituyen conocer el dominio.

## 5. Errores frecuentes

- **Aplicar SOLID como lista de verificación:** puede producir interfaces y clases vacías sin un problema real.
- **Confundir DRY con eliminar toda repetición textual:** dos reglas parecidas pueden tener motivos de cambio distintos.
- **Interpretar OCP como cero modificaciones futuras:** los requisitos cambian; el principio busca limitar el alcance del cambio.
- **Construir generalidad “por si acaso”:** KISS y YAGNI recuerdan que toda abstracción también tiene coste.

## 6. Ejercicio práctico

### Enunciado

Una clase `Pedido` valida artículos, calcula el total, imprime el recibo y escribe en disco. Identifica dos responsabilidades distintas y propone una separación inicial. Explica qué principio guía cada decisión.

<details>
<summary>Mostrar orientación</summary>

Mantén en `Pedido` la información y reglas propias del pedido; separa la persistencia en un componente de almacenamiento y la presentación del recibo en un componente de formato. Evita crear una arquitectura extensa hasta que el proyecto necesite esos límites.
</details>

## 7. Resumen y comprensión

- SOLID describe cohesión, extensión, sustitución, contratos enfocados y dependencias hacia abstracciones.
- DRY, KISS y YAGNI ayudan a evitar duplicación de reglas y complejidad sin necesidad.
- Los principios orientan decisiones; deben balancearse con el tamaño y evolución del sistema.

1. ¿Qué problema aborda ISP?
2. ¿Por qué una subclase que rompe el contrato de su superclase viola LSP?
3. ¿Cómo puede entrar en conflicto una generalización especulativa con YAGNI?

## 8. Continúa aprendiendo

- **Requisito previo:** [Interfaces y contratos](/lecciones/interfaces-y-contratos/), [Composición y diseño](/lecciones/composicion-y-diseno/).
- **Siguiente lección:** [Refactorización y calidad](/lecciones/refactorizacion-y-calidad/).

## 9. Fuentes

- Martin, Robert C. *Agile Software Development: Principles, Patterns, and Practices*. Prentice Hall, 2002.
- Fowler, Martin. *Refactoring*, 2.ª ed. Addison-Wesley, 2018.
