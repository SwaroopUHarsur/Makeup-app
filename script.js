let url=`http://makeup-api.herokuapp.com/api/v1/products.json`
let imgUrl="https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769"
let searchUrl="http://makeup-api.herokuapp.com/api/v1/products.json?brand&product_type"
let a=Makeup()
let makeupDetails;
async function Makeup(){
    let data=await fetch (url);
    let res=await data.json();
    console.log(res)
    console.log(res.results)

    return res
}
var mainmakeupDiv=document.getElementById('mainMakeupDiv')
function cos(){
    mainmakeupDiv.innerhtml=""
    makeupDetails.map((element)=>{
        var makeupDiv=document.createElement('div')
        //makeupDiv.classlist.add('col','makeup')

        makeupDiv.innerHTML=`
        <div class="card m-5" style="width: 20rem;">
        <img class="card-img-top" src=${element.image_link}>   
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <h5 class="border w-75 card-title me-3" id="mainMakeupDiv">${element.name}</h5>
                <h6 class="border p-1 w-auto">${element.brand}</h6>
            </div>
          <p class="card-text">${element.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${element.price_sign} ${element.price}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">${element.product_link}</a>
        </div>
      </div>`
      mainmakeupDiv.append(makeupDiv)
    })
    
}

a.then(data=>{console.log(data);
    makeupDetails = data;
    console.log("makeupDetails")

    cos();
});