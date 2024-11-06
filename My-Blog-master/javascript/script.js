$(document).ready(function() {
    $('#mobile_btn').on('click' , function () {
        $('mobile_menu').toggLeClass('active');
        $('mobile_btn').find('i').toggLeClass('fa-x');
    });
});