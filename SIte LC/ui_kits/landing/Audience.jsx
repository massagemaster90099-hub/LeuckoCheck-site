/* global React */

function Audience() {
  const groups = [
    {
      icon: 'stethoscope',
      t: 'Терапевтам',
      d: 'Скрининг на приёме за секунды — по уже готовому ОАК. Маршрутизация пациентов из группы риска.',
    },
    {
      icon: 'heart-pulse',
      t: 'Кардиологам и неврологам',
      d: 'Дополнительный слой стратификации поверх классических шкал. Количественная динамика между визитами.',
    },
    {
      icon: 'hospital',
      t: 'Частным клиникам',
      d: 'Превентивные пакеты "Сердце / Сосуды" без дополнительных анализов. White-label отчёт.',
    },
    {
      icon: 'flask-conical',
      t: 'Лабораториям',
      d: 'Надстройка к выдаче ОАК. Интеграция с ЛИС через HL7 или REST.',
    },
  ];
  return (
    <section className="lc-section lc-section--muted" id="audience">
      <div className="lc-container">
        <div className="lc-section__head">
          <span className="lc-eyebrow">Для кого</span>
          <h2>Кому подходит LeukoCheck</h2>
        </div>
        <div className="lc-aud">
          {groups.map((g, i) => (
            <div className="lc-aud__card" key={i}>
              <div className="lc-aud__icon"><i data-lucide={g.icon}></i></div>
              <div className="lc-aud__t">{g.t}</div>
              <div className="lc-aud__d">{g.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Audience = Audience;
