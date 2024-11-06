
loadCountry();
 function loadCountry(){
    let txtSearch = document.getElementById("conTxt").value;
     fetch(`https://restcountries.com/v3.1/name/${txtSearch}`)
    .then(res=>res.json())
    .then(data=>{
        let body = "";
        data.forEach(element => {
            console.log(element)
            body+=`
                  <div class="col container size-auto">
                    <div class="card shadow-sm">
                      <img src=${element.flags.png} alt="">
                      <div class="card-body">
                      <h2>${element.name.common}</h2>
                        <p class="card-text">${element.region}</p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <p class="p-4 fw-bold">${element.population}</p>
                            <button type="button" class="btn btn-sm btn-outline-secondary" href="${element.maps.googleMaps}">View Maps</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            `;               
        });

        document.getElementById("row").innerHTML=body;
    })
}