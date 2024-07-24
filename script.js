// IPO Dashboard India Chart
var ctx = document.getElementById('ipoDashboardChart').getContext('2d');
var ipoDashboardChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['IPO in Loss', 'IPO in Gain', 'Total IPO'],
        datasets: [{
            data: [9, 20, 30],
            backgroundColor: ['#a29bfe', '#74b9ff', '#fdcb6e']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        }
    }
});

// Main Board IPO Chart
var ctx2 = document.getElementById('mainBoardIpoChart').getContext('2d');
var mainBoardIpoChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Upcoming', 'New Listed', 'Ongoing'],
        datasets: [{
            data: [15, 25, 2],
            backgroundColor: ['#7158e2', '#3ae374', '#ff3838']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        }
    }
});