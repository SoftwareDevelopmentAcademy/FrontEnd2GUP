$(document).ready(function() {
    var $loginLink = $('.loginLink');
    var $loginBox = $('.loginBox');
    var $handleLoginBtn = $('.handleLogin');
    var $counter = $('.counter');
    $counter.html(0);
    $loginLink.on('click', function(e) {
        e.preventDefault(); // blokujemy domyslne dzialanie elementu 'a'
        $loginLink.addClass('d-none');
        $loginBox.removeClass('d-none');
    });
    
    $handleLoginBtn.on('click', function(e) {
        alert('Zalogowano');
        $loginLink.removeClass('d-none');
        $loginBox.addClass('d-none');
    });
    
    var pizza = [
        { id: 1, name: 'Margarita', points: 1, image: 'margarita.png', costs: 0 }
    ];
    
    $('<img/>', { class: 'pizza' })
        .attr('src', './images/margarita.png')
        .appendTo('.pizza-container');
    
    var $pizza = $('.pizza');
    
    $pizza.on('mouseover', function(e) {
        $pizza.attr('height', 0.9 * $pizza.height());
        
    });
        
    $pizza.on('mouseleave', function(e) {
        $pizza.attr('height', 1.11 * $pizza.height()); 
    });
    
    $pizza.on('click', function(e) {
        $counter.html(pizza[0].points + parseInt($counter.html()));
    });
    
    var boosters = [
        { id: 1, name: 'Włoska czapka kucharska', points: 10, per: 1000, image: 'cookhat.png', value: 2 },
        { id: 2, name: 'Mąka pszenna', points: 15, per: 500, image: 'cookhat.png', value: 1 }
    ];

    $('<ul/>', { class: 'boosters' }).appendTo('.boostList');
    
    for(var b of boosters) {
        $('<li/>').html(b.name).appendTo('.boosters');
    }
    
    $('ul.boosters > li').on('click', function(e) {
        alert($(this).html());
    });
});