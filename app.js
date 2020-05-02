//Author: Vipul Anand
//fetch json data
//var sec2,sec4;

var kurukshetraEssn = fetch('https://raw.githubusercontent.com/anandvip/eMarket-kkr/master/biz.json')
.then(post => post.json())
.then(post => post.Haryana.Kurukshetra)
.catch(error=>console.log(error));

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
    rsltC = gID('rsltCount'),
    ttlShopCount,
    loc;

    /**Helper Functions
 * 
 * @param {*} countID 
 */
     //Loop through the arrays of business category - AppWide
    function bizStore(tmplt,storeInArray){        
        for(var i = 0; i < tmplt.length;i++){
            tmplt[i] =   `<div class="shops">
               <h5>${tmplt[i].businessName}</h5>
               <span class="feedback">Feedback</span>
               <p class="shopData">
               <span class="shopDtls">${tmplt[i].deliveryMode}</span><br>
               <span class="shopDtls">Open ${tmplt[i].workDuration}</span><br>
               <span class="shopPay">${tmplt[i].paymentAccepted}</span>
               </p>
               <p><span>* * * * *</span><span><img src="https://picsum.photos/93/140"></span></p>
               </div>
               <div class="homeDelivery">
               <span class="shopDtls contact"><span class="wa"></span><a href="https://wa.me/91${tmplt[i].contact}?text=%E0%A4%B9%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%98%E0%A4%B0%20%E0%A4%AA%E0%A4%B0%20%E0%A4%B8%E0%A4%BE%E0%A4%AE%E0%A4%BE%E0%A4%A8%20%E0%A4%AE%E0%A4%82%E0%A4%97%E0%A4%B5%E0%A4%BE%E0%A4%A8%E0%A4%BE%20%E0%A4%B9%E0%A5%88%20%2C%20%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A4%BE%20%E0%A4%86%E0%A4%AA%E0%A4%95%E0%A5%80%20%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE%E0%A4%8F%E0%A4%81%20%E0%A4%89%E0%A4%AA%E0%A4%B2%E0%A4%AC%E0%A5%8D%E0%A4%A7%20%E0%A4%B9%E0%A5%88%E0%A4%82%20%3F%20%0A%E0%A4%AF%E0%A4%B9%20%E0%A4%B8%E0%A4%82%E0%A4%A6%E0%A5%87%E0%A4%B6%20%E0%A4%95%E0%A5%81%E0%A4%B0%E0%A5%81%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A5%87%E0%A4%A4%E0%A5%8D%E0%A4%B0%20app%20https%3A%2F%2Fanandvip.github.io%2FeMarket-kkr%2F%20%E0%A4%A6%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A4%BE%20%E0%A4%AD%E0%A5%87%E0%A4%9C%E0%A4%BE%20%E0%A4%97%E0%A4%AF%E0%A4%BE%20%E0%A4%B9%E0%A5%88%20" target="_blank">${tmplt[i].contact} | Call</a><a href="tel:${tmplt[i].contact}"><img src="/eMarket-kkr/img/call.webp" height="32px"></a></span>
               <span class="minOrder">Minimum Order: ${tmplt[i].minimumOrder}</span>
               </div>`
               storeInArray.push(tmplt[i])
           }  
                   
return storeInArray.join("")
    };


//JSON/Database data captured in KurukshetraEssen in one XHR, 
//forEach and Apply used on recieved objects for all locations in selected District locations
//Ready for UI implimentation
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
function shopCount(stor,loc){
    stor.innerText = loc.length
};
//sector 2 data updated to UI - - sector 2
//""reduce method"" used to get sum of total of array lengths of all business categories so that you could use ${ttlShopCount} in code!!
function bizCountTtlAtLoc(locationArray){return locationArray.reduce((a,c)=> ttlShopCount = a+c,0)}
function goesToHtml(ids,stor){
    ids.innerHTML = stor
};

//no more commas in html results!!
function nc(arr){
    return arr.join("")
};
var locationGrocer = (stor,loc)=>{
    stor.innerText = loc.groceries.length
}

