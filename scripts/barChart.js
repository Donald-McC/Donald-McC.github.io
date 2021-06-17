
 var url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';//

 //


 
 const data = function(){
   const response =  fetch(url)
     .then(response => response.json())
     .then(response => {
       if(!(response.ok)){
         console.log("fuuuuuuuuuuuuuuuukkkkkkkkkkkkkkkk!!!!!!!!")
       }
     }).catch(error => {
     console.error('There has been a problem with your fetch operation:', error);
   });
   return response;
 }
 
 console.log(data());