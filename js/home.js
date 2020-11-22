$(document).ready(function () {
    $('h1').addClass('text-center');
    $('h2').addClass('text-center');
    $('.well').removeClass('myBannerHeading').addClass('page-header');
    $('#yellowHeading').text('Yellow Team');
    $('.orange').css('background-color','orange');
    $('.blue').css('background-color','blue');
    $('.yellow').css('background-color','yellow');
    $('.red').css('background-color','red');
    $('#yellowTeamList').append('<li>Joseph Banks</li>');
    $('#yellowTeamList').append('<li>Simon Jones</li>');
    $('#oops').hide();
    $('#footerPlaceholder').remove();
    $('#footer').append('<p>****my name is Sam and my email address is s.soheil@gmail.com</p>')
    $('#footer').css({'font-family':'Courier ' , 'height':'24px'});

});