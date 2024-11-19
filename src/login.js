const CLIENT_ID = 'I2ZwM9meo8GO0fVDJg0m-HbZm7GZbTL8teL8QwNQYMQ';  // Reemplázalo con tu Access Key de Unsplash
const CLIENT_SECRET = 'Xhsf-4aXC4Fdw5cZddE4Kq_JbeYd2rDLWDc-x_KH5Eo';  // Reemplázalo con tu Secret Key de Unsplash
const REDIRECT_URI = 'http://localhost:8080/callback';  // Debe coincidir con el Redirect URI de tu aplicación en Unsplash


const getImages = async () => {
	try {
		// Determinar si hay un token de acceso en localStorage
		const token = localStorage.getItem('unsplash_access_token');

		// Configurar las cabeceras para la solicitud
		const headers = token
			? { Authorization: `Bearer ${token}` } // Usar token si está disponible
			: {}; // Sin cabeceras si no estás logado

		// Realizar la solicitud
		const response = await fetch(
			`https://api.unsplash.com/photos?client_id=${!token ? CLIENT_ID : ''}`,
			{ headers }
		);

		if (!response.ok) {
			throw new Error(`Error al obtener imágenes: ${response.status}`);
		}

		// Procesar las imágenes y mostrarlas en el DOM
		const images = await response.json();
		console.log('Images:', images);

		const gallery = document.getElementById('gallery');
		gallery.innerHTML = ''; // Limpiar la galería antes de añadir nuevas imágenes
		images.forEach((image) => {
			const img = document.createElement('img');
			img.src = image.urls.regular;
			img.alt = image.description || 'Unsplash Image';
			gallery.appendChild(img);
		});
	} catch (error) {
		console.error('Error fetching images:', error);
	}
};
//funcion para buscar imagenes

const searchImages = async (search) => {
	try {
		// Determinar si hay un token de acceso en localStorage
		const token = localStorage.getItem('unsplash_access_token');

		// Configurar las cabeceras para la solicitud
		const headers = token
			? { Authorization: `Bearer ${token}` } // Usar token si está disponible
			: {}; // Sin cabeceras si no estás logado

		// Realizar la solicitud
		const response = await fetch(
			`https://api.unsplash.com/search/photos?query=${search}&client_id=${!token ? CLIENT_ID : ''}`,
			{ headers }
		);

		if (!response.ok) {
			throw new Error(`Error al obtener imágenes: ${response.status}`);
		}

		// Procesar las imágenes y mostrarlas en el DOM
		const images = await response.json();
		console.log('Images:', images);

		const gallery = document.getElementById('gallery');
		gallery.innerHTML = ''; // Limpiar la galería antes de añadir nuevas imágenes
		images.results.forEach((image) => {
			const img = document.createElement('img');
			img.src = image.urls.regular;
			img.alt = image.description || 'Unsplash Image';
			gallery.appendChild(img);
		});
	} catch (error) {
		console.error('Error fetching images:', error);
	}

};


// Elemento del botón
document.addEventListener('DOMContentLoaded', () => {
	const loginButton = document.getElementById('btn');
	
	// Función que maneja el login
	loginButton.addEventListener('click', () => {
		console.log('Login button clicked');
		// Redirigir al usuario a la página de autorización de Unsplash
		const authURL = `https://unsplash.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=public+read_user`;
		
		// Redirige al usuario a la URL de autorización
		window.location.href = authURL;
	});
	const logoutButton = document.getElementById('logout');
	logoutButton.addEventListener('click', () => {
		window.localStorage.clear();
		window.location.href = "http://localhost:8080";
	});
	
	//si gallery esta vacio que llam e la funcion getImages
	const buscar = document.getElementById('btnBuscar');
	buscar.addEventListener('click',() => {
		//obtener el valor del input
		const search = document.getElementById('buscar').value;
		console.log('Search:', search);
		searchImages(search);
	});
    const gallery = document.getElementById('gallery');
    if (gallery && !gallery.innerHTML.trim()) {
		getImages();
    }
	if(localStorage.getItem('unsplash_access_token')){
		console.log('Token Index:', localStorage.getItem('unsplash_access_token'));
		document.getElementById('btn').style.display = 'none';
		document.getElementById('logout').style.display = 'inline';
	}
});


// Función para manejar la redirección después de la autorización


// Verifica si estamos en la página de callback
if (window.location.pathname.includes('/callback')) {
    console.log('Callback page');
	handleCallback();
}


