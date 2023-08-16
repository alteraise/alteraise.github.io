<section class="wrap block3">
  @if(block == 'main_s6') {
    <div class="h2">у вас есть готовый <br>архитектурный проект?</div>
    <div class="desc">Отправьте нам макет в WhatsApp или Telegram - мы просчитаем <br>Вам стоимость и пришлем предложение</div>
    <ul>
      <li>
        <a class="btn white" href="">
          <span>Написать в WhatsApp</span>
          <span class="ico whatsapp"><svg><use xlink:href="theme/img/sprite.svg#whatsapp"></use></svg></span>
        </a>
      </li>
      <li>
        <a class="btn white" href="">
          <span>Написать в Telegram</span>
          <span class="ico telegram"><svg><use xlink:href="theme/img/sprite.svg#telegram"></use></svg></span>
        </a>
      </li>
      <li>
        <button class="btn yellow" type="button">Отправить на почту</button>
      </li>
    </ul>
  }
  @if(block == 'main_s13') {
    <div class="h2">Получить консультацию <br>по любым вопросам</div>
    <div class="desc">Оставьте контактный номер и Вам перезвонит наш специалист</div>
    <form action="">
      <fieldset><input type="text" placeholder="Ваше имя"></fieldset>
      <fieldset><input type="text" placeholder="Телефон"></fieldset>
      <fieldset><button class="btn yellow" type="submit">Отправить заявку</button></fieldset>
    </form>
  }
  @if(block == 'main_s18') {
    <div class="h2">у вас ещё нет проекта? <br>мы готовы его разработать.</div>
     <div class="desc">Оставьте контактный номер и Вам перезвонит наш специалист</div>
    <form action="">
      <fieldset><input type="text" placeholder="Ваше имя"></fieldset>
      <fieldset><input type="text" placeholder="Телефон"></fieldset>
      <fieldset><button class="btn yellow" type="submit">Отправить заявку заявку</button></fieldset>
    </form>
  }
  @if(block == 'main_s23') {
    <div class="h2">Получите бесплатный расчет стоимости</div>
    <div class="desc">Заполните форму и мы рассчитаем стоимость изготовления вашего заказа в кратчайшие сроки</div>
    <form class="block" action="">
      <div class="items">
        <div class="item">
          <fieldset><input type="text" placeholder="Ваше имя"></fieldset>
          <fieldset><input type="text" placeholder="Телефон"></fieldset>
          <fieldset><input type="text" placeholder="E-mail"></fieldset>
        </div>
        <div class="item">
          <fieldset><textarea name="" placeholder="Сообщение"></textarea></fieldset>
          <fieldset>
            <button type="button" class="upload">
              <svg><use xlink:href="theme/img/sprite.svg#clip"></use></svg>
              <span>Прикрепите файл с техзаданием</span>
            </button>
            <div class="small"><i>Выберите файл, размер которого не превышает 50 МБ.</i></div>
          </fieldset>
        </div>
      </div>
      <fieldset class="checkbox">
        <input type="checkbox" id="checkbox">
        <label for="checkbox">
          <span>Нажимая кнопку "Отправить заявку", я даю согласие на обработку персональных данных и соглашаюсь с <a href="">политикой конфиденциальности</a></span>
        </label>
      </fieldset>
      <fieldset class="center"><button class="btn yellow" type="submit">Отправить заявку</button></fieldset>
    </form>
  }
</section>
 