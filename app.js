//Author: Vipul Anand
//fetch json data
var kurukshetraEssn = fetch('https://raw.githubusercontent.com/anandvip/eMarket-kkr/master/biz.json').then(post => post.json()).then(post => post.Haryana.Kurukshetra)

kurukshetraEssn.then(a => sec2 = a.Sector2);
kurukshetraEssn.then(a => sec4 = a.Sector4);

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
    cc = null,
    loc;

    //Loop through the array of gorcery business category - sector 2
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
           <span class="shopDtls contact"><span class="wa"></span><a href="https://wa.me/91${sec2.groceries[i].contact}">${sec2.groceries[i].contact}</a></span>
           <span class="minOrder">Minimum Order: ${sec2.groceries[i].minimumOrder}</span>
           </div>`
           grr.push(tmplt[i])
       }
return grr.join("") 

}
 //Loop through the array of Fruits business category - sector 2
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
               <span class="shopDtls contact"><span class="wa"></span><a href="https://wa.me/91${sec2.fruits[i].contact}">${sec2.fruits[i].contact}</a></span>
               <span class="minOrder">Minimum Order: ${sec2.fruits[i].minimumOrder}</span>
               </div>`
               fru.push(tmplt[i])
           }
return fru.join("") 

    }
 //Loop through the array of chemist business category - sector 2
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
               <span class="shopDtls contact"><span class="wa"></span><a href="https://wa.me/91${sec2.chemist[i].contact}">${sec2.chemist[i].contact}</a></span>
               <span class="minOrder">Minimum Order: ${sec2.chemist[i].minimumOrder}</span>
               </div>`
               medi.push(tmplt[i])
           }
return medi.join("")

    }
     //Loop through the array of bakery business category - sector 2
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
               <span class="shopDtls contact"><span class="wa"></span><a href="https://wa.me/91${sec2.bakery[i].contact}">${sec2.bakery[i].contact}</a></span>
               <span class="minOrder">Minimum Order: ${sec2.bakery[i].minimumOrder}</span>
               </div>`
               bkrD.push(tmplt[i])
           }
return bkrD.join("")
    }
 //Loop through the array of books business category - sector 2
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
//sector 2 data updated to UI - - sector 2
function sec2Data() {
    return  bkrs.innerText   = sec2.bakery.length,
            bkprs.innerText  = sec2.books.length,
            chem.innerText   = sec2.chemist.length,
            vege.innerText   = sec2.fruits.length,
            groc.innerText   = sec2.groceries.length,
            bkpDtl.innerHTML = booksData(sec2.books),
            bkrr.innerHTML   = bakerData(sec2.bakery),
            frut.innerHTML   = vegData(sec2.fruits),
            gr.innerHTML     = grcrData(sec2.groceries),
            meds.innerHTML   = chemistdata(sec2.chemist)
}

//Sector 4 Start --->
//Loop through the array of gorcery business category - sector 4
function grcrData(tmplt) {
    for(var i = 0; i < sec4.groceries.length;i++){
    
    tmplt[i] =   `<div class="shops">
       <h5>${sec4.groceries[i].businessName}</h5>
       <span class="feedback">Feedback</span>
       <p class="shopData">
       <span class="shopDtls">${sec4.groceries[i].deliveryMode}</span><br>
       <span class="shopDtls">Open ${sec4.groceries[i].workDuration}</span><br>
       <span class="shopPay">${sec4.groceries[i].paymentAccepted}</span>
       </p>
       </div>
       <div class="homeDelivery">
       <span class="shopDtls contact"><span class="wa"></span><a href="https://wa.me/91${sec4.groceries[i].contact}">${sec4.groceries[i].contact}</a></span>
       <span class="minOrder">Minimum Order: ${sec4.groceries[i].minimumOrder}</span>
       </div>`
       grr.push(tmplt[i])
   }
return grr.join("") 

}

//Loop through the array of Fruits business category - sector 4
function vegData(tmplt) {
    for(var i = 0; i < sec4.fruits.length;i++){
    
        tmplt[i] =   `<div class="shops">
           <h5>${sec2.fruits[i].businessName}</h5>
           <span class="feedback">Feedback</span>
           <p class="shopData">
           <span class="shopDtls">${sec4.fruits[i].deliveryMode}</span><br>
           <span class="shopDtls">Open ${sec4.fruits[i].workDuration}</span><br>
           <span class="shopPay">${sec4.fruits[i].paymentAccepted}</span>
           </p>
           </div>
           <div class="homeDelivery">
           <span class="shopDtls contact"><span class="wa"></span><a href="https://wa.me/91${sec4.fruits[i].contact}">${sec4.fruits[i].contact}</a></span>
           <span class="minOrder">Minimum Order: ${sec4.fruits[i].minimumOrder}</span>
           </div>`
           fru.push(tmplt[i])
       }
return fru.join("") 

}

