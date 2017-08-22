var exchange = [
    { currency: "USD", value: 3.65 },
    { currency: "EUR", value: 4.15 },
    { currency: "GBP", value: 4.70 },
    { currency: "PHP", value: 0.65 }
];

var ul = $('ul.items');

for(var item of exchange) {
    //console.log(item.currency);
    $('<li/>')
        .html(item.currency)
        .data('rate', item.value)
        .appendTo(ul);
}

$('li').on('click', function() {
   alert($(this).data('rate')); 
});