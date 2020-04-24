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
    bkprs = gID("bookCount"), 
    chem = gID("chemCount"),
    vege = gID("vegCount"),
    groc = gID("grocerCount"),
    bkpDtl = gID("bks"),
    locKkr = gID('locKkr'),
    loc,
    bk = [],
    bkrD = [];

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
return bkrD
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
                       <span class="shopDtls contact"><span class="wa"></span><a href="https://wa.me/${sec2.books[i].contact}">${sec2.books[i].contact}</a></span>
                       <span class="minOrder">Minimum Order: ${sec2.books[i].minimumOrder}</span>
                       </div>`
                       bk.push(tmplt[i])
                   }
        return bk
                };

//Select location to fire json
locKkr.addEventListener('change', ()=>{
    loc = locKkr.value;
    
    return changeLoc()
});

var changeLoc = () => {
    switch (loc) {
        case "sector2":
                bkrs.innerText = sec2.bakery.length,
                bkprs.innerText = sec2.books.length,
                chem.innerText = sec2.chemist.length,
                vege.innerText = sec2.fruits.length,
                groc.innerText = sec2.groceries.length,
                bkpDtl.innerHTML = booksData(sec2.books),
                bkrr.innerHTML = bakerData(sec2.bakery)
                ;        
            break;
        case "sector4":
            console.log("Sector 4 Shops data parsed from fetched json");
            // break;
        case "sector30":
            console.log("Sector 30 Shops data parsed from fetched json");
            // break;
        case "selectLocation":
            bkrs.innerText   =   '',
            bkprs.innerText  =  '',
            chem.innerText   =   '',
            vege.innerText   =   '',
            groc.innerText   =   '',
            bkpDtl.innerHTML = '';
            break;
        default:
            console.log("No shop Data for the lcoation");
    }
}



//result UI
var sd = document.querySelectorAll(".srvc")
var [selectLoc, khalsa, bkr, kitab, bks, davai, med, sabji, veg, kiryana, grc] = sd

var catClick = (cat, sub) => {
    cat.addEventListener('click', () => {
        sub.classList.toggle("show")
    })
}

catClick(khalsa, bkr)
catClick(kitab, bks)
catClick(davai, med)
catClick(sabji, veg)
catClick(kiryana, grc)


console.log(kurukshetraEssn)