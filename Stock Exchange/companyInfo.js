
const stockURL =
    "https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=79a5113cccf7cd8ece0c25cbcc6af338";
const firstURL =
    "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=";
const companyInfoURL =
    "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/";
const graphURL =
    "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/";
const companyLogo = document.getElementById("company-logo");
const companyName = document.getElementById("company-name");
const companyInfo = document.getElementById("company-info");
const stockStatusPrice = document.getElementById("stock-status-price");
const stockStatusPercent = document.getElementById("stock-status-percentage");
const stockGraph = document.getElementById("stock-graph");

const calcSpinner = document.getElementById("calcSpinner");
const resultSpinner = document.getElementById("resultSpinner");
const dataStockTemplate = document.querySelector("[data-stock-card]");
const stockContainer = document.querySelector("[data-stocks-container]");
const btn = document.querySelector("button");
const myKeyValues = window.location.search;
const urlParam = new URLSearchParams(myKeyValues);
const companySymbol = urlParam.get("symbol");


let searchInput = "&limit=10&exchange=NASDAQ";

fetch(companyInfoURL + companySymbol)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        let companyProfile = data.profile;

        // console.log(companyProfile);
        // console.log(companySymbol);
        // console.log(stockStatusPercent);
        companyLogo.src = companyProfile.image;
        companyName.innerText =
            companyProfile.companyName + "(" + companySymbol + ")";
        stockStatusPrice.innerText = companyProfile.price;
        stockStatusPercent.innerText =
            " (" + companyProfile.changesPercentage + ")";
        companyInfo.innerText = companyProfile.description;
        let colorChangeCheck = +companyProfile.changesPercentage
        // console.log(colorChangeCheck);
        // console.log(companyProfile.changesPercentage)
        colorChange(colorChangeCheck)
        
    });

    function colorChange(colorChangeCheck) {
        // console.log(colorChangeCheck);
        if (colorChangeCheck < '0') {
            stockStatusPercent.style.color = "red";
        }
    }
