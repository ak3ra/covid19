const postPromise = fetch('https://api.covid19api.com/summary')
postPromise
   .then(data => data.json())
   .then(data => {
         data.Countries.forEach((item)=>{
           if (item.Country=="Uganda")
           {
             console.log(JSON.stringify(item));
           }    
         });
         })