$(document).ready(function() {
  var currentFloor =2; //переменная с текущим этажом
  var floorPath = $(".home-image path");// каждый отдельный этаж в SVG
  var counterUp = $(".counter-up"); //кнопка увеличения этажа
  var counterDown = $(".counter-down"); //кнопка уменьшения этажа 

  //функция при наведении мышкой на этаж
  floorPath.on("mouseover", function() {
    floorPath.removeClass("current-floor");//удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor");//получаем занчения текущего этажа
    $(".counter").text(currentFloor);//записвываем значение этажа в счетчик справа
  });

  counterUp.on("click", function() { //отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { //проверяем значение этажа
      currentFloor++;//прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false});//форматируем значение этажа, чтобы было 02, а не 2
      $(".counter").text(usCurrentFloor);// записываем значение этажа в счетчик справа
      floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');// подсвечиваем текущий этаж
    }
  });

  counterDown.on("click", function() {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false});
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  })
});