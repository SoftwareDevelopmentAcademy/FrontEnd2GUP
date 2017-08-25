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
});