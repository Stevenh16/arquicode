---
title: "Colecciones de objetos"
description: "Guarda y recorre objetos con arreglos y ArrayList, y aprende a definir igualdad, representación y orden en tus clases."
slug: "colecciones-de-objetos"
category: "fundamentos-poo"
subcategory: "colecciones"
type: "concept"
level: "beginner"
order: 12
draft: false
status: "published"
estimatedMinutes: 22
languages:
  - java
prerequisites:
  - "fundamentos/clases-objetos"
  - "fundamentos/organizacion-y-modularidad"
related:
  - "fundamentos/excepciones-y-robustez"
tags:
  - "array"
  - "arraylist"
  - "equals"
  - "hashcode"
  - "tostring"
learningObjectives:
  - "Crear, recorrer, buscar y modificar colecciones de referencias a objetos."
  - "Explicar la diferencia entre identidad y igualdad lógica."
  - "Implementar equals y hashCode de forma coherente y usar toString para representar un objeto."
sources:
  - "Oracle. The Java Tutorials: Collections. https://docs.oracle.com/javase/tutorial/collections/"
  - "Oracle. Java Platform SE 25 API: Object. https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html"
---

# Colecciones de objetos

> **En una frase:** una colección permite trabajar con grupos de referencias a objetos mediante operaciones definidas, sin administrar manualmente cada posición.

## ¿Qué aprenderás?

- Elegir entre un arreglo de tamaño fijo y un `ArrayList` que puede crecer.
- Recorrer, buscar, agregar y eliminar elementos.
- Distinguir identidad de igualdad lógica y sobrescribir `equals`, `hashCode` y `toString` con coherencia.

## 1. Arreglos y listas

Un **arreglo** tiene tamaño fijo después de crearse. `ArrayList<E>` implementa una lista redimensionable del framework de colecciones. El parámetro `E` indica el tipo de elemento; los genéricos hacen que el compilador revise el tipo. En colecciones de objetos se guardan referencias; asignar una colección a otra variable no clona automáticamente esos objetos.

## 2. Ejemplo práctico

```java
import java.util.ArrayList;
import java.util.List;

class Producto {
    private final String codigo;
    private final String nombre;

    Producto(String codigo, String nombre) {
        if (codigo == null || codigo.isBlank() || nombre == null || nombre.isBlank()) {
            throw new IllegalArgumentException("Código y nombre son obligatorios");
        }
        this.codigo = codigo;
        this.nombre = nombre;
    }

    @Override
    public boolean equals(Object otro) {
        if (this == otro) return true;
        if (!(otro instanceof Producto producto)) return false;
        return codigo.equals(producto.codigo);
    }

    @Override
    public int hashCode() {
        return codigo.hashCode();
    }

    @Override
    public String toString() {
        return codigo + ": " + nombre;
    }
}

class Main {
    public static void main(String[] args) {
        List<Producto> productos = new ArrayList<>();
        productos.add(new Producto("A1", "Cuaderno"));
        productos.add(new Producto("B2", "Lápiz"));

        for (Producto producto : productos) {
            System.out.println(producto);
        }

        boolean encontrado = productos.contains(new Producto("A1", "Otro nombre"));
        System.out.println("¿Está A1? " + encontrado);
        productos.remove(new Producto("B2", "Lápiz"));
    }
}
```

`equals` define igualdad de dominio por código; `hashCode` usa el mismo dato para que sea coherente. La salida muestra ambos productos y luego `¿Está A1? true`.

La variable `List` depende de una interfaz, mientras `ArrayList` es la implementación elegida. `contains` y `remove(Object)` consultan la igualdad definida por `equals`.

## 3. Identidad, igualdad y orden

`==` compara si dos referencias apuntan al mismo objeto. `equals` debe expresar igualdad lógica según las reglas de la clase. Si se sobrescribe `equals`, se debe sobrescribir `hashCode` para que objetos iguales tengan el mismo hash, especialmente al usarlos en estructuras basadas en hash. No incluyas en la igualdad campos mutables que puedan cambiar mientras el objeto está en un `HashSet` o como clave de un `HashMap`.

`toString` ofrece una representación legible para registros y depuración; no sustituye un formato de serialización estable. Para ordenar, define un comparador (`Comparator`) o un orden natural (`Comparable`) cuando haya un criterio único y coherente.

## 4. Operaciones habituales

- **Agregar:** `lista.add(elemento)`.
- **Recorrer:** bucle mejorado `for (Producto p : lista)`.
- **Buscar:** `contains` según `equals`, o recorrer para un criterio específico.
- **Eliminar:** `remove(indice)` elimina por posición; `remove(objeto)` elimina por igualdad.
- **Actualizar:** reemplaza con `set(indice, elemento)` cuando la posición sea conocida.

No elimines elementos de una lista con un `for-each` que la modifica directamente; usa un iterador o las operaciones apropiadas para evitar `ConcurrentModificationException`.

## 5. Errores frecuentes

- **Asumir que `==` compara los campos:** compara identidad de referencia.
- **Sobrescribir `equals` pero no `hashCode`:** rompe expectativas de colecciones hash.
- **Modificar el tamaño mientras se recorre con `for-each`:** puede generar una excepción de modificación concurrente.
- **Usar un arreglo si la cantidad cambia continuamente:** considera `ArrayList`; para tamaño fijo, un arreglo puede ser más sencillo.

## 6. Ejercicio práctico

### Enunciado

Crea una lista de `Estudiante`, busca por identificador, elimina un estudiante y define igualdad usando ese identificador. Explica qué ocurriría si `hashCode` usara un atributo diferente.

<details>
<summary>Mostrar pista</summary>

Implementa `equals` y `hashCode` usando el mismo identificador, que debería ser inmutable. `contains` puede buscar con una instancia temporal que tenga ese identificador.
</details>

## 7. Resumen y comprensión

- `ArrayList` administra una secuencia redimensionable; un arreglo tiene tamaño fijo.
- Las colecciones guardan referencias y consultan `equals` para varias búsquedas y eliminaciones.
- Mantén coherentes `equals` y `hashCode`; usa `toString` como representación legible.

1. ¿Qué compara `==` y qué expresa `equals`?
2. ¿Por qué objetos iguales deben producir el mismo `hashCode`?
3. ¿Qué variante de `remove` elimina por índice?

## 8. Continúa aprendiendo

- **Requisito previo:** [Clases y objetos](/lecciones/clases-objetos/).
- **Siguiente lección:** [Excepciones y robustez](/lecciones/excepciones-y-robustez/).

## 9. Fuentes

- [Oracle. The Java Tutorials: Collections](https://docs.oracle.com/javase/tutorial/collections/).
- [Oracle. Java Platform SE: Object](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/Object.html).
