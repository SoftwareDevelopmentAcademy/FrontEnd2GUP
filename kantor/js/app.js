console.log('test');

// poieranie wartosci z inputa
var amount = document.getElementById('amount');
var btn = document.getElementById('count');

btn.addEventListener('click', function() {
    var res = document.getElementById('result');
    res.innerHTML = "Kwota w USD to: " + (parseFloat(amount.value) / 3.65).toFixed(2);
    //console.log(amount.value);
});