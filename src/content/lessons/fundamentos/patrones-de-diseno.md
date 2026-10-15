---
title: "Introducción a los patrones de diseño"
description: "Reconoce problemas recurrentes y estudia Strategy, Factory Method, Builder, Observer y Adapter con criterio."
slug: "patrones-de-diseno"
category: "fundamentos-poo"
subcategory: "patrones"
type: "pattern"
level: "intermediate"
order: 17
draft: false
status: "published"
estimatedMinutes: 25
languages:
  - java
prerequisites:
  - "fundamentos/interfaces-y-contratos"
  - "fundamentos/composicion-y-diseno"
  - "fundamentos/polimorfismo"
related:
  - "fundamentos/proyecto-integrador"
tags:
  - "patrones-de-diseno"
  - "strategy"
  - "factory-method"
  - "builder"
  - "observer"
  - "adapter"
learningObjectives:
  - "Explicar qué problema documenta un patrón y por qué no es una receta universal."
  - "Relacionar cinco patrones comunes con interfaces, composición y polimorfismo."
  - "Implementar una estrategia intercambiable y decidir cuándo evitar un patrón."
sources:
  - "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides. Design Patterns: Elements of Reusable Object-Oriented Software. Addison-Wesley, 1994."
---

# Introducción a los patrones de diseño

> **En una frase:** un patrón de diseño nombra una estructura de colaboración que ha resultado útil para cierto tipo de problema; aplicarlo sin ese problema añade complejidad.

## ¿Qué aprenderás?

- Explicar problema, intención y coste de un patrón.
- Reconocer Strategy, Factory Method, Builder, Observer y Adapter.
- Usar interfaces y composición para intercambiar comportamientos.

## 1. ¿Qué es un patrón?

Un patrón describe un problema recurrente, una solución estructural y las consecuencias de adoptarla. No es una biblioteca que se copia sin analizar el contexto ni una garantía de buen diseño. Los patrones de esta lección conectan conceptos que ya estudiaste, como interfaces, composición y polimorfismo.

## 2. Strategy: intercambiar un algoritmo

Define un contrato para una familia de algoritmos y permite que un cliente delegue en la estrategia elegida:

```java
interface Descuento {
    double aplicar(double subtotal);
}

class SinDescuento implements Descuento {
    public double aplicar(double subtotal) { return subtotal; }
}

class Compra {
    private final Descuento descuento;

    Compra(Descuento descuento) {
        this.descuento = descuento;
    }

    public double total(double subtotal) {
        return descuento.aplicar(subtotal);
    }
}
```

El cliente mantiene un contrato y delega el cálculo. Valida las entradas según las reglas del dominio; no presupongas que cualquier estrategia da un importe válido.

## 3. Cuatro patrones más

- **Factory Method (creacional):** define un punto de creación que permite a subclases o implementaciones decidir qué producto concreto construir. Útil cuando la política de creación varía; innecesario si basta un constructor simple.
- **Builder (creacional):** construye paso a paso un objeto con muchas opciones o parámetros opcionales, y puede validar el resultado al finalizar. Para objetos con pocos parámetros, un constructor claro suele bastar.
- **Observer (comportamiento):** un sujeto notifica a observadores registrados cuando cambia un estado o sucede un evento. Define alta, baja y política de errores; muchos oyentes o ciclos de vida mal gestionados pueden complicarlo.
- **Adapter (estructural):** convierte la interfaz de una dependencia en otra que el cliente espera. Aísla incompatibilidades externas, pero no debe ocultar diferencias semánticas importantes.

## 4. Relación con POO

Strategy y Adapter suelen apoyarse en composición e interfaces. Observer define colaboración entre un publicador y suscriptores. Builder separa la construcción del uso; Factory Method desplaza una decisión de creación. En todos los casos el polimorfismo puede permitir intercambiar implementaciones, aunque no todos los patrones requieren exactamente la misma estructura.

## 5. Cuándo evitar patrones

- El problema ocurre una sola vez y una solución directa es clara.
- El patrón introduce objetos, capas o configuración que nadie necesita.
- El patrón oculta decisiones importantes o hace más difícil depurar el flujo.

El nombre ayuda a conversar sobre el diseño; no debe convertirse en una meta independiente.

## 6. Ejercicio práctico

### Enunciado

Una aplicación calcula costos de envío según el proveedor. Modela una estrategia `CalculadorEnvio` e implementa dos alternativas. Explica quién elige la estrategia y qué ventaja da frente a un condicional central.

<details>
<summary>Mostrar pista</summary>

Define un método común `calcular(double peso)` y dos clases con reglas distintas. El servicio que arma el envío recibe la estrategia por constructor; usa una selección condicional solo en el punto donde la aplicación decide qué proveedor corresponde.
</details>

## 7. Resumen y comprensión

- Un patrón documenta una solución reutilizable con consecuencias, no una receta obligatoria.
- Strategy intercambia algoritmos; Factory Method y Builder resuelven variaciones de creación.
- Observer comunica cambios a suscriptores; Adapter convierte interfaces incompatibles.

1. ¿Qué problema ayuda a resolver Strategy?
2. ¿Qué diferencia general hay entre Factory Method y Builder?
3. ¿Por qué Adapter debería preservar el significado de las operaciones?

## 8. Continúa aprendiendo

- **Requisitos previos:** [Polimorfismo](/lecciones/polimorfismo/), [Interfaces y contratos](/lecciones/interfaces-y-contratos/).
- **Siguiente lección:** [Proyecto integrador](/lecciones/proyecto-integrador/).

## 9. Fuente

- Gamma, Erich; Helm, Richard; Johnson, Ralph; Vlissides, John. *Design Patterns: Elements of Reusable Object-Oriented Software*. Addison-Wesley, 1994.
