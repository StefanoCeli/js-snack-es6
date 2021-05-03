$(document).ready(function(){
   //creo un array di animali
   const animali = [
       {
           nome : "gatto",
           famiglia : "felini",
           classe : "mammiferi"
       },
       {
           nome : "tigre",
           famiglia : "felini",
           classe : "mammiferi"
       },
       {
           nome : "corvo",
           famiglia : "corvidae",
           classe : "uccelli"
       },
       {
           nome : "colomba",
           famiglia : "columbidae",
           classe : "uccelli"
       },
       {
           nome : "cobra",
           famiglia : "serpenti",
           classe : "rettili"
       },
       
       {
           nome : "lupo grigio",
           famiglia : "canidae",
           classe : "mammiferi"
       },
       {
            nome : "pogona",
            famiglia : "agamidae",
            classe : "rettili"
       },
       {
           nome : "elefante",
           famiglia : "elephantidae",
           classe : "mammiferi"
       }
   ];
   console.log(animali);

   //creo una variabile dove all'interno vado a filtrare i mammiferi presenti in animali
   const mammiferi = animali.filter((animale)=> animale.classe === "mammiferi");
   console.log(mammiferi);
   


});

   
    
   
