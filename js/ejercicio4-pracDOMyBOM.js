setInterval(() => {
    let fecha = new Date();
  
    let Semana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ];
    let Mes = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
  
    let fechaReloj = document.getElementById("fecha");
    fechaReloj.innerHTML = `${Semana[fecha.getDay()]} ${fecha.getDate()} de ${
      Mes[fecha.getMonth()]
    } del ${fecha.getFullYear()}`;
  
    // arreglar los valores de un digito
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let horas = fecha.getHours()

    let sufijo = ' AM';
    if(horas > 12){
        horas = horas - 12;
        sufijo = ' PM';
    }

    if(horas < 10){
        horas = '0'+ horas;
    }if(minutos < 10){
        minutos = '0'+ minutos;
    }if(segundos < 10){
        segundos = '0'+ segundos
    }

    let horaReloj = document.getElementById('hora')
    horaReloj.innerHTML = `${horas}:${minutos}:${segundos}${sufijo}`

    // document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos+sufijo;
  }, 1000);
