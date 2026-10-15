---
title: "Excepciones y robustez"
description: "Detecta y comunica situaciones excepcionales en Java mediante try, catch, finally, throw y excepciones personalizadas."
slug: "excepciones-y-robustez"
category: "fundamentos-poo"
subcategory: "robustez"
type: "concept"
level: "beginner"
order: 13
draft: false
status: "published"
estimatedMinutes: 20
languages:
  - java
prerequisites:
  - "fundamentos/atributos-metodos-y-constructores"
  - "fundamentos/encapsulamiento"
  - "fundamentos/colecciones-de-objetos"
related:
  - "fundamentos/pruebas-unitarias"
tags:
  - "excepciones"
  - "try"
  - "catch"
  - "throw"
  - "robustez"
learningObjectives:
  - "Diferenciar errores, excepciones comprobadas y no comprobadas."
  - "Usar try, catch, finally, throw y throws para expresar y gestionar fallos."
  - "Crear excepciones específicas y evitar silenciar errores."
sources:
  - "Oracle. The Java Tutorials: Exceptions. https://docs.oracle.com/javase/tutorial/essential/exceptions/"
---

# Excepciones y robustez

> **En una frase:** una excepción comunica que una operación no pudo completarse según su contrato y permite responder al problema en un nivel que pueda manejarlo.

## ¿Qué aprenderás?

- Identificar excepciones comprobadas y no comprobadas.
- Propagar o capturar excepciones según quién pueda resolverlas.
- Validar entradas y definir excepciones de dominio sin ocultar fallos.

## 1. El problema que queremos resolver

Si un retiro recibe un importe negativo, devolver silenciosamente un saldo incorrecto oculta el defecto. Si el programa intenta abrir un archivo inexistente, continuar como si hubiera leído datos válidos puede causar errores más difíciles de diagnosticar. Una excepción hace explícito el fallo y su contexto.

## 2. Conceptos esenciales

Una **excepción** es un objeto que representa una condición anómala. `Error` representa problemas graves de la JVM o del entorno que normalmente una aplicación no debería intentar recuperar. Las excepciones comprobadas derivan de `Exception` pero no de `RuntimeException`; Java exige capturarlas o declararlas con `throws`. Las no comprobadas derivan de `RuntimeException`; suelen representar errores de programación o condiciones que una API documenta sin exigir captura.

`throw` lanza una instancia. `throws` declara que un método puede propagar excepciones. `try` delimita código que podría fallar; `catch` maneja tipos seleccionados; `finally` se ejecuta al abandonar el bloque normalmente o por excepción, pero no es la opción preferida para cerrar recursos: usa *try-with-resources* con recursos `AutoCloseable`.

## 3. Ejemplo: preservar una regla del dominio

```java
class SaldoInsuficienteException extends Exception {
    SaldoInsuficienteException(String mensaje) {
        super(mensaje);
    }
}

class Cuenta {
    private double saldo;

    Cuenta(double saldoInicial) {
        if (saldoInicial < 0) {
            throw new IllegalArgumentException("El saldo no puede ser negativo");
        }
        saldo = saldoInicial;
    }

    public void retirar(double monto) throws SaldoInsuficienteException {
        if (monto <= 0) {
            throw new IllegalArgumentException("El monto debe ser positivo");
        }
        if (monto > saldo) {
            throw new SaldoInsuficienteException("Fondos insuficientes");
        }
        saldo -= monto;
    }

    public double getSaldo() {
        return saldo;
    }
}
```

El constructor y el método preservan el estado válido. `IllegalArgumentException` señala un argumento inválido; la excepción comprobada representa una condición de negocio que el llamador debe decidir cómo tratar.

## 4. Gestionar o propagar

```java
try {
    cuenta.retirar(50);
    System.out.println(cuenta.getSaldo());
} catch (SaldoInsuficienteException ex) {
    System.out.println("No se pudo completar el retiro: " + ex.getMessage());
}
```

Captura una excepción donde exista una respuesta útil: informar al usuario, reintentar de forma segura o traducir a una capa superior. Si no puedes resolverla, propágala; evita `catch (Exception)` vacío o retornar un valor que parezca éxito.

## 5. Excepciones personalizadas

Crea una excepción propia cuando nombre una condición significativa para quienes usan la API. Hereda de `Exception` si el llamador debe manejarla o de `RuntimeException` si el contrato no requiere captura, siguiendo una decisión coherente del proyecto. No crees tipos de excepción para cada validación trivial.

## 6. Errores frecuentes

- **Capturar y descartar:** pierde información y hace que el programa parezca funcionar.
- **Usar excepciones para flujo normal:** verifica una condición normal antes de lanzarlas.
- **Lanzar una excepción genérica sin contexto:** dificulta decidir cómo actuar.
- **Usar `finally` para cerrar cualquier recurso:** `try-with-resources` cierra de forma más fiable recursos autocerrables.

## 7. Ejercicio práctico

### Enunciado

Implementa `reservar(int disponibles, int cantidad)` que rechace cantidades no positivas y cantidades mayores que las existencias. Define qué error es argumento inválido y cuál comunica indisponibilidad.

<details>
<summary>Mostrar pista</summary>

Usa `IllegalArgumentException` si cantidad es menor o igual a cero; comunica que no hay suficientes unidades con una excepción cuyo contrato permita al llamador gestionarlo.
</details>

## 8. Resumen y comprensión

- Lanza fallos con `throw`, declara los propagados con `throws` y captura solo cuando haya una respuesta útil.
- Las excepciones comprobadas exigen tratamiento o declaración; las no comprobadas no.
- No ocultes errores ni reemplaces fallos con resultados ambiguos.

1. ¿Qué diferencia hay entre `throw` y `throws`?
2. ¿Quién debe capturar una excepción?
3. ¿Por qué una captura vacía vuelve menos robusto al sistema?

## 9. Continúa aprendiendo

- **Requisito previo:** [Encapsulamiento](/lecciones/encapsulamiento/).
- **Siguiente lección:** [Principios de buen diseño](/lecciones/principios-de-buen-diseno/).

## 10. Fuente

- [Oracle. The Java Tutorials: Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/).
