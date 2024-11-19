const CLIENT_ID = 'I2ZwM9meo8GO0fVDJg0m-HbZm7GZbTL8teL8QwNQYMQ';  // Reemplázalo con tu Access Key de Unsplash
const CLIENT_SECRET = 'Xhsf-4aXC4Fdw5cZddE4Kq_JbeYd2rDLWDc-x_KH5Eo';  // Reemplázalo con tu Secret Key de Unsplash
const REDIRECT_URI = 'http://localhost:8080/callback';

const handleCallback = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    
	const code = urlParams.get("code");

    if (code) {
        try {
            console.log("Code:", code);
			//Manda a https://unsplash.com/oauth/token con post el code para generar el token
			let token = await fetch("https://unsplash.com/oauth/token", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: new URLSearchParams({
					client_id: CLIENT_ID,
					client_secret: CLIENT_SECRET,
					redirect_uri: REDIRECT_URI,
					code: code,
					grant_type: "authorization_code",
				}),
			});
			if(token.ok){
				console.log("Token generado correctamente");
				let tokenJson = await token.json();
				console.log("Token:", tokenJson);
				console.log("code:", code);
				localStorage.setItem("unsplash_access_token", tokenJson.access_token);
				localStorage.setItem("unsplash_refresh_token", tokenJson.refresh_token);
				localStorage.setItem("unsplash_token_type", tokenJson.token_type);
				localStorage.setItem("unsplash_expires_in", tokenJson.expires_in);
				localStorage.setItem("unsplash_scope", tokenJson.scope);
				localStorage.setItem("unsplash_created_at", tokenJson.created_at);
				window.location.href = "http://localhost:8080";
			}
        } catch (error) {
            console.error("Error en el login:", error);
        }
    } else {
        console.log("No se encontró un código en la URL");
    }
};

handleCallback();