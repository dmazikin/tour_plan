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
  //ленивая загрузка
  $(function () {
    $(".lazy").Lazy();
  });
  let map_container = document.getElementById("map");
  console.log(map_container);
  let options_map = {
    once: true, //запуск один раз, и удаление наблюдателя сразу
    passive: true,
    capture: true,
  };
  map_container.addEventListener("click", start_lazy_map, options_map);
  map_container.addEventListener("mouseover", start_lazy_map, options_map);
  map_container.addEventListener("touchstart", start_lazy_map, options_map);
  map_container.addEventListener("touchmove", start_lazy_map, options_map);

  let map_loaded = false;
  function start_lazy_map() {
    if (!map_loaded) {
      let map_block = document.getElementById("map_lazy");
      map_loaded = true;
      map_block.setAttribute("src", map_block.getAttribute("data-src"));
      map_block.removeAttribute("data_src");
      console.log(start_lazy_map);
    }
  }
});
