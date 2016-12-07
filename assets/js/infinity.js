var sec;
var sec_ver = '1';

var url_home = 'https://8ch.net/';
var url_random = 'https://8ch.net/random.php';

var element_iframe = $('iframe');
var element_privacy = $('#privacy');
var element_input = $('#input');
var element_jump_icon = $('#jump');

function init() {
    sec = checkSecCookie();
    if (sec == true) {
        element_privacy.removeClass('text-danger');
        element_privacy.addClass('text-success');
        element_iframe.attr('src', url_home);
    }
}

function checkSecCookie() {
    if (Cookies.get('sec_ver') == sec_ver) {
        return true;
    }
    return false;
}

function setSecCookie() {
    Cookies.set('sec_ver', sec_ver);
}

function getRandomBoard() {
    element_iframe.attr('src', url_random);
}

function getHomePage() {
    element_iframe.attr('src', url_home);
}


function jumpToBoard() {
    element_iframe.attr('src', url_home + element_input.val());
    element_input.val('');
    element_jump_icon.click();
}