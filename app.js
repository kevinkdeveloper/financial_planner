var ctx = document.getElementById('canvas').getContext('2d');
var years = [];
var netWorths = [];
var salary = document.getElementById('salary');
var taxes = document.getElementById('taxes');
var expenses = document.getElementById('expenses');
var netsavings = document.getElementById('netsavings');
var investmentreturns = document.getElementById('investmentreturns');

newYear.addEventListener('click', function() {
    var year = document.getElementById('year');
    var networth = document.getElementById('networth');
    var age = document.getElementById('age');
    years.push(year.value);
    netWorths.push(networth.value);
    myChart.update();
    year.value = parseInt(year.value) + 1;
    age.value = parseInt(age.value) + 1;
    networth.value = parseInt((parseInt(networth.value) + parseInt(salary.value) - parseInt(taxes.value) - parseInt(expenses.value))* investmentreturns.value);
    netsavings.value = parseInt(salary.value) - parseInt(taxes.value) - parseInt(expenses.value);
    salary.value = parseInt(salary.value * 1.03);
    taxes.value = parseInt(taxes.value * 1.03);
    expenses.value = parseInt(expenses.value * 1.03);
});

clear.addEventListener('click', function() {
    year.value = 2025;
    networth.value = 0;
    age.value = 35;
    years = [];
    netWorths = [];
    salary.value = 0;
    taxes.value = 0;
    expenses.value = 0;
    myChart.update();
});

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: years,
        datasets: [{
            label: 'Net Worth',
            data: netWorths,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});