
 var url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';//

 //



 async function dostuff() {
    const data = await fetch(url)
    .then(reponse => response.json());

    console.log(data);
 }


dostuff();