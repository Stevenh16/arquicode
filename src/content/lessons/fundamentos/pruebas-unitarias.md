---
title: "Pruebas de clases y objetos"
description: "Diseña pruebas unitarias para constructores, métodos, reglas de negocio, límites y colaboraciones usando JUnit."
slug: "pruebas-unitarias"
category: "fundamentos-poo"
subcategory: "pruebas"
type: "exercise"
level: "intermediate"
order: 16
draft: false
status: "published"
estimatedMinutes: 22
languages:
  - java
prerequisites:
  - "fundamentos/encapsulamiento"
  - "fundamentos/excepciones-y-robustez"
related:
  - "fundamentos/refactorizacion-y-calidad"
tags:
  - "pruebas-unitarias"
  - "junit"
  - "assertions"
  - "casos-limite"
learningObjectives:
  - "Describir qué verifica una prueba unitaria y qué significa un caso límite."
  - "Escribir pruebas JUnit para un comportamiento válido, un límite y una excepción."
  - "Identificar dependencias que dificultan probar una clase y aislar colaboraciones."
sources:
  - "JUnit. JUnit 5 User Guide. https://junit.org/junit5/docs/current/user-guide/"
---

# Pruebas de clases y objetos

> **En una frase:** una prueba unitaria ejecuta una parte pequeña del programa bajo condiciones controladas y comprueba resultados observables esperados.

## ¿Qué aprenderás?

- Escribir pruebas de métodos y constructores con JUnit 5.
- Cubrir caminos válidos, límites y excepciones.
- Pensar en colaboradores y diseño comprobable sin confundir una prueba con una garantía total.

## 1. El problema que queremos resolver

Un cambio en `retirar` puede alterar por accidente el saldo para un importe exacto al saldo disponible. Probar solo un ejemplo típico no detecta necesariamente ese límite. Casos explícitos y repetibles pueden revelar regresiones antes de integrar el cambio.

## 2. Estructura de una prueba

Una prueba suele preparar el escenario, ejecutar la acción y verificar el resultado. Una prueba unitaria debe ser enfocada y repetible; no debe depender de un servicio remoto ni de datos cambiantes. Las **pruebas de límites** exploran bordes de rangos y reglas: cero, mínimo permitido, máximo permitido o valores inmediatamente fuera.

JUnit es una biblioteca de pruebas para Java, no incluida en la biblioteca estándar. Para ejecutar el siguiente ejemplo, el proyecto debe tener JUnit Jupiter configurado en su herramienta de construcción y un motor compatible.

## 3. Ejemplo con JUnit Jupiter

Código de producción:

```java
class Contador {
    private int valor;

    public void incrementar() {
        valor++;
    }

    public int valor() {
        return valor;
    }
}
```

Prueba en un archivo separado:

```java
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;

class ContadorTest {
    @Test
    void incrementarAumentaElValorEnUno() {
        Contador contador = new Contador();

        contador.incrementar();

        assertEquals(1, contador.valor());
    }

    @Test
    void constructorDeCuentaRechazaSaldoNegativo() {
        assertThrows(IllegalArgumentException.class, () -> new Cuenta(-1));
    }
}
```

La primera prueba comprueba una observación pública del contador. La segunda ilustra verificar una precondición; requiere la clase `Cuenta` del ejemplo de excepciones. Cada prueba debe poder ejecutarse de manera independiente.

## 4. Probar reglas y colaboración

Para una regla de negocio, prueba los resultados importantes y condiciones inválidas. Para colaboración entre objetos, inyectar una interfaz puede permitir usar un sustituto controlado (*test double*). Evita comprobar detalles privados: verifica el contrato observable para no hacer frágiles las pruebas ante refactorizaciones legítimas.

Si una clase necesita sistema de archivos, red o base de datos para probar un cálculo pequeño, identifica la dependencia y considera separarla. No toda prueba debe ser un mock; usa dobles solo cuando aclaren o controlen una interacción relevante.

## 5. Errores frecuentes

- **Probar solo el camino feliz:** incluye límites y errores definidos por el contrato.
- **Acoplar la prueba a campos privados:** prueba comportamiento accesible.
- **Tests con varios motivos de fallo:** una aserción y un escenario enfocados simplifican el diagnóstico.
- **Asumir que compila el ejemplo sin configurar JUnit:** agrega la dependencia de prueba a Maven/Gradle o al entorno utilizado.

## 6. Ejercicio práctico

### Enunciado

Escribe pruebas para una clase `Temperatura` que convierte Celsius a Fahrenheit. Incluye cero, un valor conocido y el rechazo de un valor no finito si así lo define el contrato.

<details>
<summary>Mostrar pistas</summary>

Usa `assertEquals(32.0, temperatura.enFahrenheit(), 0.001)` para comparar valores de punto flotante con tolerancia; define explícitamente si la clase rechaza `NaN` o infinito antes de probarlo.
</details>

## 7. Resumen y comprensión

- Las pruebas unitarias comprueban comportamiento bajo escenarios controlados.
- Incluye casos válidos, límites y errores del contrato.
- JUnit requiere configuración como dependencia; un ejemplo de prueba no se ejecuta automáticamente sin ella.

1. ¿Qué tres fases puedes identificar al leer una prueba?
2. ¿Por qué conviene probar el límite de un rango?
3. ¿Cómo puede la inyección de un colaborador facilitar una prueba?

## 8. Continúa aprendiendo

- **Requisito previo:** [Excepciones y robustez](/lecciones/excepciones-y-robustez/).
- **Siguiente lección:** [Patrones de diseño](/lecciones/patrones-de-diseno/).

## 9. Fuente

- [JUnit 5 User Guide](https://junit.org/junit5/docs/current/user-guide/).
