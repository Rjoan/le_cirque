//DIAPORAMA

window.addEventListener('load', function opacite(){
    setInterval(delay, 4000);

  let diaporama = document.querySelector('#diaporama');
  let image1 = document.createElement('img');
  image1.id = 'image1';
  image1.src = 'https://images.unsplash.com/photo-1524309124783-00473b0bbd21?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3eed7436a3057e6cf40f1aa62c58b3a0&auto=format&fit=crop&w=500&q=60';
  image1.style.height = 900 + 'px';
  image1.style.width = 100 + '%';
  image1.style.borderRadius = 10 + 'px';

  let booleenCondition = true;
  let booleenCondition2 = false;
  diaporama.appendChild(image1);

  function delay(){

    let diaporama = document.querySelector('#diaporama');

    if (booleenCondition == true) {
      image1.src = 'https://images.unsplash.com/photo-1491339526372-c7112c8e37f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3da4812a474b270a21d497d2a3a1a025&auto=format&fit=crop&w=500&q=60';
      booleenCondition = false;
      booleenCondition2 = true;
      diaporama.appendChild(image1);

  }else if (booleenCondition == false && booleenCondition2 == true) {
    image1.src = 'https://images.unsplash.com/photo-1476611550464-4b94f060e1c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=77e2584321c9dd1d911c3f9ea869312a&auto=format&fit=crop&w=500&q=60';
    booleenCondition2 = false;
    diaporama.appendChild(image1);

  }else if(booleenCondition2 == false){
    image1.src = 'https://images.unsplash.com/photo-1524309124783-00473b0bbd21?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3eed7436a3057e6cf40f1aa62c58b3a0&auto=format&fit=crop&w=500&q=60';
    booleenCondition = true;
    booleenCondition2 = false;
    diaporama.appendChild(image1);

  }else{
    image1.src = 'https://images.unsplash.com/photo-1524309124783-00473b0bbd21?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3eed7436a3057e6cf40f1aa62c58b3a0&auto=format&fit=crop&w=500&q=60';
    diaporama.appendChild(image1);
  }
  }
})



//OPEN - CLOSE ONGLET

let listenerH2 = document.querySelectorAll('h2');
for(let i = 0; i < listenerH2.length; i++){
  let listenner = listenerH2[i];
  let verification = true;
    listenner.addEventListener('click', function(){
      if(listenner && verification === true){
        listenner = listenerH2[i].nextSibling.nextSibling;
        listenner.style.display = 'none';
        verification = false;
      }else if(listenner && verification === false){
        listenner = listenerH2[i].nextSibling.nextSibling;
        listenner.style.display = 'block';
        verification = true;
      }

})
}

//API GOOGLE MAP

    let map;
      function initMap() {
        let paris = {lat: 48.866667, lng:  2.333333};
         map = new google.maps.Map(document.getElementById('map'), {
          center: paris,
          zoom: 13
        });
        let position_maker = new google.maps.Marker({position: paris, map: map});

        let contentString = '<div id ="contentMap"><h1>Wild Circus sc </h1><p>Join us to the Wild Circus</p></div>';

        let infoWindow = new google.maps.InfoWindow({
          content: contentString
        });
        let marker = new google.maps.Marker({
        position: paris,
        map: map,
        title: 'Circus'
        });
        marker.addListener('click', function(){
          infoWindow.open(map, marker);
          
        });
      }

    initMap();
//REGEX FOR FORM

document.getElementById('email').addEventListener('blur', function(e){

  let regexEmail = /.+@.+\.+/;
  let validationEmail = '';

  if(!regexEmail.test(e.target.value)){
    validationEmail = alert('Invalid Format');
  }
  document.getElementById('validation-email').textContent = validationEmail;
});
