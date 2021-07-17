const hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
const reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
//Подключение параллакса
$(".newsletter").parallax({ imageSrc: "img/newsletter-bg.jpg" });
var myMap;

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [7.838196, 98.298813],
        zoom: 10,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject(
      {
        // Описание геометрии.
        geometry: {
          type: "Point",
          coordinates: [7.838196, 98.298813],
        },
      },
      {
        // Опции.
        // Иконка метки будет растягиваться под размер ее содержимого.
        preset: "islands#blackStretchyIcon",
        // Метку можно перемещать.
        draggable: true,
      }
    ),
    myPieChart = new ymaps.Placemark([7.838196, 98.298813], {
      // Зададим произвольный макет метки.
      iconLayout: "default#pieChart",
      // Радиус диаграммы в пикселях.
      iconPieChartRadius: 30,
      // Радиус центральной части макета.
      iconPieChartCoreRadius: 10,
      // Стиль заливки центральной части.
      iconPieChartCoreFillStyle: "#ffffff",
      // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
      iconPieChartStrokeStyle: "#ffffff",
      // Ширина линий-разделителей секторов и внешней обводки диаграммы.
      iconPieChartStrokeWidth: 3,
      // Максимальная ширина подписи метки.
      iconPieChartCaptionMaxWidth: 200,
    });

  myMap.geoObjects
    .add(myGeoObject)
    .add(myPieChart)
    .add(
      new ymaps.Placemark(
        [7.838196, 98.298813],
        {
          balloonContent: "цвет <strong>воды пляжа бонди</strong>",
        },
        {
          preset: "islands#icon",
          iconColor: "#0095b6",
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [7.838196, 98.298813],
        {
          balloonContent: "<strong>серобуромалиновый</strong> цвет",
        },
        {
          preset: "islands#dotIcon",
          iconColor: "#735184",
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [7.838196, 98.298813],
        {
          balloonContent: "цвет <strong>влюбленной жабы</strong>",
        },
        {
          preset: "islands#circleIcon",
          iconColor: "#3caa3c",
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [7.838196, 98.298813],
        {
          balloonContent: "цвет <strong>детской неожиданности</strong>",
        },
        {
          preset: "islands#circleDotIcon",
          iconColor: "yellow",
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [7.838196, 98.298813],
        {
          balloonContent: "цвет <strong>красный</strong>",
        },
        {
          preset: "islands#redSportIcon",
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [7.838196, 98.298813],
        {
          balloonContent: "цвет <strong>фэйсбука</strong>",
        },
        {
          preset: "islands#governmentCircleIcon",
          iconColor: "#3b5998",
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [7.838196, 98.298813],
        {
          balloonContent: "цвет <strong>носика Гены</strong>",
        },
        {
          preset: "islands#greenDotIconWithCaption",
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [7.838196, 98.298813],
        {
          balloonContent: "цвет <strong>голубой</strong>",
        },
        {
          preset: "islands#blueCircleDotIconWithCaption",
          iconCaptionMaxWidth: "50",
        }
      )
    );
}
