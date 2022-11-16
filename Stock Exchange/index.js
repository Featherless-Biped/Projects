const stockURL =
    "https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=79a5113cccf7cd8ece0c25cbcc6af338";
const firstURL =
    "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=";
const companyInforURL =
    "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/";
const calcSpinner = document.getElementById("calcSpinner");
const resultSpinner = document.getElementById("resultSpinner");
const dataStockTemplate = document.querySelector("[data-stock-card]");
const stockContainer = document.querySelector("[data-stocks-container]");
const btn = document.querySelector("button");
const myKeyValues = window.location.search
const urlParam = new URLSearchParams(myKeyValues)
const companySymbol = urlParam.get("symbol")

let stocks = [];
let searchInput = "&limit=10&exchange=NASDAQ";
let companyInfo = [];

function addClassToElement(element, cssClass) {
    element.classList.add(cssClass);
}
function removeClassToElement(element, cssClass) {
    element.classList.remove(cssClass);
}

btn.addEventListener("click", () => {
    stockContainer.innerHTML = "";
    removeClassToElement(calcSpinner, "visually-hidden");
    let AA = document.querySelector("input").value;
    console.log("I am clicked");
    fetch(firstURL + AA + searchInput)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            stocks = data.map((stock) => {
                const card =
                    dataStockTemplate.content.cloneNode(true).children[0];
                // console.log(card)
                const header = card.querySelector(".header");

                header.innerText = stock.name + "(" + stock.symbol + ")";
                header.href = "./company.html?symbol=" + stock.symbol;
                stockContainer.append(card);
                addClassToElement(calcSpinner, "visually-hidden");

                // console.log(stock)
                return {
                    name: stock.name,
                    symbol: stock.symbol,
                    element: card,
                };
            });
        });
});

async function openPage() {
    let companyInfoFunction = 
    fetch(companyInforURL + companySymbol)
        .then((res) => res.json())
        .then((data) => {
            users = data.map((user) => {
                const card =
                    userCardTemplate.content.cloneNode(true).children[0];
                const header = card.querySelector("[data-header]");
                const body = card.querySelector("[data-body]");

                header.textContent = user.name;
                body.textContent = user.email;
                userCardContainer.append(card);
                return { name: user.name, email: user.email, element: card };
            });
        });
}
