//Author: Vipul Anand
//fetch json data
//var sec2,sec4;
var kurukshetraEssn = fetch('https://raw.githubusercontent.com/anandvip/eMarket-kkr/master/biz.json').then(post => post.json()).then(post => post.Haryana.Kurukshetra);

kurukshetraEssn.then(a => sec2 = a.Sector2).then(storeKkrData);
kurukshetraEssn.then(b => sec4 = b.Sector4)//.then(storeSec4Data);
kurukshetraEssn.then(c => sec30 = c.Sector30)

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
    grr30 = [],
    locKkr = gID('locKkr'),
    cc = null,
    notify=gID('notify'),
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
    };


//All for loops run to store category data in their respective array for sector 2
function storeKkrData(){
    var data = [[sec2.bakery,bkrD2],[sec2.books,bk2],[sec2.fruits,fru],[sec2.groceries,grr],[sec2.chemist,medi],[sec4.books,bk4],[sec4.bakery,bkrD4],[sec4.fruits,fru4],[sec4.groceries,grr4],[sec4.chemist,medi4],[sec30.groceries,grr30]]
    data.forEach(e=>{
        console.time()
        bizStore.apply(null,e)
        console.timeEnd()
    })
};

//1shops or 1shop what should it return; exactly
function sensikl(countID){
    countID.textContent === "1"?countID.classList.add("countIs1"):countID.classList.add("countIsMore")
};
//in UI if no shops in the area for a certain category, remove the countIdMore class
function emptyCat(countID){
    countID.textContent === ""?(countID.classList.contains("countIsMore")?countID.classList.remove("countIsMore"):null):null
}
//Once selection changes to null the ::after content remains in UI, removing it from UI now
function sensiklR(countID){
    countID.classList.contains("countIsMore")?countID.classList.remove("countIsMore"):countID.classList.remove("countIs1")
};
//sector 2 data updated to UI - - sector 2
function locationBakery(loc){
    bkrs.innerText = loc.bakery.length
}
var locationBookKeepers = (stor,loc) => {
    stor.innerText = loc.books.length
}
var locationGrocer = (stor,loc)=>{
    stor.innerText = loc.groceries.length
}
function sec2Data() {
        console.time()
            locationBakery(sec2),
            bkprs.innerText  = sec2.books.length,
            chem.innerText   = sec2.chemist.length,
            vege.innerText   = sec2.fruits.length,
            groc.innerText   = `${sec2.groceries.length}`,
            bkpDtl.innerHTML = bk2,
            bkrr.innerHTML   = bkrD2,
            frut.innerHTML   = fru,
            gr.innerHTML     = grr,
            meds.innerHTML   = medi,
            console.timeEnd(),
            sensi()
};

//sector 4 data updated to UI - sector 4
function sec4Data() {
    console.time()
            locationBakery(sec4),
            locationBookKeepers(bkprs,sec4),
            //bkprs.innerText  = sec4.books.length,
            chem.innerText   = sec4.chemist.length,
            vege.innerText   = sec4.fruits.length,
            groc.innerText   = sec4.groceries.length,
            bkpDtl.innerHTML = bk4,
            bkrr.innerHTML   = bkrD4,
            frut.innerHTML   = fru4,
            gr.innerHTML     = grr4,
            meds.innerHTML   = medi4,
            sensi(),
            console.timeEnd()
            
};
function sec30Data() {
    groc.innerText   = `${sec30.groceries.length}`,
    locationGrocer(grr30,sec30),
    gr.innerHTML     = grr30,
    sensi(),cleanCats() 
}

//clean html data from previous result - clean slate
function clearContainer(){
    Array.from(document.querySelectorAll(".show")).map(c=>c.classList.toggle("show"))
    Array.from(document.querySelectorAll(".catOpen")).map(c=>c.classList.toggle("catOpen"))
    bizCat.forEach(e=>{sensiklR.apply(null,e)})
    return  bkrs.innerText   = '',
            bkprs.innerText  = '',
            chem.innerText   = '',
            vege.innerText   = '',
            groc.innerText   = '',
            bkrr.innerHTML   = '',
            meds.innerHTML   = '',
            frut.innerHTML   = '',
            gr.innerHTML     = '',
            notify.innerHTML = '',
            bkpDtl.innerHTML = '';
};
//Select location to fire json
locKkr.addEventListener('change', ()=>{
    loc = locKkr.value;
    changeLoc()
});
var bizCat = [[bkrs],[groc],[chem],[vege],[bkprs]];
function sensi(){
    bizCat.forEach(e=>{sensikl.apply(null,e)})
};
function cleanCats(){
    bizCat.forEach(e=>emptyCat.apply(null,e))};
function changeLoc(){
    
    switch (loc) {
        case "sector2":clearContainer(),sec2Data();        
            break;
        case "sector4":clearContainer(),sec4Data();
            break;
        case "sector30":clearContainer(),sec30Data(),
            console.log("Sector 30 Shops data parsed from fetched json");
            break;
        case "selectLocation":clearContainer();
            break;
        default:
            console.log("No shop Data for the lcoation");
    }

};



//result UI
var sd = document.querySelectorAll(".srvc")
var [selectLoc, khalsa, bkr, kitab, bks, davai, med, sabji, veg, kiryana, grc] = sd

//toggle the category view to view results
var catClick = (cat, sub) => {
    cat.addEventListener('click', () => {
        cat.classList.toggle("catOpen")
        sub.classList.toggle("show")
    })
};

catClick(khalsa, bkr);
catClick(kitab, bks);
catClick(davai, med);
catClick(sabji, veg);
catClick(kiryana, grc);
