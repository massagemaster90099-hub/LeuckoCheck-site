/* global React */

function Technology() {
  const indices = [
    {
      code: 'NLR',
      name: 'Нейтрофильно-лимфоцитарное отношение',
      formula: 'Нейтрофилы / Лимфоциты',
      value: '2.34',
      note: 'Маркер системного воспаления; растёт при атеросклеротическом поражении.',
    },
    {
      code: 'MLR',
      name: 'Моноцитарно-лимфоцитарное отношение',
      formula: 'Моноциты / Лимфоциты',
      value: '0.28',
      note: 'Ассоциирован с нестабильностью бляшки и микроциркуляторной дисфункцией.',
    },
    {
      code: 'ИСНМ',
      name: 'Индекс системной нейтрофильно-моноцитарной воспалительности',
      formula: '(Нейтр. × Моноц.) / Лимф.',
      value: '1.82',
      note: 'Композитный маркер; по мета-анализам превосходит NLR в прогнозе MACE.',
    },
  ];

  return (
    <section className="lc-section lc-section--muted" id="technology">
      <div className="lc-container">
        <div className="lc-section__head">
          <span className="lc-eyebrow">Технология</span>
          <h2>Три индекса из ОАК плюс гемодинамика</h2>
          <p className="lc-lead">
            Все предикторы извлекаются из развернутого ОАК и рутинного измерения
            АД. Никаких дополнительных анализов не требуется.
          </p>
        </div>

        <div className="lc-idx-grid">
          {indices.map(ix => (
            <div className="lc-idx" key={ix.code}>
              <div className="lc-idx__head">
                <span className="lc-idx__code">{ix.code}</span>
                <span className="lc-idx__value">{ix.value}</span>
              </div>
              <div className="lc-idx__name">{ix.name}</div>
              <div className="lc-idx__formula">{ix.formula}</div>
              <div className="lc-idx__note">{ix.note}</div>
            </div>
          ))}
        </div>

        <div className="lc-net">
          <div className="lc-net__head">
            <div>
              <div className="lc-eyebrow" style={{color:'#0D9488'}}>Нейросеть</div>
              <h3>Многослойный перцептрон</h3>
              <p>Входы → два скрытых слоя → вероятность события. Обучение с кросс-валидацией и внешней тестовой когортой.</p>
            </div>
            <span className="lc-chip lc-chip--accent">AUC 0,82</span>
          </div>
          <svg className="lc-net__svg" viewBox="0 0 640 200" preserveAspectRatio="xMidYMid meet">
            {/* inputs */}
            {['NLR','MLR','ИСНМ','SBP','DBP','Возр.'].map((lab, i) => (
              <g key={i}>
                <circle cx="60" cy={20 + i * 32} r="10" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.5"/>
                <text x="22" y={24 + i * 32} fontSize="11" fill="#475569" fontFamily="IBM Plex Mono, monospace" textAnchor="end">{lab}</text>
              </g>
            ))}
            {/* hidden layer 1 */}
            {Array.from({length: 6}).map((_, i) => (
              <circle key={i} cx="260" cy={20 + i * 32} r="10" fill="#fff" stroke="#CBD5E1" strokeWidth="1.5"/>
            ))}
            {/* hidden layer 2 */}
            {Array.from({length: 4}).map((_, i) => (
              <circle key={i} cx="440" cy={50 + i * 32} r="10" fill="#fff" stroke="#CBD5E1" strokeWidth="1.5"/>
            ))}
            {/* output */}
            <circle cx="600" cy="100" r="14" fill="#CCFBF1" stroke="#14B8A6" strokeWidth="2"/>
            <text x="600" y="104" fontSize="10" fill="#0F766E" fontFamily="IBM Plex Mono, monospace" textAnchor="middle">риск</text>
            {/* connections */}
            <g stroke="#CBD5E1" strokeWidth="0.6" opacity="0.7">
              {[0,1,2,3,4,5].flatMap(a => [0,1,2,3,4,5].map(b => (
                <line key={`a${a}-${b}`} x1="70" y1={20 + a * 32} x2="250" y2={20 + b * 32}/>
              )))}
              {[0,1,2,3,4,5].flatMap(a => [0,1,2,3].map(b => (
                <line key={`b${a}-${b}`} x1="270" y1={20 + a * 32} x2="430" y2={50 + b * 32}/>
              )))}
              {[0,1,2,3].map(a => (
                <line key={`c${a}`} x1="450" y1={50 + a * 32} x2="586" y2="100"/>
              ))}
            </g>
            <text x="60" y="195" fontSize="10" fill="#64748B" fontFamily="IBM Plex Sans, sans-serif" textAnchor="middle">входы (6)</text>
            <text x="260" y="195" fontSize="10" fill="#64748B" fontFamily="IBM Plex Sans, sans-serif" textAnchor="middle">скрытый слой 1</text>
            <text x="440" y="195" fontSize="10" fill="#64748B" fontFamily="IBM Plex Sans, sans-serif" textAnchor="middle">скрытый слой 2</text>
            <text x="600" y="195" fontSize="10" fill="#64748B" fontFamily="IBM Plex Sans, sans-serif" textAnchor="middle">выход</text>
          </svg>
        </div>
      </div>
    </section>
  );
}

window.Technology = Technology;
