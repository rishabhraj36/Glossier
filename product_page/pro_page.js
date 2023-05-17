const productList = document.getElementById("product-list")

async function getdata(){
    try{
        let response = await fetch()
        let data = await response.json()

        displayData(data)
    }
    catch(err){
        console.log(err)
    }
}

getdata()


function displayData(data){
    productList.textContent = ""
    data.forEach(elem => {

        const div = document.createElement("div")

        const img = document.createElement("img")
        img.src = elem.image
        img.alt = elem.name

        const name = document.createElement("h4")
        name.textContent = elem.name

        const desc_price = document.createElement("div")

        const desc = document.createElement("p")
        desc.textContent = elem.description

        const price = document.createElement("p")
        price.textContent = "$ "+ elem.price

        desc_price.append(desc, price)
        div.append(img, name, desc_price)
        div.addEventListener("click", function(){
            addtodetailpage(elem)
        })

        productList.appendChild(div);
    })
}

function handlePrice(){
    const sortbyprice = document.getElementById("sort-by-price").value

    if(sortbyprice == "htl"){
        data = data.sort(function(a, b){
            return (b.price - a.price)
        })
    }

    if(sortbyprice == "lth"){
        data = data.sort(function(a, b){
            return a.price - b.price
        })
    }
}


function addtodetailpage(elem){
    localStorage.setItem("product-items", JSON.stringify(elem))

    //window.location.href = "productdetail.html"
}