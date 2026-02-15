// TIMER FUNCTION
let sec = 0;

function startTimer() {
    setInterval(() => {
        sec++;
        let minutes = Math.floor(sec / 60);
        let seconds = sec % 60;

        document.getElementById("displayTime").innerText =
            minutes.toString().padStart(2, "0") + ":" +
            seconds.toString().padStart(2, "0");

    }, 1000);
}

// RESULTS CHART
window.onload = function () {

    const ctx = document.getElementById('resultsChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Existing System', 'Our System'],
            datasets: [{
                data: [70, 85],
                backgroundColor: ['#1e293b', '#3b82f6'],
                borderRadius: 15
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

};
