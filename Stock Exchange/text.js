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

// searchBar.oninput = function (e) {
//     const searchValue = e.target.value.toLowerCase();
//     stocks.forEach((stock) => {
//         const isVisible = stock.name.toLowerCase().includes(searchValue);
//         // console.log(stock)
//         stock.element.classList.toggle("hide", !isVisible);
//     });
// };