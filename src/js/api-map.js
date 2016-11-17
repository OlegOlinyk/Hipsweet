ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.89530907, 30.42346001],
            zoom: 15,
            controls : []
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/section6/mark.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
    myMap.disableDragging('dragging');

});

