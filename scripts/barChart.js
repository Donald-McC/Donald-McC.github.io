
 var url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';//

 //
 console.log('ver: 0.0.2');


 async function dostuff() {
    const data = await fetch(url)
    .then(data => data.json());

    console.log(data);
 }


dostuff();
