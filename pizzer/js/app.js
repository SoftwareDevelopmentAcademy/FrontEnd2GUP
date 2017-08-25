$(document).ready(function() {
    var $loginLink = $('.loginLink');
    var $loginBox = $('.loginBox');
    var $handleLoginBtn = $('.handleLogin');
    
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
        alert('Kliknięto na pizze!');
    });
    
});