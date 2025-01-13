React API Project
Este proyecto es una aplicación web creada con React que consume una API pública para mostrar datos y permite la navegación a través de rutas, así como la implementación de manejo de errores y estilos personalizados con Bootstrap.

Características
Uso de Vite para la generación del proyecto.
Consumo de una API pública (Chuck Norris Jokes API).
Implementación de rutas con React Router.
Manejo de errores mediante Error Boundaries.
Estilos personalizados con Bootstrap.
Uso de Hooks como useState y useEffect para manejar el estado y efectos secundarios.
Requisitos previos
Asegúrate de tener instalados los siguientes programas:

Node.js (versión 16 o superior)
npm (se instala con Node.js)
Git (para clonar el repositorio si es necesario)
Instalación
Clona este repositorio:

bash
Copiar código
git clone https://github.com/ginopiccolini/proyecto-5-react-api-udd.git
Accede al directorio del proyecto:

bash
Copiar código
cd proyecto-api-react
Instala las dependencias:

bash
Copiar código
npm install
Uso
Inicia el servidor de desarrollo:

bash
Copiar código
npm run dev
Abre el navegador y accede a la URL que se muestra, generalmente http://localhost:5173.

Estructura del proyecto
php
Copiar código
proyecto-api-react/
├── public/               # Archivos públicos (favicon, etc.)
├── src/
│   ├── components/       # Componentes reutilizables (DataList, Header, etc.)
│   ├── styles/           # Archivos de estilo CSS
│   ├── App.jsx           # Componente principal
│   ├── ErrorBoundary.jsx # Manejo de errores en la app
│   ├── main.jsx          # Punto de entrada principal
│   └── index.css         # Estilos personalizados globales
├── .gitignore            # Archivos y carpetas ignorados por Git
├── package.json          # Dependencias y scripts del proyecto
├── README.md             # Descripción del proyecto
└── vite.config.js        # Configuración de Vite
Rutas
/: Página principal donde se muestra un botón para obtener un chiste aleatorio de Chuck Norris.
/info: Página secundaria con información sobre la aplicación.
Dependencias principales
React: Biblioteca para construir interfaces de usuario.
React Router DOM: Para gestionar las rutas de la aplicación.
Bootstrap: Framework de CSS para estilos.
PropTypes: Para validación de props en los componentes.
API Utilizada
La aplicación utiliza la API de Chuck Norris Jokes.

Ejemplo de endpoint:

https://api.chucknorris.io/jokes/random: Devuelve un chiste aleatorio de Chuck Norris.

