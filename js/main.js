$(document).ready(function () {
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });
  //Модальное окно
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverLay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverLay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  document.addEventListener("keydown", function (event) {
    let modalOverLay = $(".modal__overlay");
    let modalDialog = $(".modal__dialog");
    if (event.key === "Escape") {
      modalOverLay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });

  //Валидация формы
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please enter a name",
          minlength: "Name must be at least 2 letters long",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Phone is required",
          minlength: "Phone must contain 11 digits",
        },
      },
    });
  });

  //Маска для телефона
  var maskPhone = $(".phone").mask("+7(000)-000-00-00", {
    translation: {
      pattern: /[0-9]/,
      optional: true,
    },
  });

  //Анимация сайта
  AOS.init();
  //Ленивая загрузка
  $(".lazy").Lazy({
    // your configuration goes here
    scrollDirection: "vertical",
    effect: "show",
    visibleOnly: true,
    onError: function (element) {
      console.log("error loading " + element.data("src"));
    },
  });
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
});
