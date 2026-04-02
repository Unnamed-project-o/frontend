/*----------------------------
    Toogle Search
------------------------------ */
// Handle click on toggle search button
$('.header-search').on('click', function () {
    $('.search').toggleClass('open');
    return false;
});