var Nivel = "Portada";
var m = 1;
var motivacion = 3;
var contMot = 160;
var co = 0;

var contadorTormenta = 0;
var ay = -1000;
var b = 1;
var r = 0;
let volume = 0.3;
let creditosy = -1200;
var fade = 255;
var fadeAmount = 5;
var posY = -800;
let final = "ninguno";

//--------------------NUBES--------------------------------------------
var nubes = [];
nubeGris = [];
var cantGrises = 5;
var cantColores = 10;
let yspeed;
var n = 0;
let pausa = 0;
let pausaGrises = 0;
var contNubes = 0;
let boss = false;
var Cboss = 0;

var cd = 160;
var count = 200;
let fondo;
var bossy = -800;
//--------------------KIWI---------------------------------------------
var booble = {
  x: 700,
  y: 600,
  mov: 7,
  movy: 5,
};
let parpadeo = false;
let cambiar = 0;
let direccion = "";
var contMot = 160;
var motivacion = 3;


function preload() {
  yspeed = random(2.5, 5.5);
  //------------------------MUSICA----------------------------------------
  efecto = loadSound("efecto.mp3");
    aturdido = loadSound("aturdido.mp3");
  canto = loadSound("Canto1parte.mp3");
  musica = loadSound("musicaparte1.mp3");
  musica2 = loadSound("musicaparte2.mp3");
  lluvia1 = loadSound("Lluvia1.mp3");
  Boss = loadSound("boss.mp3");
  Trueno = loadSound("Trueno.mp3");
  efecto.setVolume(0.1);
  Trueno.setVolume(0.2);
  lluvia1.setVolume(0.4);
  musica.setVolume(0.3);
  Boss.setVolume(0.3);
  aturdido.setVolume(0.2);
  //----------------------KIWIBEBE----------------------------------------
   gif = loadImage("Kiwis/Kiwi bebe/kiwi bebe blanco.gif");
  kiwiRosa = loadImage("Kiwis/Kiwi bebe/kiwi bebe rosa.gif");
  kiwiCeleste = loadImage("Kiwis/Kiwi bebe/kiwi bebe celeste.gif");
  kiwiLila = loadImage("Kiwis/Kiwi bebe/kiwi bebe lila.gif");
  kiwiNaranja = loadImage("Kiwis/Kiwi bebe/kiwi bebe naranja.gif");
  kiwiVerde = loadImage("Kiwis/Kiwi bebe/kiwi bebe verde.gif");
  kiwiGris = loadImage("Kiwis/Kiwi bebe/kiwi bebe gris.gif");
  //---------------------KIWICHICO----------------------------------------
  kiwiGrisChico = loadImage("Kiwis/Kiwi chico/kiwi chico gris.gif");
  kiwiCelesteChico = loadImage("Kiwis/Kiwi chico/kiwi chico celeste.gif");
  kiwiRosaChico = loadImage("Kiwis/Kiwi chico/kiwi chico rosa.gif");
  kiwiLilaChico = loadImage("Kiwis/Kiwi chico/kiwi chico lila.gif");
  kiwiVerdeChico = loadImage("Kiwis/Kiwi chico/kiwi chico verde.gif");
  kiwiNaranjaChico = loadImage("Kiwis/Kiwi chico/kiwi chico naranja.gif");
  //---------------------KIWIMEDIANO--------------------------------------
  kiwiGrisMediano = loadImage("Kiwis/Kiwi mediano/kiwi mediano gris.gif");
  kiwiCelesteMediano = loadImage("Kiwis/Kiwi mediano/kiwi mediano celeste.gif");
  kiwiRosaMediano = loadImage("Kiwis/Kiwi mediano/kiwi mediano rosa.gif");
  kiwiLilaMediano = loadImage("Kiwis/Kiwi mediano/kiwi mediano lila.gif");
  kiwiVerdeMediano = loadImage("Kiwis/Kiwi mediano/kiwi mediano verde.gif");
  kiwiNaranjaMediano = loadImage("Kiwis/Kiwi mediano/kiwi mediano naranja.gif");
  //---------------------KIWIGRANDE---------------------------------------
  kiwiGrisGrande = loadImage("Kiwis/Kiwi grande/kiwi grande gris.gif");
  kiwiCelesteGrande = loadImage("Kiwis/Kiwi grande/kiwi grande celeste.gif");
  kiwiRosaGrande = loadImage("Kiwis/Kiwi grande/kiwi grande rosa.gif");
  kiwiLilaGrande = loadImage("Kiwis/Kiwi grande/kiwi grande lila.gif");
  kiwiVerdeGrande = loadImage("Kiwis/Kiwi grande/kiwi grande verde.gif");
  kiwiNaranjaGrande = loadImage("Kiwis/Kiwi grande/kiwi grande naranja.gif");
  //------------------------NUBES-----------------------------------------
  nubeRosa = loadImage("nubes/nubes rosa.png");
  nubeLila = loadImage("nubes/nubes lila.png");
  nubeMala = loadImage("nubes/nubes descolorizantes.png");
  nubeVerde = loadImage("nubes/nubes verdes.png");
  nubeNaranja = loadImage("nubes/nubes naranja.png");
  nubeCeleste = loadImage("nubes/nubes celestes.png");
  nubeArcoiris = loadImage("nubes/nubesArcoiris.png");
  nubeJefe = loadImage("otros/nubejefe.png")
  
  //------------------------OTROS-----------------------------------------
  fondo1 = loadImage("otros/fondo.png");
  alta = loadImage("otros/alta.png");
  media = loadImage("otros/medio.png");
  baja = loadImage("otros/baja.png");
  vacia = loadImage("otros/baja0.png");
  
  fondo = fondo1;
}  