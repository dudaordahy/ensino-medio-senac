function getLocation() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = ""; // Limpa mensagens de erro anteriores
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        errorMessage.textContent = "Geolocalização não é suportada pelo seu navegador.";
    }
}
 
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    document.getElementById('location').value =
        "Latitude: " + latitude + ", Longitude: " + longitude;
 
    // Chama a API Nominatim para geocodificação reversa
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`)
        .then(response => response.json())
        .then(data => {
            const address = data.address;
            const city = address.city || address.town || address.village || "Cidade não encontrada";
            const state = address.state || "Estado não encontrado";
            const country = address.country || "País não encontrado";
            document.getElementById('address').value = `${city}, ${state}, ${country}`;
        })
        .catch(error => {
            document.getElementById('address').value = "Erro ao obter a localidade.";
            console.error('Erro:', error);
        });
}
 
function showError(error) {
    const errorMessage = document.getElementById('error-message');
    switch(error.code) {
        case error.PERMISSION_DENIED:
            errorMessage.textContent = "Usuário negou a solicitação de Geolocalização.";
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage.textContent = "Informações de localização não estão disponíveis.";
            break;
        case error.TIMEOUT:
            errorMessage.textContent = "A solicitação para obter a localização expirou.";
            break;
        case error.UNKNOWN_ERROR:
            errorMessage.textContent = "Ocorreu um erro desconhecido.";
            break;
    }
}