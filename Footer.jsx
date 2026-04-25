/* global React */

function Footer() {
  return (
    <footer className="lc-foot">
      <div className="lc-container lc-foot__grid">
        <div>
          <img src="../../assets/logo.svg" alt="LeukoCheck" height="28"/>
          <p className="lc-foot__tag">AI-скрининг риска ССЗ по данным ОАК.</p>
        </div>
        <div>
          <div className="lc-foot__k">Продукт</div>
          <a href="#solution">Решение</a>
          <a href="#technology">Технология</a>
          <a href="#status">Статус</a>
        </div>
        <div>
          <div className="lc-foot__k">Наука</div>
          <a href="#evidence">Публикации</a>
          <a href="#">Патенты</a>
          <a href="#">Валидация</a>
        </div>
        <div>
          <div className="lc-foot__k">Контакты</div>
          <a href="mailto:info@leukocheck.ru">info@leukocheck.ru</a>
          <a href="#">Телеграм</a>
        </div>
      </div>
      <div className="lc-container lc-foot__fine">
        <span>© 2026 LeukoCheck</span>
        <span>Инструмент поддержки принятия решений · не заменяет заключение врача</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
