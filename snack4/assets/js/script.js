$(document).ready(function(){
   //creo un array di animali
   const persone = [
       {
           nome : "Gianluca",
           cognome : "Bianchi",
           eta : 17
       },
       {
           nome : "Pietro",
           cognome : "Rossi",
           eta : 35
       },
       {
           nome : "Alberta",
           cognome : "De Santis",
           eta : 27
       },
       {
           nome : "Daniele",
           cognome : "Verdi",
           eta : 12
       },
       {
           nome : "Giuseppe",
           cognome : "Casadei",
           eta : 9
       },
       {
           nome : "Francesco",
           cognome : "Totti",
           eta : 44
       },
       {
           nome : "Greta",
           cognome : "Trombetta",
           eta : 15
       }
       
   ];
   console.log(persone);

   const puoGuidare = persone.map((persona)=>{
    let {nome,cognome,eta}=persona;
    let idoneita = (eta>18) ? 'Può guidare' : 'Non può guidare'

    let risultato = `${nome} ${cognome} ${idoneita}`
    console.log(risultato);
    console.log('--------------------------------------------------------------------');
    return risultato;
   })
   console.log(puoGuidare);
  


});

   
    
   
