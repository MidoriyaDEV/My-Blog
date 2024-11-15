$(document).ready(function() {
    // Alterna o menu mobile
    $('#mobile_btn').click(function() {
        $('#mobile_menu').toggleClass('active');
    });

    // Fechar o menu quando um item for clicado
    $('#mobile_nav_list .nav-item a').click(function() {
        $('#mobile_menu').removeClass('active');
    });

    // Rolagem suave para as seções
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        var target = this.hash;
        var $target = $(target);

        // Ajustando o cálculo do scroll para considerar a altura da navbar
        var navbarHeight = $('#navbar').outerHeight(); 
        $('html, body').animate({
            scrollTop: $target.offset().top - navbarHeight 
        }, 600, function() { 
            window.location.hash = target;
        });
    });

    // Animação para acompanhar o scroll
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        
        // Alterna a classe 'active' nos itens do menu conforme a rolagem
        $('#navbar ul li').each(function(i) {
            var sectionOffset = $($(this).find('a').attr('href')).offset().top - 100; 

            if (sectionOffset <= scrollDistance) {
                $('#navbar ul li').removeClass('active');
                $('#navbar ul li').eq(i).addClass('active');
            }
        });

        // Efeito para fixar a navbar no topo
        if (scrollDistance > 50) {
            $('#navbar').addClass('fixed');  
        } else {
            $('#navbar').removeClass('fixed');  
        }

        // Efeito de mudança de cor ou opacidade da navbar
        if (scrollDistance > 50) {
            $('#navbar').css('background-color', 'rgba(0, 0, 0, 0.8)');  
        } else {
            $('#navbar').css('background-color', 'transparent');  
        }
    });
});
// ScrollReveal para animações das seções
ScrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 2000,
    distance: '5%',
    reset: true  
});

ScrollReveal().reveal('.perfil-container', {
    origin: 'left',
    duration: 2000,
    distance: '5%',
    reset: true  
});

ScrollReveal().reveal('.Include-Engenharia', {
    origin: 'left',
    duration: 2000,
    distance: '5%',
    reset: true  
});

