
 var url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';//

 //

const data = await fetch(url)
    .then(reponse => response.json())
    .then(console.log(data));

console.log(data);