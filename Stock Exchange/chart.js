let graphHistoryDate = [];
let graphHistoryPrice = [];
fetch(graphURL + companySymbol)
    .then((res) => res.json())
    .then((data) => {
        function getGraphHistoryDate() {
            data.historical.forEach((node) => {
                graphHistoryDate.push(node.date);
            });
            return graphHistoryDate;
        }

        function getGraphHistoryPrice() {
            data.historical.forEach((node) => {
                graphHistoryPrice.push(node.close);
            });
            return graphHistoryPrice;
        }
        const dateArray = getGraphHistoryDate().reverse();
        const priceArray = getGraphHistoryPrice().reverse();
        const ctx = document.getElementById("myChart");
        let updatedDateArray = [...new Set(dateArray)];
        // import Chart from 'chart.js/auto';
        new Chart(ctx, {
            type: "line",
            data: {
                labels: updatedDateArray,
                datasets: [
                    {
                        label: "# of Votes",
                        data: priceArray,
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    });
