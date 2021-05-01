import * as cg from './customGestures.js'
var car;
var carActive = false;
var carBlocked = false;
var walkTiming = 0;
var inputs;
var carSpeed = 0;
var cambios = 0;
var img;
var interval;
var caracteres = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];
var securityCode = "";
var amountInputs = 5;
var myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"), {
  keyboard: false,
});
var handposeModel;
var GE;

var accessRegister = [];

var txtRmd = document.getElementById("txtRmd");
var phase1 = document.getElementById("phase1");
var flexRadioDefault1 = document.getElementById("flexRadioDefault1");
var flexRadioDefault2 = document.getElementById("flexRadioDefault2");
var phase21 = document.getElementById("phase2-1");
var phase22 = document.getElementById("phase2-2");
var sc = document.getElementById("sc");
var username = document.getElementById("username");
var btnPhase1 = document.getElementById("btnPhase1");
var btnPhase2 = document.getElementById("btnPhase2");
var mfoot = document.getElementById("mfoot");
var btnClose = document.getElementById("btnClose");
var btnCancel = document.getElementById("btnCancel");
var activeGR = document.getElementById("activeGR");
var showSC = document.getElementById("showSC");
var showRegister = document.getElementById("showRegister");
var tableRegister = document.getElementById("tableRegister");
var register = document.getElementById("register");

for (let i = 0; i < 8; i++) {
  securityCode =
    securityCode +
    caracteres[
      Math.floor(Math.random() * (0 - caracteres.length)) + caracteres.length
    ];
}

class simulator extends Phaser.Scene {
  constructor() {
    super({ key: "simulatorScene" });
  }
  async preload() {
    this.load.image("car", "/images/car2.png");

    await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
    await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
    await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
    await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");

  }

  async create() {

    inputs = [
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F),
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C),
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V),
      this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER),
    ];
    car = this.physics.add.sprite(0, 150, "car");
    car.setCollideWorldBounds(true);
   }

  update(time, delta) {
    if (myModal._isShown === false && carActive === false) {
      document.getElementById("modal-body").childNodes.forEach((c) => {
        if (c.style != undefined) {
          c.style.display = "none";
        }
      });

      mfoot.childNodes.forEach((c) => {
        if (c.style != undefined) {
          c.style.display = "none";
        }
      });

      document.getElementById('staticBackdropLabel').innerText = 'Acceder al sistema'
      phase1.style.display = "";
      flexRadioDefault1.checked = true;
      txtRmd.style.display = "";
      txtRmd.innerText = "Cómo desea acceder?:";
      btnCancel.style.display = "";
      btnPhase1.style.display = "";
    } else if(myModal._isShown === false && carActive === true){
      document.getElementById("modal-body").childNodes.forEach((c) => {
        if (c.style != undefined) {
          c.style.display = "none";
        }
      });

      mfoot.childNodes.forEach((c) => {
        if (c.style != undefined) {
          c.style.display = "none";
        }
      });
      document.getElementById('staticBackdropLabel').innerText = 'Menu principal'
      showSC.checked = true;
      activeGR.disabled = true
      mainMenu.style.display = ''
      mfoot.style.display = ''
      btnCancel.style.display = ''
      btnPhase1.style.display = '';

    } else{

    }

    if (inputs[8].isDown && carActive === false) {
      if (carBlocked === false) {
        myModal.show();
      } else {
        myModal.show();
        txtRmd.innerText =
          "El sistema anti-intrusos ha sido activado. " +
          "No es posible acceder al sistema a partir de un codigo de seguridad. " +
          "Se necesita reconocimiento facial.";
        phase1.style.display = "";
        btnCancel.style.display = "";
        btnPhase1.style.display = "";
        btnClose.style.display = "none";
        flexRadioDefault1.checked = true;
        flexRadioDefault2.disabled = true;
      }
    } else if (inputs[8].isDown && carActive === true) {
      myModal.show();
    } else {
    }

    if (carActive === true) {
      if (inputs[0].isDown && carSpeed <= cambios) {
        carSpeed += 10;
      } else if (inputs[1].isDown && carSpeed >= -30) {
        carSpeed -= 10;
      } else {
      }

      car.body.velocity.x = carSpeed * Math.cos((car.angle - 180) * 0.01745);
      car.body.velocity.y = carSpeed * Math.sin((car.angle - 180) * 0.01745);

      if (inputs[2].isDown)
        car.body.angularVelocity = -1000 * (carSpeed / 1000);
      else if (inputs[3].isDown)
        car.body.angularVelocity = 1000 * (carSpeed / 1000);
      else car.body.angularVelocity = 0;

      if (inputs[4].isDown) {
        if (carSpeed <= 0) {
          return;
        }
        carSpeed -= 10;
      }
      if (inputs[6].isDown) {
        if (this.time.now > walkTiming) {
          if (cambios >= 400) {
            return;
          }
          cambios += 40;
          walkTiming = this.time.now + 1000;
        }
      }

      if (inputs[5].isDown && carActive === true) {
        alert('Sistema apagado')
        carActive = false
      }
    } else {
      return;
    }

    
  }
}

