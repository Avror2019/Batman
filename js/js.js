$(document).ready(function () {
    let tabsItem = $('.tabs-item');
    tabsItem.on('click', function(event){
       event.preventDefault();
       let activeContent = $(this).attr('href');
       $('.visible').toggleClass('visible'); //отключаем класс там де он есть 
       $(activeContent).toggleClass('visible'); // Добавляем класс там где мы активаируем
       $('.tabs-item-active').toggleClass('tabs-item-active');
       $(this).toggleClass('tabs-item-active');
    });
});