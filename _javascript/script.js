function efeito(){
    var baner = document.getElementById("baner");
    baner.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    var slogan = document.getElementById('slogan');
    slogan.style.opacity = 1;
}

function myMap(){
    var uluru = {lat: -10.853753, lng: -37.056657};
  var map = new google.maps.Map(
      document.getElementById('googleMap'), {zoom: 17, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}

// var cont = 1;

function efeitoMenu(){
    console.log("entrou");
    var menu = document.getElementById("menu");
    /*
    if(cont == 0){
        console.log(menu.classList.toString())
        if(menu.classList.contains("descer")){
            menu.classList.replace("descer","subir")
        }
        else{
            menu.classList.add("subir")
        }
        cont = 1;
    }
    else{
        if(menu.classList.contains("subir")){
            menu.classList.replace("subir","descer")
        }
        else{
            menu.classList.add("descer")
        }      
        cont = 0;
    }
    */
    if(menu.classList.contains("subir")){
        menu.classList.replace("subir","descer")
    }
    else{
        menu.classList.replace("descer", "subir")
    }
    console.log(menu.classList.toString())
    
}