btnPhase1.addEventListener("click", () => {
  if (carActive != true) {
    if (flexRadioDefault1.checked === true) {
      document.querySelectorAll('video')[1].style.display = 'none'
      txtRmd.innerText = "Iniciando camara...";
      phase1.style.display = "none";
      mfoot.style.display = "none";
      initFaceRecognition();
    } else if (flexRadioDefault2.checked == true) {
      txtRmd.innerText = "A continuacion, introduzca el codigo de seguridad:";
      btnPhase1.style.display = "none";
      btnPhase2.style.display = "";
      phase1.style.display = "none";
      phase22.style.display = "";
    } else {
      return;
    }
  } else{
    if (activeGR.checked === true) {
      gestureMode = true
      document.querySelectorAll('video')[0].style.display = 'none'
      txtRmd.style.display = ''
      txtRmd.innerText = "Iniciando camara...";
      mainMenu.style.display = 'none'
      mfoot.style.display = "none";
      initGestureRecognition();
    } else if(showSC.checked === true){
      alert('Codigo de seguridad = ' + securityCode)
    } else if (showRegister.checked === true) {
      mainMenu.style.display = 'none'
      btnPhase1.style.display = 'none'
      btnCancel.style.display = 'none'
      btnClose.style.display = ''
      register.style.display = ''

      for (var i = 1; i < tableRegister.rows.length; i++) {
        tableRegister.deleteRow(i);
      }
      for (let i = 0; i < accessRegister.length; i++) {
        const element = accessRegister[i];

        var row = tableRegister.insertRow(i + 1);
        var cell = row.insertCell(0);
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)
        var cell5 = row.insertCell(4)

        cell.innerText = i + 1
        cell2.innerText = element.accessType;
        cell3.innerText = element.dateAccess
        cell4.innerText = element.statusAccess
        cell5.innerText = element.user
      }
      
    } else{

    }
  }
});

