/* global React */

function Problem() {
  return (
    <section className="lc-section lc-section--muted" id="problem">
      <div className="lc-container lc-two">
        <div>
          <span className="lc-eyebrow">Проблема</span>
          <h2>ССЗ — причина №1 смертности. Ранний скрининг работает — если он рутинный.</h2>
          <p>
            Классические шкалы (SCORE, Framingham) требуют липидного профиля и
            систематических визитов. На уровне первичного звена это работает
            редко. Рутинный ОАК — есть почти всегда.
          </p>
          <p>
            LeukoCheck извлекает предикторы риска из данных, которые уже
            собираются. Никаких новых заборов, никаких новых анализаторов.
          </p>
        </div>
        <div className="lc-problem__stats">
          <div className="lc-problem__stat">
            <div className="lc-problem__val" style={{color:'#DC2626'}}>≈ 17 млн</div>
            <div className="lc-problem__label">смертей от ССЗ в мире ежегодно (ВОЗ)</div>
          </div>
          <div className="lc-problem__stat">
            <div className="lc-problem__val" style={{color:'#DC2626'}}>46 %</div>
            <div className="lc-problem__label">всех смертей в РФ приходятся на ССЗ</div>
          </div>
          <div className="lc-problem__stat">
            <div className="lc-problem__val" style={{color:'#D97706'}}>&lt; 30 %</div>
            <div className="lc-problem__label">пациентов проходят формальную оценку риска</div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Problem = Problem;
