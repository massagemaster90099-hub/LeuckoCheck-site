/* global React */

function StatsBand() {
  const stats = [
    { v: '0,82', k: 'AUC', s: 'внешняя валидация' },
    { v: '1 240', k: 'пациентов', s: 'в когорте' },
    { v: '< 30 сек', k: 'на отчёт', s: 'по готовому ОАК' },
    { v: '3', k: 'индекса', s: 'NLR · MLR · ИСНМ' },
  ];
  return (
    <section className="lc-stats">
      <div className="lc-container lc-stats__grid">
        {stats.map((s, i) => (
          <div className="lc-stat" key={i}>
            <div className="lc-stat__v">{s.v}</div>
            <div className="lc-stat__k">{s.k}</div>
            <div className="lc-stat__s">{s.s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.StatsBand = StatsBand;
