/* global React */

function Evidence() {
  const pubs = [
    {
      tag: 'Meta-analysis',
      year: '2023',
      title: 'NLR as a predictor of MACE in stable coronary artery disease',
      journal: 'European Heart Journal · Cohort n = 38 291',
    },
    {
      tag: 'Original research',
      year: '2024',
      title: 'Monocyte-to-lymphocyte ratio and ischemic stroke recurrence',
      journal: 'Stroke · Cohort n = 4 112',
    },
    {
      tag: 'Внешняя валидация',
      year: '2025',
      title: 'LeukoCheck: валидация нейросетевой модели на региональной когорте',
      journal: 'Внутренний отчёт · n = 1 240 · AUC 0,82',
    },
  ];
  return (
    <section className="lc-section" id="evidence">
      <div className="lc-container">
        <div className="lc-section__head">
          <span className="lc-eyebrow">Научная база</span>
          <h2>Модель построена на мета-анализах и валидирована внешне</h2>
          <p className="lc-lead">
            Роль лейкоцитарных индексов в прогнозе ССЗ — предмет десятков
            публикаций за последние 5 лет. LeukoCheck реализует эти
            зависимости в виде рабочего инструмента.
          </p>
        </div>
        <div className="lc-pubs">
          {pubs.map((p, i) => (
            <a className="lc-pub" key={i} href="#">
              <div className="lc-pub__head">
                <span className="lc-chip lc-chip--neutral">{p.tag}</span>
                <span className="lc-pub__year">{p.year}</span>
              </div>
              <div className="lc-pub__title">{p.title}</div>
              <div className="lc-pub__journal">{p.journal}</div>
              <div className="lc-pub__link">
                Читать <i data-lucide="arrow-up-right"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Evidence = Evidence;
