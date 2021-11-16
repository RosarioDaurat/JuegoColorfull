class Creditos{
    constructor(){
    this.y = -200;
  }
  
  Mostrar(){
    push();
    textAlign(CENTER);
    imageMode(CENTER);
    
    if(final == "feliz"){
     image(nubeNaranja, 600, this.y, 300, 140);
     image(nubeCeleste, 800, this.y-200, 300, 130);
     image(nubeNaranja, 400, this.y-500, 300, 140);
     image(nubeVerde, 700, this.y-650, 350, 180);
     image(nubeCeleste, 200, this.y-850, 300, 130);
     image(nubeNaranja, 1000, this.y-1000, 300, 140);
     image(nubeRosa, 500, this.y-1200, 256, 111);
    
      
    }else if( final == "triste"){
    image(nubeMala, 600, this.y, 300, 111);
     image(nubeMala, 800, this.y-200, 300, 111);
     image(nubeMala, 400, this.y-500, 300, 111);
     image(nubeMala, 700, this.y-650, 350, 130);
     image(nubeMala, 200, this.y-850, 300, 111);
     image(nubeMala, 1000, this.y-1000, 300, 111);
     image(nubeMala, 500, this.y-1200, 300, 111);
       
    }
 
 
    push();
    fill(0);
   if( final == "triste"){
     fill(255);
  }else if(final == "feliz"){
    fill(0);
   }
  text("Grupo Alcachofa", 600, this.y);
    
  text("Ilustracion:",800, this.y-220);
  text("Victoria Licci \n Franco Colotto \n Alexis Avalos \n Lucia",800,this.y-190);
    
  text("Diseño:", 400, this.y-510);
  text("Rosario Daurat", 400, this.y-490);
  text("Programacion:",700, this.y-660);
  text("Elias \n Rosario Daurat", 700, this.y-640);

  text("Comision Paucast", 200, this.y-850);
  text("Lenguaje Multimedial II", 1000, this.y-990);
  text("Diseño Multimedial FDA, UNLP", 500, this.y-1190);
  pop();
    
    
    this.y +=3;
    
    if(this.y > height+1500 ){
      this.y = height+1500 ;
       background(fondo);
      Nivel = "Portada";
      contadorTormenta = 0;
      Cboss = 0;
    }
    
        pop();
  }
}