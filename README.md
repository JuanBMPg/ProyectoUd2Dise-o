# Proyecto Hospital BuenaVida

## 👤 Nombre del Alumno
**Juan Benítez Muñoz**

## 📋 Título del Proyecto
**Sistema de Gestión Hospitalaria - Hospital BuenaVida**

## 🌐 URL del Despliegue en GitHub Pages
[https://juanbmpg.github.io/ProyectoUd2Dise-o/](https://juanbmpg.github.io/ProyectoUd2Dise-o/)

### Módulos Desplegados:
- **Urgencias (Tailwind CSS)**: [https://juanbmpg.github.io/ProyectoUd2Dise-o/urgencias/](https://juanbmpg.github.io/ProyectoUd2Dise-o/urgencias/)
  - Dashboard de urgencias
  - Registro de pacientes
  - Sistema de triaje
  
- **Enfermería (SASS/SCSS)**: [https://juanbmpg.github.io/ProyectoUd2Dise-o/enfermeria/](https://juanbmpg.github.io/ProyectoUd2Dise-o/enfermeria/)
  - Gestión de enfermería
  - Hoja de medicación
  - Mapa de camas

## 📁 Estructura del Proyecto

```
ProyectoUd2Diseño/
├── urgencias/                      # Módulo de Urgencias (desplegado)
│   ├── index.html                  # Dashboard de urgencias
│   ├── registro.html               # Formulario de registro de pacientes
│   ├── triaje.html                 # Sistema de evaluación de triaje
│   └── assets/                     # CSS y JS compilados con Tailwind
│
├── enfermeria/                     # Módulo de Enfermería (desplegado)
│   ├── index.html                  # Página principal de enfermería
│   ├── hoja-medicacion.html        # Gestión de medicación
│   ├── mapa-camas.html             # Visualización de camas
│   └── assets/                     # CSS y JS compilados con SASS
│
├── urgencias-tailwind-vite/        # Código fuente del módulo Urgencias
│   ├── src/
│   │   └── main.css                # Importación de Tailwind CSS
│   ├── index.html
│   ├── registro.html
│   ├── triaje.html
│   ├── package.json
│   └── vite.config.js              # Configuración de Vite + Tailwind
│
├── enfermeria-sass-vite/           # Código fuente del módulo Enfermería
│   ├── styles/
│   │   ├── main.scss               # Archivo principal SASS
│   │   ├── _variables.scss         # Variables de diseño
│   │   ├── _mixins.scss            # Mixins reutilizables
│   │   ├── _base.scss              # Estilos base
│   │   ├── _layout.scss            # Layout del sitio
│   │   ├── _components.scss        # Componentes
│   │   ├── _forms.scss             # Estilos de formularios
│   │   └── pages/                  # Estilos específicos por página
│   ├── index.html
│   ├── hoja-medicacion.html
│   ├── mapa-camas.html
│   ├── package.json
│   └── vite.config.js              # Configuración de Vite + SASS
│
├── css/
│   └── styles.css                  # Estilos CSS vanilla del proyecto base
│
├── *.html                          # Páginas HTML del proyecto base
└── README.md                       # Este archivo
```

## 🛠️ Tecnologías Utilizadas

### Módulo de Urgencias
- **Framework CSS**: Tailwind CSS v4.1.17
- **Build Tool**: Vite v7.2.5 (rolldown-vite)
- **Características**:
  - Utility-first CSS
  - Sistema de diseño consistente
  - Responsive design con breakpoints
  - Componentes optimizados

### Módulo de Enfermería
- **Preprocesador CSS**: SASS/SCSS v1.94.2
- **Build Tool**: Vite v7.2.5 (rolldown-vite)
- **Características**:
  - Variables y mixins SASS
  - Estructura modular de estilos
  - Anidación de selectores
  - Funciones de color personalizadas

### Proyecto Base
- **HTML5** semántico
- **CSS3** vanilla
- **JavaScript** ES6+

## 🚀 Comandos de Desarrollo

### Módulo Urgencias (Tailwind)
```bash
cd urgencias-tailwind-vite
npm install
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
```

### Módulo Enfermería (SASS)
```bash
cd enfermeria-sass-vite
npm install
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
```

## 📝 Notas para el Profesor

### Funcionalidades Implementadas
- ✅ **Módulo de Urgencias con Tailwind CSS**: Tres páginas completamente funcionales con sistema de triaje por colores (rojo, naranja, amarillo, verde)
- ✅ **Módulo de Enfermería con SASS**: Gestión de medicación y mapa de camas con estilos modulares
- ✅ **Responsive Design**: Todas las páginas adaptadas a diferentes dispositivos
- ✅ **Build System**: Configuración de Vite para compilación y despliegue automático
- ✅ **GitHub Pages**: Despliegue automático con estructura organizada por módulos

### Datos de Ejemplo
- Los pacientes mostrados en las tablas son datos de ejemplo para demostración
- El sistema de triaje es simulado con datos estáticos
- Solamente hay un paciente con navegación completa implementada

### Accesibilidad
- Se han corregido todos los problemas de contraste de color
- Texto legible en todos los campos de formulario
- Estados hover y focus claramente visibles

### Arquitectura
- Cada módulo está separado en su propia carpeta para facilitar el mantenimiento
- Los estilos están compilados y optimizados para producción
- Las rutas están configuradas correctamente para GitHub Pages