//Loop through the array of chemist business category - sector 4
function chemistdata(tmplt){
    for(var i = 0; i < sec4.chemist.length;i++){
    
        tmplt[i] =   `<div class="shops">
           <h5>${sec4.chemist[i].businessName}</h5>
           <span class="feedback">Feedback</span>
           <p class="shopData">
           <span class="shopDtls">${sec4.chemist[i].deliveryMode}</span><br>
           <span class="shopDtls">Open ${sec4.chemist[i].workDuration}</span><br>
           <span class="shopPay">${sec4.chemist[i].paymentAccepted}</span>
           </p>
           </div>
           <div class="homeDelivery">
           <span class="shopDtls contact"><span class="wa"></span><a href="https://wa.me/91${sec4.chemist[i].contact}">${sec4.chemist[i].contact}</a></span>
           <span class="minOrder">Minimum Order: ${sec4.chemist[i].minimumOrder}</span>
           </div>`
           medi.push(tmplt[i])
       }
return medi.join("")

}

//Loop through the array of bakery business category - sector 4
function bakerData(tmplt){
    for(var i = 0; i < sec4.bakery.length;i++){
    
        tmplt[i] =   `<div class="shops">
           <h5>${sec4.bakery[i].businessName}</h5>
           <span class="feedback">Feedback</span>
           <p class="shopData">
           <span class="shopDtls">${sec4.bakery[i].deliveryMode}</span><br>
           <span class="shopDtls">Open ${sec4.bakery[i].workDuration}</span><br>
           <span class="shopPay">${sec4.bakery[i].paymentAccepted}</span>
           </p>
           </div>
           <div class="homeDelivery">
           <span class="shopDtls contact"><span class="wa"></span><a href="https://wa.me/91${sec4.bakery[i].contact}">${sec4.bakery[i].contact}</a></span>
           <span class="minOrder">Minimum Order: ${sec4.bakery[i].minimumOrder}</span>
           </div>`
           bkrD.push(tmplt[i])
       }
return bkrD.join("")
}

//Loop through the array of books business category - sector 4
function booksData(tmplt){
    for(var i = 0; i < sec4.books.length;i++){
    
                tmplt[i] =   `<div class="shops">
                   <h5>${sec4.books[i].businessName}</h5>
                   <span class="feedback">Feedback</span>
                   <p class="shopData">
                   <span class="shopDtls">${sec4.books[i].deliveryMode}</span><br>
                   <span class="shopDtls">Open ${sec4.books[i].workDuration}</span><br>
                   <span class="shopPay">${sec4.books[i].paymentAccepted}</span>
                   </p>
                   </div>
                   <div class="homeDelivery">
                   <span class="shopDtls contact"><span class="wa"></span><a href="https://wa.me/91${sec4.books[i].contact}">${sec4.books[i].contact}</a></span>
                   <span class="minOrder">Minimum Order: ${sec4.books[i].minimumOrder}</span>
                   </div>`
                   bk.push(tmplt[i])
               }
    return bk.join("")
            };

//sector 4 data updated to UI - sector 4
function sec4Data() {
    return  bkrs.innerText   = sec4.bakery.length,
            bkprs.innerText  = sec4.books.length,
            chem.innerText   = sec4.chemist.length,
            vege.innerText   = sec4.fruits.length,
            groc.innerText   = sec4.groceries.length,
            bkpDtl.innerHTML = booksData(sec4.books),
            bkrr.innerHTML   = bakerData(sec4.bakery),
            frut.innerHTML   = vegData(sec4.fruits),
            gr.innerHTML     = grcrData(sec4.groceries),
            meds.innerHTML   = chemistdata(sec4.chemist)
}
//clean html data from previous result - clean slate
function clearContainer(){
    Array.from(document.querySelectorAll(".show")).map(c=>c.classList.toggle("show"))
    Array.from(document.querySelectorAll(".catOpen")).map(c=>c.classList.toggle("catOpen"))
    return  bkrs.innerText   = '',
            bkprs.innerText  = '',
            chem.innerText   = '',
            vege.innerText   = '',
            groc.innerText   = '',
            bkrr.innerHTML   = '',
            meds.innerHTML   = '',
            frut.innerHTML   = '',
            gr.innerHTML     = '',
            bkpDtl.innerHTML = '';
}
//Select location to fire json
locKkr.addEventListener('change', ()=>{
    loc = locKkr.value;
    changeLoc()
});
locKkr.addEventListener('feedback', ()=>location.reload())
//FIXME:data duplication with undefined in result section
function changeLoc(){
    
    switch (loc) {
        case "sector2":sec2Data();        
            break;
        case "sector4":sec4Data();
            console.log("Sector 4 Shops data parsed from fetched json");
             break;
        case "sector30":
            console.log("Sector 30 Shops data parsed from fetched json");
            // break;
        case "selectLocation":clearContainer();

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

//TODO: add sector4 data and then try resolving the undefined dupication