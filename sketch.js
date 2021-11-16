function setup() {
  createCanvas(displayWidth, displayHeight - displayHeight / 8);
  frameRate(20);
  
  portada = new Portada();
  creditos = new Creditos();
  
 //--------------------NUBES--------------------------------------------
  nubeArcoiriss = new NubeArcoiris();
  for (var i = 0; i < cantColores; i++) {
    nubes[i] = new NubeCeleste();
    n += 1;

    if (n == 3) nubes[i] = new NubeRosa();
    if (n == 4) nubes[i] = new NubeLila();
    if (n == 5) nubes[i] = new NubeVerde();
    if (n == 6) nubes[i] = new NubeNaranja(), (n = 0);
       nubeGris[i] = new NubeGris();
    
  }

  //------------------------MUSICA----------------------------------------
  //if(musica.isLoaded())musica.loop();
  if(canto.isLoaded())canto.play();
  //-----------------------OTROS----------------------------------------
}

function draw() {
  background(fondo);
  if (cd <= 159) {
    cd--;
  }
  if (cd == 0) {
    cd = 160;
  }
  
  //---------------------TRANSICION---------------------------------------

  if(Nivel != "Portada"){
    
     contadorTormenta++;
   
    let transicion = map(contadorTormenta, 400, 1200, 0, 255);
 
    
    fill(100, transicion);
    rect(0, 0, width, height);
      text(contadorTormenta, 100, 100);

    if (cd <= 159) {
      parpadeo = true;
    }
    if (cd == 160) {
      parpadeo = false;
    }

    if (contNubes >= 10) {
      pausa--;
    }

    if (m == 1) {
      musica.play();
      m = 2;
    }
  }

  //----------------------NIVELES-----------------------------------------
  switch(Nivel){
      //------------------MENU
    case "Portada": 
     portada.Dibujar();
    portada.Comenzar();
      break;

       //------------------INICIO
    case "INICIO":  
      
      if (contadorTormenta == 550) {
        if(!lluvia1.isPlaying())lluvia1.loop();
    }
      // if (contadorTormenta == 500) {
      //   musica.pause();
      //   if(!musica2.isLooping())musica2.loop();
      //   if(!lluvia1.isPlaying())lluvia1.play();
      // }
      if (contadorTormenta > 600 && contadorTormenta < 900) {
        Nivel = "Tormenta1";
      }
      break;
      
 //------------------TORMENTA1
      case "Tormenta1":  
      yspeed = random(6, 7);
      if (contadorTormenta > 1200 && boss == false) {
        Nivel = "Tormenta2";
      } 
      break;
      
        //------------------TORMENTA2
    case "Tormenta2": 
      yspeed = random(7, 9);
      if (m == 2) {
      pausa = 10;
      m = 3;
    }
    if (contNubes >= 10) {
      cantColores = 5;
    }
      cantGrises = 10;
      
      // if (contadorTormenta > 1400) {
      //   musica2.setVolume(0.1);
      // }
      
      if (contadorTormenta > 1500 && motivacion > 0) {
      //   musica2.stop();
      //   if(!Boss.isPlaying())Boss.play();
         Nivel = "Boss";
           boss = true;
       }
      break;
      
   //------------------BOSS
    case "Boss": 
     lluvia1.setVolume(0.3);
      Trueno.setVolume(0.3);
     Cboss++;
     //theBoss();
    yspeed = random(9, 10);
    cantGrises = 10;
      
    if (m == 3) {
      pausa = 10;
      m = 4;
    }
      if (contNubes >= 10) {
      cantColores = 3;
    }

      if (Cboss > 500 && motivacion > 0) {
        //Boss.stop();
        if(!musica.isPlaying())musica.play();
        Nivel = "Finalfeliz";
      }
      if (Cboss > 500 && motivacion == 0) {
        Nivel = "Finaltriste";
      }
      break;
      
      //------------------FINALFELIZ

    case "Finalfeliz":
 let transicion2 = map(contadorTormenta, 2000, 2200, 0, 200);
      final = "feliz";
        if (m == 4) {
      pausaGrises = 10;
      m = 5;
      }  
    Cboss++;
    lluvia1.stop();
    cantColores = 10;
    fill(249, 211, 227, transicion2);
    rect(0, 0, width, height);
      
    if (Cboss > 800) {
    Nivel = "Creditos";  
  }
      break;
      
      
      //------------------FINALTRISTE
    case "Finaltriste":
      final = "triste";
      
    pausa = 10; 
    Cboss++;
        if (m == 4) {
      pausa = 10;
      m = 5;
      }   
      
    cantGrises = 5;
    //musica2.stop();
    lluvia1.stop();
     Trueno.stop();
    r = 0;
  if (Cboss > 800) {
    Nivel = "Creditos";  
  }
      break;
  
   //---------CREDITOS--------
case "Creditos":   
      if(final == "feliz"){
          let transicion3 = map(contadorTormenta, 2000, 2200, 0, 200);
      fill(249, 211, 227, transicion3);
      rect(0, 0, width, height);
      }
    
      pausa = 10;
      pausaGrises = 10;
    creditos.Mostrar();
break;
  }


  //------------------------NUBES-------------------if (
   if(Nivel == "INICIO" ||
      Nivel == "Tormenta1" ||
      Nivel == "Tormenta2" ||
      Nivel == "Boss" ||
      Nivel == "Finalfeliz"||
      Nivel == "Finaltriste"||
      Nivel == "Creditos"
    ){
    for (var i = 0; i < cantColores; i++) {
        nubes[i].cambiarColor();
        nubes[i].mover();
        nubes[i].mostrar();
    }
   }
    if(Nivel == "Tormenta1" ||
      Nivel == "Tormenta2" ||
      Nivel == "Boss" 
    ){
       nubeArcoiriss.cambiarColor();
        nubeArcoiriss.mover();
       nubeArcoiriss.mostrar();
  }
  
  if(Nivel == "Tormenta1" || Nivel == "Tormenta2" || Nivel == "Finaltriste" || Nivel == "Finalfeliz" || Nivel == "Boss"|| Nivel == "Creditos"){
    
    count = count - 1 * (deltaTime ); 
    if(count <= 0) count = 200;
    
    for (var t = 0; t < cantGrises; t++) {
        if(Nivel == "Tormenta2"){
         if(count % 6 == 0){
      if(!Trueno.isPlaying())Trueno.play();
      nubeGris[t].rayos();
      }
        }
      if(Nivel == "Boss"){
         if(count % 6 == 0){
      if(!Trueno.isPlaying())Trueno.play();
      nubeGris[t].rayos();
      }
       }  
        nubeGris[t].cambiarColor();
        nubeGris[t].mover();
        nubeGris[t].mostrar();
  }
  }

   if(Nivel == "Boss"){
    push();
    //tint(255, fade);
     image(nubeJefe, random(-3, 3), posY, width, height);
   // if(fade < 255)fade+=fadeAmount;
    if(posY < 0 && Cboss < 380)posY+=5;
    if(posY >= 0 && Cboss < 380)posY=random(-3,3);
     
     if(Cboss > 380){
       posY-=5;
     }
     //if(Cboss >= 400 && posY <= -600)posY=-600;
    pop();
   }

  //----------------------------------------------------------------------
 
  pajaro();
  actualizar();
  if(Nivel != "Portada"){
    barraMotivacion();
  }
}