btnPhase2.addEventListener("click", () => {
  if (username.value === '') {
    alert('Debe escribir su nombre')
    return;
  }
  if (sc.value === '') {
    alert('Debe escribir el codigo de seguridad');
    return;
  }

  if (sc.value === securityCode) {
    txtRmd.innerText =
      "Codigo de acceso correcto. Acceso al sistema autorizado. \nSe ha generado un nuevo codigo para un proximo acceso.";
    phase22.style.display = "none";
    btnPhase1.style.display = "none";
    btnPhase2.style.display = "none";
    btnCancel.style.display = "none";
    btnClose.style.display = "";
    carActive = true;
    amountInputs = 5;
    securityCode = "";
    for (let i = 0; i < 8; i++) {
      securityCode =
        securityCode +
        caracteres[
          Math.floor(Math.random() * (0 - caracteres.length)) +
            caracteres.length
        ];
        sc.value = '';
      }
    var accessFormat = {
      accessType: 'Codigo de seguridad',
      dateAccess: getDate(),
      statusAccess: 'Valido',
      user: username.value
    }
    
    accessRegister.push(accessFormat)
    mensaje_ubicacion(username.value + ' ha accedido al sistema de tu vehiculo mediante codigo de seguridad')

    username.value = '';
  } else {

    if (amountInputs === 0) {
      txtRmd.innerText =
        "Se han hecho demasiados intentos, se ha activado el sistema anti-intrusos.";
      btnClose.style.display = "";
      btnPhase2.style.display = "none";
      btnCancel.style.display = "none";
      phase22.style.display = "none";
      sc.value = "";
      carBlocked = true;
      var accessFormat = {
        accessType: 'Codigo de seguridad',
        dateAccess: getDate(),
        statusAccess: 'invalido',
        user: username.value
      }
      amountInputs = 5
      accessRegister.push(accessFormat)
      mensaje_ubicacion('Tu vehiculo ha sido tratado de acceder sin autorizacion')
      username.value = '';
      return;
    }
    txtRmd.innerText =
    "Acceso denegado. " + "Intentos restantes= " + amountInputs;
    sc.value = "";
    amountInputs--;
    return;
  }
});

function initFaceRecognition() {
  phase21.style.display = "";
  navigator.getUserMedia(
    {
      video: true,
      audio: false,
    },
    (stream) => (document.querySelectorAll("video")[0].srcObject = stream),
    (err) => alert(err)
  );

}

function initGestureRecognition() {
  phase21.style.display = "";
  navigator.getUserMedia(
    {
      video: true,
      audio: false,
    },
    (stream) => (document.querySelectorAll("video")[1].srcObject = stream),
    (err) => alert(err)
  );

}

document.querySelectorAll("video")[0].addEventListener("playing", () => {
  txtRmd.innerText =
  "A continuacion, el sistema debe reconocer su rostro para acceder:";
  initFaceRecognition2();
 
});

document.querySelectorAll("video")[1].addEventListener("playing", () => {
    txtRmd.innerText =
    "Camara lista para reconocimiento de gestos:";
    initGestureRecognition2();
});

async function initFaceRecognition2() {
  img = document.createElement("img");
  const img2 = document.createElement("img");
  img.src = "/images/Jer-Face.jpg";
  img2.src = "/images/Jose-Face.jpg";
  const detection = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
  const detection2 = await faceapi.detectSingleFace(img2).withFaceLandmarks().withFaceDescriptor();
  
  const labeledDescriptors = [
    new faceapi.LabeledFaceDescriptors("Jeremy Solano", [
      detection.descriptor,
    ]),
    new faceapi.LabeledFaceDescriptors("Jose Cuevas", [
      detection2.descriptor,
    ]),
  ];
  const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors);
  interval = setInterval(async () => {

    const detection3 = await faceapi.detectSingleFace(
        document.querySelectorAll("video")[0],
        new faceapi.TinyFaceDetectorOptions()
      ).withFaceLandmarks().withFaceDescriptor();

    if (detection3 != undefined) {
      const bestMatch = faceMatcher.findBestMatch(detection3.descriptor);
      if (bestMatch.label === "unknown") {
        clearInterval(interval);
        interval = 0;
        txtRmd.innerText = "Su rostro no ha sido reconocido por el sistema.";
        phase21.style.display = "none";
        mfoot.style.display = "";
        btnPhase1.style.display = "none";
        btnPhase2.style.display = "none";
        btnCancel.style.display = "none";
        btnClose.style.display = "";

      } else {
        clearInterval(interval);
        interval = 0;
        carActive = true;
        txtRmd.innerText =
          "Se ha reconocido el rostro de " +
          bestMatch.label +
          ". Acceso autorizado.";
        phase21.style.display = "none";
        mfoot.style.display = "";
        btnPhase1.style.display = "none";
        btnPhase2.style.display = "none";
        btnCancel.style.display = "none";
        btnClose.style.display = "";
        var accessFormat = {
          accessType: 'Reconocimiento facial',
          dateAccess: getDate(),
          statusAccess: 'Valido',
          user: bestMatch.label
        }
        accessRegister.push(accessFormat)
        mensaje_ubicacion(bestMatch.label + ' ha accedido al sistema de tu vehiculo mediante reconocimiento facial')
        
        if(carBlocked === true){
          carBlocked = false;
          flexRadioDefault2.disabled = false;
        }
      }

      if(document.querySelectorAll("video")[0].srcObject.getTracks() != null){
        document.querySelectorAll("video")[0].srcObject.getTracks().forEach((track) => {
          if (track.readyState == "live") {
            track.stop();
          }
        });
      }

      document.querySelectorAll("video")[0].srcObject = null;
    }
  }, 2000);
  
}

