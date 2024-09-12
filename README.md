# 🎟️ Event Access Verifier

Este es un proyecto sencillo que permite verificar la entrada de un evento basándose en la edad ingresada. La aplicación determina si una persona puede ingresar sola, acompañada por un adulto, o si no se le permite la entrada, según las siguientes reglas:

- Si la edad es mayor a 18 años: ✅ **Acceso permitido**
- Si la edad está entre 12 y menor a 18 años: 🟡 **Acceso permitido solo con un adulto responsable**
- Si la edad es menor a 12 años: ❌ **Acceso denegado**

## 🛠️ Tecnologías Utilizadas

- [React](https://reactjs.org/) ⚛️ - Framework de JavaScript para construir interfaces de usuario.
- [Vite](https://vitejs.dev/) ⚡ - Herramienta de desarrollo rápido para construir aplicaciones de frontend.
- JavaScript 🟦 - Lenguaje de programación usado en la aplicación.
- Programación Orientada a Objetos (POO) 👨‍💻 - Enfoque usado para crear clases que gestionan el estado de los usuarios.

## 🚀 Funcionalidades

- **Verificación de Edad**: La aplicación evalúa la edad ingresada y toma decisiones sobre el acceso.
- **Arreglo de Usuarios**: Los usuarios permitidos se almacenan en un arreglo de objetos.
- **Colores de Tiquet**:
  - Verde 🟢 para mayores de 18 años.
  - Amarillo 🟡 para edades entre 12 y menor a 18 años.

## 📦 Instalación

1. Clona el repositorio:
```bash
   git clone https://github.com/antrugos/verifyPage.git
```
2. Navega a la carpeta del proyecto:
 ```bash
   cd verifypage
```

4. Instala las dependencias:
 ```bash
   npm install
```

6. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 📋 Uso
Ingresa una edad en el campo proporcionado y la aplicación te dirá si la persona puede ingresar al evento, además de registrar a los usuarios admitidos.

# ¡Gracias por revisar este proyecto! 👏
