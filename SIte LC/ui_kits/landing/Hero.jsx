/* global React */

function Hero() {
  return (
    <section className="lc-hero">
      <div className="lc-hero__bg" aria-hidden="true"></div>
      <div className="lc-container lc-hero__inner">
        <div className="lc-hero__copy">
          <span className="lc-eyebrow">
            <i data-lucide="brain-circuit"></i>
            AI-скрининг · HealthTech
          </span>
          <h1>Ранний прогноз риска ИБС и ишемического инсульта<br/>по данным ОАК.</h1>
          <p className="lc-lead">
            LeukoCheck рассчитывает индивидуальный риск на основе лейкоцитарных
            индексов и артериального давления. Нейросетевая модель,
            валидированная на когорте 1 240 пациентов — <strong>AUC 0,82</strong>.
          </p>
          <div className="lc-hero__actions">
            <a className="lc-btn lc-btn--primary lc-btn--lg" href="#cta">
              Запросить демо <i data-lucide="arrow-right"></i>
            </a>
            <a className="lc-btn lc-btn--secondary lc-btn--lg" href="#evidence">
              Научная база
            </a>
          </div>
          <div className="lc-hero__trust">
            <span><i data-lucide="shield-check"></i> Патент RU</span>
            <span><i data-lucide="award"></i> TRL 6</span>
            <span><i data-lucide="book-open"></i> Мета-анализы 2021–2024</span>
          </div>
        </div>

        <div className="lc-hero__card">
          <div className="lc-report">
            <div className="lc-report__head">
              <div>
                <div className="lc-report__title">Отчёт скрининга</div>
                <div className="lc-report__sub">Пациент И. · 58 лет · 14.03.2026</div>
              </div>
              <span className="lc-chip lc-chip--med">
                <span className="lc-dot" style={{background:'#D97706'}}></span>Погранично
              </span>
            </div>

            <div className="lc-report__score">
              <div>
                <div className="lc-report__label">5-летний риск ИБС</div>
                <div className="lc-report__val">14.2<span className="lc-report__unit">%</span></div>
              </div>
              <div className="lc-report__meter">
                <div className="lc-meter">
                  <div className="lc-meter__marker" style={{left:'62%'}}></div>
                </div>
                <div className="lc-meter__ticks">
                  <span>0</span><span>5</span><span>10</span><span>15</span><span>20+</span>
                </div>
              </div>
            </div>

            <div className="lc-report__grid">
              <div><div className="lc-k">NLR</div><div className="lc-v">2.34</div></div>
              <div><div className="lc-k">MLR</div><div className="lc-v">0.28</div></div>
              <div><div className="lc-k">ИСНМ</div><div className="lc-v">1.82</div></div>
              <div><div className="lc-k">АД</div><div className="lc-v">128/82</div></div>
            </div>

            <div className="lc-report__foot">
              <i data-lucide="info"></i>
              Инструмент поддержки принятия решений. Не заменяет заключение врача.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