async function initGestureRecognition2() {
  GE = new fp.GestureEstimator([
    cg.callGesture(),
    cg.thumpUpGesture(),
    cg.default(),
    cg.closedFistGesture(),
    cg.victoryGesture()
  ]);
  handposeModel = await handpose.load();

  const interval2 = setInterval(async () => {
    const predictions = await handposeModel.estimateHands(
      document.querySelectorAll("video")[1]
    );
      
    if (predictions.length > 0) {
    const estimatedGestures = GE.estimate(predictions[0].landmarks, 7.5);

    if (estimatedGestures.gestures.length > 0) {
      if(estimatedGestures.gestures[0].name === 'victory'){
        console.log('Pausar musica')
      } else if(estimatedGestures.gestures[0].name === 'thump_up'){
        console.log('Reproducir musica')
      } else if(estimatedGestures.gestures[0].name === 'call'){
        console.log('Cancion anterior')
      } else if(estimatedGestures.gestures[0].name === 'closedFist'){
        console.log('Cancion Siguiente')
      } else if(estimatedGestures.gestures[0].name === '3Zero'){
        console.log('Cancion detenida')
      } else{
        return;
      }
    }
  }

  }, 500);
}

function getDate() {
    
  var dateAndHour = new Date().getFullYear() + '/'
  if (new Date().getMonth() < 10) {
    dateAndHour = dateAndHour + '0' + new Date().getMonth() + '/';
  } else{
     dateAndHour = dateAndHour + new Date().getMonth() + '/';
  }

  if (new Date().getDay() < 10) {
    dateAndHour = dateAndHour + '0' + new Date().getDay() + ' | ';
  } else{
    dateAndHour = dateAndHour + new Date().getDay() + ' | ';
  }

  if (new Date().getHours() < 10) {
    dateAndHour = dateAndHour + '0' + new Date().getHours() + ':';
  } else{
    dateAndHour = dateAndHour + new Date().getHours() + ':';
  }

  if (new Date().getMinutes() < 10) {
    dateAndHour = dateAndHour + '0' + new Date().getMinutes() + ':';
  } else{
    dateAndHour = dateAndHour + new Date().getMinutes() + ':';
  }

  if (new Date().getSeconds() < 10) {
    dateAndHour = dateAndHour + '0' + new Date().getSeconds();
  } else{
    dateAndHour = dateAndHour + new Date().getSeconds();
  }

  return dateAndHour;
}

var gameConfig = {
  type: Phaser.AUTO,
  width: window.screen.width,
  height: window.screen.height - 73,
  parent: "container",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0, x: 0 },
    },
  },
  scene: [simulator],
};

function mensaje_ubicacion(message) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (datos) {
      var ubicacion =
        'Latitud: ' +
        datos.coords.latitude +
        ' Logitud: ' +
        datos.coords.longitude;

      const countrycode = '1';
      const whatsappnumber = '8292644164';

      var url =
        'https://wa.me/' +
        countrycode +
        whatsappnumber +
        '?text= ' + message + ', se encuentra en estas coordenadas: ' +
        ubicacion;
      window.open(url, "_blank");
    });
  } else {
    alert(
      'El navegador no acepta la geolocazación o necesita permiso para acceder.'
    );
  }
}

var game = new Phaser.Game(gameConfig);
