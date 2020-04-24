//Author: Vipul Anand
//fetch json data
var kurukshetraEssn = fetch('https://raw.githubusercontent.com/anandvip/eMarket-kkr/master/biz.json').then(post => post.json()).then(post => post.Haryana.Kurukshetra)
var sec2;

kurukshetraEssn.then(a => sec2 = a.Sector2);


//helper function for getting elements with ID
var gID = id => {
    return document.getElementById(id)
}

var bkrs = gID("bakerCount"),
    bkrr = gID("bkr"),
    bkrD = [],
    bkprs = gID("bookCount"),
    bkpDtl = gID("bks"), 
    bk   = [],
    chem = gID("chemCount"),
    meds = gID("med"),
    medi = [],
    vege = gID("vegCount"),
    frut = gID("veg"),
    fru  = [], 
    groc = gID("grocerCount"),
    gr = gID("grc"),
    grr = [],
    locKkr = gID('locKkr'),
    loc;

function grcrData(tmplt) {
    for(var i = 0; i < sec2.groceries.length;i++){
        
        tmplt[i] =   `<div class="shops">
           <h5>${sec2.groceries[i].businessName}</h5>
           <span class="feedback">Feedback</span>
           <p class="shopData">
           <span class="shopDtls">${sec2.groceries[i].deliveryMode}</span><br>
           <span class="shopDtls">Open ${sec2.groceries[i].workDuration}</span><br>
           <span class="shopPay">${sec2.groceries[i].paymentAccepted}</span>
           </p>
           </div>
           <div class="homeDelivery">
           <span class="shopDtls contact"><span class="wa"></span><a href="https://wa.me/${sec2.groceries[i].contact}">${sec2.groceries[i].contact}</a></span>
           <span class="minOrder">Minimum Order: ${sec2.groceries[i].minimumOrder}</span>
           </div>`
           grr.push(tmplt[i])
       }
return grr.join("") 

}

    function vegData(tmplt) {
        for(var i = 0; i < sec2.fruits.length;i++){
        
            tmplt[i] =   `<div class="shops">
               <h5>${sec2.fruits[i].businessName}</h5>
               <span class="feedback">Feedback</span>
               <p class="shopData">
               <span class="shopDtls">${sec2.fruits[i].deliveryMode}</span><br>
               <span class="shopDtls">Open ${sec2.fruits[i].workDuration}</span><br>
               <span class="shopPay">${sec2.fruits[i].paymentAccepted}</span>
               </p>
               </div>
               <div class="homeDelivery">
               <span class="shopDtls contact"><span class="wa"></span><a href="https://wa.me/${sec2.fruits[i].contact}">${sec2.fruits[i].contact}</a></span>
               <span class="minOrder">Minimum Order: ${sec2.fruits[i].minimumOrder}</span>
               </div>`
               fru.push(tmplt[i])
           }
return fru.join("") 

    }

    function chemistdata(tmplt){
        for(var i = 0; i < sec2.chemist.length;i++){
        
            tmplt[i] =   `<div class="shops">
               <h5>${sec2.chemist[i].businessName}</h5>
               <span class="feedback">Feedback</span>
               <p class="shopData">
               <span class="shopDtls">${sec2.chemist[i].deliveryMode}</span><br>
               <span class="shopDtls">Open ${sec2.chemist[i].workDuration}</span><br>
               <span class="shopPay">${sec2.chemist[i].paymentAccepted}</span>
               </p>
               </div>
               <div class="homeDelivery">
               <span class="shopDtls contact"><span class="wa"></span><a href="https://wa.me/${sec2.chemist[i].contact}">${sec2.chemist[i].contact}</a></span>
               <span class="minOrder">Minimum Order: ${sec2.chemist[i].minimumOrder}</span>
               </div>`
               medi.push(tmplt[i])
           }
return medi.join("")

    }
    function bakerData(tmplt){
        for(var i = 0; i < sec2.bakery.length;i++){
        
            tmplt[i] =   `<div class="shops">
               <h5>${sec2.bakery[i].businessName}</h5>
               <span class="feedback">Feedback</span>
               <p class="shopData">
               <span class="shopDtls">${sec2.bakery[i].deliveryMode}</span><br>
               <span class="shopDtls">Open ${sec2.bakery[i].workDuration}</span><br>
               <span class="shopPay">${sec2.bakery[i].paymentAccepted}</span>
               </p>
               </div>
               <div class="homeDelivery">
               <span class="shopDtls contact"><span class="wa"></span><a href="https://wa.me/${sec2.bakery[i].contact}">${sec2.bakery[i].contact}</a></span>
               <span class="minOrder">Minimum Order: ${sec2.bakery[i].minimumOrder}</span>
               </div>`
               bkrD.push(tmplt[i])
           }
return bkrD.join("")
    }

    function booksData(tmplt){
        for(var i = 0; i < sec2.books.length;i++){
        
                    tmplt[i] =   `<div class="shops">
                       <h5>${sec2.books[i].businessName}</h5>
                       <span class="feedback">Feedback</span>
                       <p class="shopData">
                       <span class="shopDtls">${sec2.books[i].deliveryMode}</span><br>
                       <span class="shopDtls">Open ${sec2.books[i].workDuration}</span><br>
                       <span class="shopPay">${sec2.books[i].paymentAccepted}</span>
                       </p>
                       </div>
                       <div class="homeDelivery">
                       <span class="shopDtls contact"><span class="wa"></span><a href="https://wa.me/91${sec2.books[i].contact}">${sec2.books[i].contact}</a></span>
                       <span class="minOrder">Minimum Order: ${sec2.books[i].minimumOrder}</span>
                       </div>`
                       bk.push(tmplt[i])
                   }
        return bk.join("")
                };
