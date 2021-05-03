$(document).ready(function(){
   //creo un array di animali
   let broswer =
       {
           tabs : ["Gmail","Youtube","Amazon","StackOverflow","Facebook"],
           activeTab : 1,
       };
    
    const social=["Youtube","Instagram","Facebook","LinkedIn"];

    

    broswer.tabs.forEach((tab,index)=>{
        if(social.includes(tab)){
            if(broswer.activeTab===index){
                broswer.activeTab+=1
            }
            broswer.tabs.splice(index,1);
        }
    })
  
    

    console.log(broswer);

});
