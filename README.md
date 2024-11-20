🖼️ Unsplash Image Search - Proyecto con Nginx y Docker 🚀
Este proyecto te permite buscar y visualizar fotos de alta calidad a través de la API de Unsplash. Todo está alojado en un contenedor Docker con Nginx, ofreciendo un servidor web ultra rápido y eficiente. ¡Perfecto para aprender sobre contenedores y APIs en un solo proyecto!

🌟 Características
Búsqueda de Imágenes: Realiza búsquedas y navega a través de las hermosas fotos de Unsplash.
Frontend Minimalista: Diseño simple y limpio con HTML, CSS y JavaScript.
Contenedor Docker: Toda la aplicación está contenida en un contenedor Docker, lo que facilita su despliegue en cualquier máquina.
Configuración de API: Las credenciales de la API de Unsplash se manejan de forma segura usando variables de entorno.
Rendimiento Óptimo: El servidor Nginx maneja el tráfico y sirve archivos estáticos con velocidad de rayo.
🔧 Tecnologías Utilizadas
Frontend:

HTML5
CSS3 (Con un toque minimalista)
JavaScript (para la interacción con la API)
Backend:

Nginx (Servidor web de alto rendimiento)
Contenedor:

Docker (para contenerizar la aplicación y garantizar que funcione en cualquier entorno)
🏁 Instalación y Ejecución
¡Sigue estos pasos y en menos de 5 minutos tendrás todo funcionando!
1. Clonar el Repositorio
  git clone [https://github.com/tu-usuario/unsplash-image-search.git](https://github.com/Migumar94/Unsplash)

2. Configuración de Variables
  Modifica las variables del archivo config.js con tus credenciales. 

3. Ejecutar la Aplicación
  docker-compose up --build -d

¡Y listo! Ahora puedes abrir http://localhost:8080 en tu navegador y empezar a buscar imágenes de Unsplash. 🌟

![Screenshot from 2024-11-20 16-53-44](https://github.com/user-attachments/assets/d0ea0d11-69e7-4812-a3c8-20e4ec5bcbf8)
