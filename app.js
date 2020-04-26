//Author: Vipul Anand
//fetch json data
//var sec2,sec4;
var kurukshetraEssn = fetch('https://raw.githubusercontent.com/anandvip/eMarket-kkr/master/biz.json').then(post => post.json()).then(post => post.Haryana.Kurukshetra);

kurukshetraEssn.then(a => sec2 = a.Sector2).then(storeSec2Data);
kurukshetraEssn.then(b => sec4 = b.Sector4).then(storeSec4Data);

//helper function for getting elements with ID
var gID = id => {
    return document.getElementById(id)
}

var bkrs = gID("bakerCount"),
    bkrr = gID("bkr"),
    bkrD2 = [],
    bkrD4 = [],
    bkprs = gID("bookCount"),
    bkpDtl = gID("bks"), 
    bk2   = [],
    bk4   = [],
    chem = gID("chemCount"),
    meds = gID("med"),
    medi = [],
    medi4 = [],
    vege = gID("vegCount"),
    frut = gID("veg"),
    fru  = [],
    fru4  = [], 
    groc = gID("grocerCount"),
    gr = gID("grc"),
    grr = [],
    grr4 = [],
    locKkr = gID('locKkr'),
    cc = null,
    loc;

     //Loop through the arrays of business category - AppWide
    function bizStore(tmplt,appDataStore){
        for(var i = 0; i < tmplt.length;i++){
            tmplt[i] =   `<div class="shops">
               <h5>${tmplt[i].businessName}</h5>
               <span class="feedback">Feedback</span>
               <p class="shopData">
               <span class="shopDtls">${tmplt[i].deliveryMode}</span><br>
               <span class="shopDtls">Open ${tmplt[i].workDuration}</span><br>
               <span class="shopPay">${tmplt[i].paymentAccepted}</span>
               </p>
               </div>
               <div class="homeDelivery">
               <span class="shopDtls contact"><span class="wa"></span><a href="https://wa.me/91${tmplt[i].contact}">${tmplt[i].contact}</a></span>
               <span class="minOrder">Minimum Order: ${tmplt[i].minimumOrder}</span>
               </div>`
               appDataStore.push(tmplt[i])
           }          
return appDataStore.join("")
    }

//All for loops run to store category data in their respective array for sector 2
function storeSec2Data(){
    bizStore(sec2.bakery,bkrD2);
    bizStore(sec2.books,bk2);
    bizStore(sec2.fruits,fru);
    bizStore(sec2.groceries,grr);
    bizStore(sec2.chemist,medi);
}

//All for loops run to store category data in their respective array for sector 4
function storeSec4Data(){
    bizStore(sec4.books,bk4);
    bizStore(sec4.bakery,bkrD4);
    bizStore(sec4.fruits,fru4);
    bizStore(sec4.groceries,grr4);
    bizStore(sec4.chemist,medi4);
}

//sector 2 data updated to UI - - sector 2
function sec2Data() {
    return bkrs.innerText   = sec2.bakery.length,
            bkprs.innerText  = sec2.books.length,
            chem.innerText   = sec2.chemist.length,
            vege.innerText   = sec2.fruits.length,
            groc.innerText   = sec2.groceries.length,
            bkpDtl.innerHTML = bk2,
            bkrr.innerHTML   = bkrD2,
            frut.innerHTML   = fru,
            gr.innerHTML     = grr,
            meds.innerHTML   = medi
};
//sector 4 data updated to UI - sector 4
function sec4Data() {
      bkrs.innerText   = sec4.bakery.length,
            bkprs.innerText  = sec4.books.length,
            chem.innerText   = sec4.chemist.length,
            vege.innerText   = sec4.fruits.length,
            groc.innerText   = sec4.groceries.length,
            bkpDtl.innerHTML = bk4,
            bkrr.innerHTML   = bkrD4,
            frut.innerHTML   = fru4,
            gr.innerHTML     = grr4,
            meds.innerHTML   = medi4
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

function changeLoc(){
    
    switch (loc) {
        case "sector2":sec2Data();        
            break;
        case "sector4":sec4Data();
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
