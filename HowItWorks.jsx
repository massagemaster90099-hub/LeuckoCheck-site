/* global React */

function HowItWorks() {
  const steps = [
    {
      icon: 'flask-conical',
      n: '01',
      t: 'Загрузка ОАК',
      d: 'Интеграция с ЛИС клиники или ручной ввод. Поддержка CSV и HL7.',
    },
    {
      icon: 'calculator',
      n: '02',
      t: 'Расчёт индексов',
      d: 'NLR, MLR, ИСНМ — вычисляются автоматически из развернутого ОАК.',
    },
    {
      icon: 'brain-circuit',
      n: '03',
      t: 'Нейросетевая модель',
      d: 'Индексы + АД + демография → вероятность события в 5-летнем горизонте.',
    },
    {
      icon: 'file-text',
      n: '04',
      t: 'Отчёт для врача',
      d: 'Интерпретация, уровень риска, рекомендации по маршрутизации.',
    },
  ];

  return (
    <section className="lc-section" id="solution">
      <div className="lc-container">
        <div className="lc-section__head">
          <span className="lc-eyebrow">Решение</span>
          <h2>Как работает LeukoCheck</h2>
          <p className="lc-lead">
            От рутинного анализа крови до интерпретируемого отчёта о риске —
            четыре шага, полностью автоматизированных.
          </p>
        </div>
        <div className="lc-steps">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div className="lc-step">
                <div className="lc-step__icon"><i data-lucide={s.icon}></i></div>
                <div className="lc-step__n">{s.n}</div>
                <div className="lc-step__t">{s.t}</div>
                <div className="lc-step__d">{s.d}</div>
              </div>
              {i < steps.length - 1 && <div className="lc-step__arrow" aria-hidden="true">
                <i data-lucide="arrow-right"></i>
              </div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

window.HowItWorks = HowItWorks;
