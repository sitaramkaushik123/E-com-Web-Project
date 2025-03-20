//Show li in icon in click 
let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
    ul.classList.toggle("showData");

    //Close icon style in li tags    
    if (ul.className == "showData") {
        document.getElementById("bar").className = "fa-solid fa-xmark";
    } else {
        document.getElementById("bar").className = "fa-solid fa-bars";
    }
})

//Navbar Section color style
let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

shops.addEventListener("click", () => {
    shops.style.color = "rgb(4, 219, 219)";
    reviews.style.color = "white";
    blogs.style.color = "white";
    contacts.style.color = "white";
})

reviews.addEventListener("click", () => {
    reviews.style.color = "rgb(4, 219, 219)";
    shops.style.color = "white";
    blogs.style.color = "white";
    contacts.style.color = "white";
})

blogs.addEventListener("click", () => {
    blogs.style.color = "rgb(4, 219, 219)";
    shops.style.color = "white";
    reviews.style.color = "white";
    contacts.style.color = "white";
})

contacts.addEventListener("click", () => {
    contacts.style.color = "rgb(4, 219, 219)";
    shops.style.color = "white";
    reviews.style.color = "white";
    blogs.style.color = "white";
})


//Card js  items Details section
let crd = document.querySelectorAll(".crd");
let itemPage = document.querySelector(".itemPage")
let container = document.querySelector(".container");
let itemImg = document.getElementById("itemImg");
let buyBtn = document.getElementById("buyBtn");


crd.forEach(function(curValue) {
    curValue.addEventListener("click", function() {
        itemPage.style.display = "flex";
        container.style.display = "none";

        let imgSrc = curValue.firstElementChild.src;
        itemImg.src = imgSrc;


        let buyText = document.querySelector(".buyText");
        buyBtn.addEventListener("click", function() {
            document.querySelector(".buyPage").style.display = "block";
            buyText.innerHTML = `
            <h3>Enter Details :</h3>
            <input type="text" placeholder="Enter Your Name" id="name"> <br>
            <input type="text" placeholder="Enter Your Address" id="address"> <br>
            <input type="text" placeholder="Enter Your Mobile Number" id="num"> <br>
            <h3>Payment Option :</h3>
            <select>
                <option value="Google-Pay">Google-Pay</option>
                <option value="Phone-Pay">Phone-Pay</option>
                <option value="Bharat-Pay">Bharat-Pay</option>
                <option value="Amazon-Pay">Amazon-Pay</option>
                <option value="Cash-On-Delivery">Cash-On-Delivery</option>
                <option value="Paytm">Paytm</option>
            </select><br>
            
            `
            let button = document.createElement("button");
            button.innerHTML = "Submit";
            buyText.appendChild(button);

            button.addEventListener("click", function() {
                let name = document.getElementById("name");

                if (name.value == "" && address.value == "" && num.value == "") {
                    alert("Please Fill Details")
                } else {
                    alert("Thanks")
                    document.querySelector(".buyPage").style.display = "none";
                }
            })


            let cross = document.querySelector(".cross");
            cross.addEventListener("click", function() {
                document.querySelector(".buyPage").style.display = "none";
            })
        })
    })

})

//connect Section

function connect() {
    let names = document.getElementById("names");
    let num = document.getElementById("number");

    if (names.value == "" && num.value == "") {
        alert("Sorry Fill All Details")
    } else {
        alert("Thanks");
    }
}