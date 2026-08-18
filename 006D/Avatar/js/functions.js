   fetch('https://cl.dolarapi.com/v1/cotizaciones/usd')
  .then(respuesta => respuesta.json())
  .then(datos => document.getElementById("saludo").innerHTML=datos.ultimoCierre)
  .catch(error => console.error('Hubo un error:', error));
    console.log()
    // document.getElementById("saludo").innerHTML="Se juega mañana por la noche?";

    