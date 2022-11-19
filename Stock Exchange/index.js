
const firstURL =
    "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=";
const companyInforURL =
    "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/";
const calcSpinner = document.getElementById("calcSpinner");
const resultSpinner = document.getElementById("resultSpinner");
const dataStockTemplate = document.querySelector("[data-stock-card]");
const stockContainer = document.querySelector("[data-stocks-container]");
const btn = document.querySelector("button");
const myKeyValues = window.location.search;
const urlParam = new URLSearchParams(myKeyValues);
const companySymbol = urlParam.get("symbol");

let stocks = [];
let searchInput = "&limit=10&exchange=NASDAQ";
let companyInfo = [];


function addClassToElement(element, cssClass) {
    element.classList.add(cssClass);
}
function removeClassToElement(element, cssClass) {
    element.classList.remove(cssClass);
}

// removeClassToElement(calcSpinner, "visually-hidden");
btn.addEventListener("click", () => {
    stockContainer.innerHTML = "";
    let AA = document.querySelector("input").value;
    fetch(firstURL + AA + searchInput)
        .then((res) => res.json())
        .then((data) => {
            let urlSymbols = [];
            function getRestOfInfo() {
                data.forEach((restOfInfo) => {
                    urlSymbols.push(restOfInfo.symbol);
                    console.log(urlSymbols);
                });
                return urlSymbols.forEach((urlSymbol) => {
                    // console.log(urlSymbol);
                    urlSymbols.push(companyInforURL + urlSymbol);
                });
            }

            console.log(getRestOfInfo());

            // let restOfData = [];

            console.log(urlSymbols);
            urlSymbols.splice(0, 10);
            console.log(urlSymbols);

            Promise.all(
                urlSymbols.map((urlSymbol) =>
                    fetch(urlSymbol)
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            console.log("we are in a loop");
                            const companyCard = data.profile;
                            console.log(companyCard);

                            const card =
                                dataStockTemplate.content.cloneNode(true)
                                    .children[0];
                            console.log(card);
                            const logo = card.querySelector(".company-logo");
                            const header = card.querySelector(".header");
                            const price = card.querySelector(
                                "#stock-status-price"
                            );
                            const percentageChange = card.querySelector(
                                "#stock-status-percentage"
                            );

                            logo.src = companyCard.image;
                            header.innerText =
                                companyCard.companyName + "(" + data.symbol + ")";
                            price.innerText = companyCard.price;
                            percentageChange.innerText =
                                companyCard.changesPercentage;

                            header.href =
                                "./company.html?symbol=" + data.symbol;
                                addClassToNumbers(companyCard.price, price)
                                addClassToNumbers(companyCard.changesPercentage, percentageChange)
                            stockContainer.append(card);
                            addClassToElement(calcSpinner, "visually-hidden");
                        })
                )
            );
            // return restOfData
        });
});

let restOfData = [];
// // let urls = getRestOfInfo();
// function getRestOfData() {
//     const arrayOfResponses = Promise.all(
//         urls.map((url) =>
//             fetch(companyInforURL + url)
//                 .then((res) => res.json())
//                 .then((data) => {
//                     // console.log(data.profile);
//                     // was able to console all the companies I found, now we need to understand how to continue lol
//                     let companyCard = data.profile;
//                     restOfData.push(companyCard.image);
//                     console.log(restOfData);

//                 })
//         )

//     );
// // return restOfData
// }

// const urls = getRestOfInfo();
// const promises = urls.map(url => fetch(url));

// await Promise.all(promises);

// for (const promise of promises) {
//     const data = await promise.json();
//     console.log(data)
// }

// function cloneTemplate(data) { data.forEach((stock) => {
//     // const card =
//     //     dataStockTemplate.content.cloneNode(true).children[0];
//     // // console.log(card)
//     // const header = card.querySelector(".header");

//     // header.innerText = stock.name + "(" + stock.symbol + ")";
//     // header.href = "./company.html?symbol=" + stock.symbol;
//     // stockContainer.append(card);
//     addClassToElement(calcSpinner, "visually-hidden");
// });
// }
