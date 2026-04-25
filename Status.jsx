/* global React */

function Status() {
  const rows = [
    { icon: 'award', k: 'TRL 6', v: 'Прототип валидирован в клинической среде' },
    { icon: 'shield-check', k: 'Патент RU', v: 'Заявка на способ прогнозирования (2024)' },
    { icon: 'database', k: 'База данных', v: '1 240 пациентов, 5-летний follow-up' },
    { icon: 'book-open', k: 'Публикации', v: '3 рецензируемых, 2 в работе' },
  ];
  return (
    <section className="lc-section" id="status">
      <div className="lc-container">
        <div className="lc-section__head">
          <span className="lc-eyebrow">Текущий статус</span>
          <h2>Где находится проект</h2>
        </div>
        <div className="lc-status">
          {rows.map((r, i) => (
            <div className="lc-status__row" key={i}>
              <div className="lc-status__icon"><i data-lucide={r.icon}></i></div>
              <div className="lc-status__k">{r.k}</div>
              <div className="lc-status__v">{r.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Status = Status;
