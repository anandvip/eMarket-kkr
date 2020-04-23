//fetch json data
var kurukshetraEssn = fetch('https://raw.githubusercontent.com/anandvip/eMarket-kkr/master/biz.json').then(post => post.json()).then(post => post.Haryana.Kurukshetra)
var sec2;

kurukshetraEssn.then(a => sec2 = a.Sector2);

//helper function for getting elements with ID
var gID = id => {
    return document.getElementById(id)
}

var bkrs = gID("bakerCount");
var bkprs = gID("bookCount");
var bkpDtl = gID("bks");
//Select location to fire json
document.getElementById('locKkr').addEventListener('change', function () {
    console.log(loc = this.value);
    return changeLoc()
});
var loc;
var changeLoc = () => {
    switch (loc) {
        case "sector2":
            bkrs.innerText = sec2.bakery.length,
                bkprs.innerText = sec2.books.length,
                bkpDtl.innerHTML = `
                    <div class="shops">
                    <h5>${sec2.books[0].businessName}</h5>
                    <span class="feedback">Feedback</span>
                    <p class="shopData">
                    <span class="shopDtls">${sec2.books[0].deliveryMode}</span><br>
                    <span class="shopDtls">Open ${sec2.books[0].workDuration}</span><br>
                    <span class="shopPay">${sec2.books[0].paymentAccepted}</span>
                    </p>
                    </div>
                    <div class="homeDelivery">
                    <span class="shopDtls contact"><span class="wa"></span><a href="https://wa.me/919896918475">${sec2.books[0].contact}</a></span>
                    <span class="minOrder">Minimum Order: ${sec2.books[0].minimumOrder}</span>
                    </div>
            `;
            break;
        case "sector7":
            console.log("Sector 7 Shops data parsed from fetched json");
            break;
        case "mohannagar":
            console.log("Mohannagar Shops data parsed from fetched json");
            break;
        case "sector13":
            console.log("Sector 13 Shops data parsed from fetched json");
            break;
        case "sector4":
            console.log("Sector 4 Shops data parsed from fetched json");
            break;
        case "sector30":
            console.log("Sector 30 Shops data parsed from fetched json");
            break;
        case "selectLocation":
            bkrs.innerText = '',
            bkprs.innerText = '',
            bkpDtl.innerHTML = '';
            break;
        default:
            console.log("No shop Data for the lcoation")
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