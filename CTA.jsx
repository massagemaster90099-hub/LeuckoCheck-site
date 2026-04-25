/* global React */

function CTA() {
  return (
    <section className="lc-cta" id="cta">
      <div className="lc-container lc-cta__inner">
        <div>
          <span className="lc-eyebrow" style={{color:'#CCFBF1'}}>Пилот</span>
          <h2 style={{color:'#fff'}}>Запустите LeukoCheck в вашей клинике или лаборатории</h2>
          <p style={{color:'rgba(255,255,255,0.8)', maxWidth: '50ch'}}>
            Пилот занимает 4–6 недель и включает интеграцию с ЛИС, обучение
            персонала и отчёт по валидации на вашей когорте.
          </p>
        </div>
        <form className="lc-cta__form" onSubmit={e => e.preventDefault()}>
          <label>Клиника / лаборатория
            <input type="text" placeholder="Название организации"/>
          </label>
          <label>E-mail для связи
            <input type="email" placeholder="doctor@clinic.ru"/>
          </label>
          <button className="lc-btn lc-btn--primary lc-btn--lg" type="submit">
            Запросить пилот <i data-lucide="arrow-right"></i>
          </button>
          <div className="lc-cta__fine">
            Обрабатываем заявку в течение 2 рабочих дней.
          </div>
        </form>
      </div>
    </section>
  );
}

window.CTA = CTA;
