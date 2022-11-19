const stockURL = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/profile/`;
dataStockStatusMarqueeTemplate = document.querySelector(
    "[data-stock-status-marquee-template]"
);
dataStockStatusMarqueeContainerTwo = document.querySelector(
    "[data-stock-status-marquee-container-two]"
);
dataStockStatusMarqueeContainer = document.querySelector(
    "[data-stock-status-marquee-container]"
);

console.log(dataStockStatusMarqueeTemplate);

function addClassToNumbers(value, element) {
if (value > 0) {
    element.classList.add("text-success");
} if (value < 0){ element.classList.add("text-danger")
   
} if (value === 0) element.classList.add("text-warning")
    
}
btn.addEventListener("click", () => {
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
                console.log(urlSymbol);
                urlSymbols.push(stockURL + urlSymbol);
            });
        }

        console.log(getRestOfInfo());

        console.log(urlSymbols);
        urlSymbols.splice(0, 10);
        console.log(urlSymbols);

        Promise.all(
            urlSymbols.map((urlSymbol) =>
                fetch(urlSymbol)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data[0]);
                        const marqueeElementArray = data[0];

                        const marqueeElement =
                            dataStockStatusMarqueeTemplate.content.cloneNode(
                                true
                            ).children[0];

                        const marqueePrice = marqueeElement.querySelector(
                            "#stock-status-price-marquee"
                        );
                        const marqueePercentageChange =
                            marqueeElement.querySelector(
                                ".stock-status-percentage-marquee"
                            );
                        const marqueeSymbol = marqueeElement.querySelector(
                            ".commpany-symbol-marquee"
                        );
                        console.log(marqueeSymbol);
                        marqueeSymbol.innerText = marqueeElementArray.symbol;
                        marqueePrice.innerText = marqueeElementArray.price + "$";
                        marqueePercentageChange.innerText =
                            marqueeElementArray.changes + "%";
                        console.log(marqueeElementArray.price);
                        addClassToNumbers(marqueeElementArray.price, marqueePrice)
                        addClassToNumbers(marqueeElementArray.changes, marqueePercentageChange)   
                        dataStockStatusMarqueeContainer.append(marqueeElement);
                        dataStockStatusMarqueeContainerTwo.append(marqueeElement.cloneNode(true)); 
                                    
                    })
            )
        );
    });
})