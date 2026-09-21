# 🎮 Nexora Gaming

![Nexora Gaming]<img width="1225" height="945" alt="ChatGPT Image 16 sept 2026, 09_15_10" src="https://github.com/user-attachments/assets/48332d1e-8cee-4a71-af34-a756266fb827" />


## 📌 Descripción

**Nexora Gaming** es una plataforma web de venta de videojuegos desarrollada con React y TypeScript.

El proyecto permite a los usuarios explorar un catálogo de videojuegos, buscar títulos, consultar sus detalles, agregar juegos al carrito y gestionar sus compras.

Además, cuenta con un área de administración desde la cual se pueden gestionar los videojuegos disponibles en la plataforma.

La interfaz fue diseñada con una estética gamer moderna, utilizando principalmente tonos oscuros, naranja y dorado como colores representativos de la marca.

---

## 🎯 Objetivo del proyecto

El objetivo es desarrollar una tienda de videojuegos funcional, responsive y fácil de utilizar, aplicando los conocimientos adquiridos durante el desarrollo del proyecto.

La aplicación cuenta con diferentes funcionalidades para usuarios visitantes y administradores.

---

## 🚀 Funcionalidades

### 👤 Usuarios

- Registro de nuevos usuarios.
- Inicio y cierre de sesión.
- Diferenciación entre usuarios visitantes y administradores.
- Persistencia de la sesión mediante `localStorage`.

### 🎮 Catálogo

- Visualización de videojuegos disponibles.
- Búsqueda de videojuegos.
- Visualización de información de cada juego.
- Visualización de precio, género, descripción e imagen.
- Acceso a la página de detalle de cada videojuego.

### 🛒 Carrito

- Agregar videojuegos al carrito.
- Evitar agregar el mismo videojuego más de una vez.
- Eliminar videojuegos del carrito.
- Vaciar el carrito.
- Visualizar cantidad de juegos.
- Calcular el subtotal y total de la compra.
- Confirmación de compra.
- Carrito independiente para cada usuario.

### ⚙️ Administración

- Acceso restringido para usuarios con rol de administrador.
- Agregar videojuegos.
- Editar videojuegos.
- Eliminar videojuegos.
- Visualizar los videojuegos disponibles.

### ❌ Página 404

- Página de error personalizada.
- Diseño acorde a la identidad visual de Nexora Gaming.
- Acceso para volver al inicio.
- Manejo de rutas inexistentes.
- Diseño responsive.

### 📱 Diseño responsive

La interfaz se adapta a:

- 💻 Computadoras
- 📱 Celulares
- 📲 Tablets

---

## 🛠️ Tecnologías utilizadas

### Frontend

- React
- TypeScript
- Vite
- React Router
- CSS
- Ant Design
- Lucide React
- React Icons

### Herramientas

- Git
- GitHub
- Visual Studio Code
- pnpm

### Almacenamiento

Se utiliza `localStorage` para mantener información como:

- Usuarios registrados.
- Usuario actualmente autenticado.
- Catálogo de videojuegos.
- Carrito de cada usuario.

---

## 🎨 Identidad visual

Nexora Gaming utiliza una estética inspirada en videojuegos y tecnología.

### 🎨 Paleta de colores

| Color | Código |
|------|--------|
| Fondo | `#0B0B0B` |
| Fondo secundario | `#111111` |
| Tarjetas | `#171717` |
| Blanco | `#FFFFFF` |
| Texto secundario | `#C9C9C9` |
| Gris | `#888888` |
| Naranja | `#FF7A00` |
| Naranja claro | `#FF9D3D` |
| Naranja oscuro | `#D95F00` |
| Dorado | `#D4AF37` |
| Dorado claro | `#F7D37A` |

### 🔤 Tipografías

- **Orbitron** → títulos y elementos destacados.
- **Exo 2** → textos generales.
- **Teko** → elementos destacados y banners.

---

## 🐺 Mascota

La identidad de Nexora Gaming está representada por un **lobo futurista**, utilizado como elemento visual de la marca y en diferentes secciones de la página.

---

## 📂 Estructura del proyecto

```text
src/
│
├── components/
│   ├── GameCard/
│   ├── Navbar/
│   ├── Footer/
│   └── ...
│
├── context/
│   ├── gameContext/
│   └── userContext/
│
├── hooks/
│   ├── useGame.ts
│   └── useUser.ts
│
├── pages/
│   ├── Home/
│   ├── Detail/
│   ├── SearchPage/
│   ├── Cart/
│   ├── Login/
│   ├── Register/
│   ├── Admin/
│   ├── About/
│   └── Error404/
│
├── utils/
│   ├── localstorage.ts
│   └── games.ts
│
├── App.tsx
└── main.tsx
