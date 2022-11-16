const stockURL =
    "https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=79a5113cccf7cd8ece0c25cbcc6af338";
const firstURL =
    "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=";
const dataStockTemplate = document.querySelector("[data-stock-card]");
const stockContainer = document.querySelector("[data-stocks-container]");
const AA = document.querySelector("input").value;
const btn = document.querySelector("button");
let stocks = [];
let searchInput = AA + "&limit=10&exchange=NASDAQ";

// searchBar.oninput = function (e) {
//     const searchValue = e.target.value.toLowerCase();
//     stocks.forEach((stock) => {
//         const isVisible = stock.name.toLowerCase().includes(searchValue);
//         // console.log(stock)
//         stock.element.classList.toggle("hide", !isVisible);
//     });
// };

// searchBar.oninput = function () {
btn.addEventListener("click", () => {
    console.log("I am clicked");
    fetch(firstURL + searchInput)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            stocks = data.map((stock) => {
                const card =
                    dataStockTemplate.content.cloneNode(true).children[0];
                // console.log(card)
                const header = card.querySelector(".header");

                header.innerText = stock.name + "(" + stock.symbol + ")";
                stockContainer.append(card);
                // console.log(stock)
                return { name: stock.name, symbol: stock.symbol, element: card };
            });
        });
});

// searchBar.oninput = function (e) {
//     const searchValue = e.target.value.toLowerCase();
//     stocks.forEach((stock) => {
//         const isVisible = stock.name.toLowerCase().includes(searchValue);
//         // console.log(stock)
//         stock.element.classList.toggle("hide", !isVisible);
//     });
// };

// // searchBar.oninput = function () {

// fetch(stockURL)
//     .then((res) => res.json())
//     .then((data) => {
//         stocks = data.map((stock) => {
//             const card = dataStockTemplate.content.cloneNode(true).children[0];
//             // console.log(card)
//             const header = card.querySelector(".header");

//             header.innerText = stock;
//             stockContainer.append(card);
//             // console.log(stock)
//             return { name: stock, element: card };
//         });

//     });
// // }

// fetch("https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/profile/AAPL")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         stocks = data.map((stock) => {
//             const card = dataStockTemplate.content.cloneNode(true).children[0];
//             console.log(card)

//         })
//     })