//individual business shops count, total business count, HTML data on page based on biz.json!!
function sec2Data() {
    console.time();
    var shopCountAtSec2 = [[bkrs,sec2.bakery],[bkprs,sec2.books],[chem,sec2.chemist],[vege,sec2.fruits],[groc,sec2.groceries]];
    var bizCountAtSec2 = [sec2.bakery.length,sec2.books.length,sec2.chemist.length,sec2.fruits.length,sec2.groceries.length];
    var toHtml = [[bkpDtl,nc(bk2)],[bkrr,nc(bkrD2)],[frut,nc(fru)],[gr,nc(grr)],[meds,nc(medi)]];
    shopCountAtSec2.forEach(e=>{shopCount.apply(null,e)});
    toHtml.forEach(e=>goesToHtml.apply(null,e));
    bizCountTtlAtLoc(bizCountAtSec2);
    rsltC.innerHTML =`<span></span><span>District - Kurukshetra</span><span>Found: ${ttlShopCount}</span>`,
    sensi(),
    addBiz.classList.add("hide"),
    console.timeEnd()   
};

//sector 4 data updated to UI - sector 4
function sec4Data() {
    console.time();
    var shopCountAtSec4 = [[bkrs,sec4.bakery],[bkprs,sec4.books],[chem,sec4.chemist],[vege,sec4.fruits],[groc,sec4.groceries]];
    var bizCountAtSec4 = [sec4.bakery.length,sec4.books.length,sec4.chemist.length,sec4.fruits.length,sec4.groceries.length];
    var toHtml = [[bkpDtl,nc(bk4)],[bkrr,nc(bkrD4)],[frut,nc(fru4)],[gr,nc(grr4)],[meds,nc(medi4)]];
    shopCountAtSec4.forEach(e=>{shopCount.apply(null,e)});
    toHtml.forEach(e=>goesToHtml.apply(null,e));
    bizCountTtlAtLoc(bizCountAtSec4);
    rsltC.innerHTML = `<span></span><span>District - Kurukshetra</span><span>Found: ${ttlShopCount}</span>`,
    sensi(),
    addBiz.classList.add("hide"),
    console.timeEnd()     
};
function sec30Data() {
    console.time();
    rsltC.innerHTML = `<span></span><span>District - Kurukshetra</span><span>Found: ${sec30.groceries.length}</span>`,
    groc.innerText   = `${sec30.groceries.length}`,
    locationGrocer(grr30,sec30),
    gr.innerHTML     = grr30,
    sensi(),cleanCats(),
    addBiz.classList.add("hide"),
    console.timeEnd() 
}

//clean html data from previous result - clean slate
function clearContainer(){
    Array.from(document.querySelectorAll(".show")).map(c=>c.classList.toggle("show"));
    Array.from(document.querySelectorAll(".catOpen")).map(c=>c.classList.toggle("catOpen"));
    bizCat.forEach(e=>{sensiklR.apply(null,e)});
    addBiz.classList.remove("hide")
    return  bkrr.innerHTML    = '',
            meds.innerHTML    = '',
            frut.innerHTML    = '',
            gr.innerHTML      = '',
            notify.innerHTML  = '',
            bkpDtl.innerHTML  = '',
            rsltC.innerText   = '',
            bkrs.innerText    = '',
            bkprs.innerText   = '',
            chem.innerText    = '',
            vege.innerText    = '',
            groc.innerText    = ''
};
//Select location to fire json
locKkr.addEventListener('change', ()=>{
    loc = locKkr.value;
    changeLoc()
});
var bizCat = [[bkrs],[groc],[chem],[vege],[bkprs]];
function sensi(){
    bizCat.forEach(e=>{
        sensikl.apply(null,e)})
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
        case "selectLocation":clearContainer(),addBiz.classList.remove("hide");
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

//Disclaimer visibility check is a trackable element in app, capture clicks on it!!
var dsclm = document.getElementById('dsclm');
var ftr = document.querySelector(".ftr");
ftr.addEventListener('click', ()=>{
    dsclm.classList.toggle("show")
})

//reset the results and location User centric feature
var reset = document.querySelector(".reset");
reset.addEventListener('click',()=>{
    locKkr.value = "selectLocation";
    locKkr.value === "selectLocation"?addBiz.classList.remove("hide"):(locKkr.value !== "selectLocation"?addBiz.classList.add("hide"):addBiz.classList.remove("hide"))
    clearContainer()
})

//addBiz must hide is user selects location for checking results
var addBiz = document.querySelector(".addBiz")