function kkrData() {
    return bkrs.innerText = sec2.bakery.length,
    bkprs.innerText = sec2.books.length,
    chem.innerText = sec2.chemist.length,
    vege.innerText = sec2.fruits.length,
    groc.innerText = sec2.groceries.length,
    bkpDtl.innerHTML = booksData(sec2.books),
    bkrr.innerHTML = bakerData(sec2.bakery),
    frut.innerHTML = vegData(sec2.fruits),
    gr.innerHTML = grcrData(sec2.groceries),
    meds.innerHTML = chemistdata(sec2.chemist)
}
//Select location to fire json
locKkr.addEventListener('change', ()=>{
    loc = locKkr.value;
    return changeLoc()
});

var changeLoc = () => {
    switch (loc) {
        case "sector2":kkrData();        
            break;
        case "sector4":
            console.log("Sector 4 Shops data parsed from fetched json");
            // break;
        case "sector30":
            console.log("Sector 30 Shops data parsed from fetched json");
            // break;
        case "selectLocation":
            bkrs.innerText   =   '',
            bkprs.innerText  =   '',
            chem.innerText   =   '',
            vege.innerText   =   '',
            groc.innerText   =   '',
            bkrr.innerHTML   =   '',
            meds.innerHTML   =   '',
            frut.innerHTML   =   '',
            gr.innerHTML     =   '',
            bkpDtl.innerHTML =   '';
            break;
        default:
            console.log("No shop Data for the lcoation");
    }
}



//result UI
var sd = document.querySelectorAll(".srvc")
var [selectLoc, khalsa, bkr, kitab, bks, davai, med, sabji, veg, kiryana, grc] = sd

//toggle the category view to view results
var catClick = (cat, sub) => {
    cat.addEventListener('click', () => {
        cat.classList.toggle("catOpen")
        sub.classList.toggle("show")
    })
}

catClick(khalsa, bkr)
catClick(kitab, bks)
catClick(davai, med)
catClick(sabji, veg)
catClick(kiryana, grc)


console.log(kurukshetraEssn)