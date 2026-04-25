/* global React */
const { useState } = React;

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={'lc-nav' + (scrolled ? ' lc-nav--scrolled' : '')}>
      <div className="lc-container lc-nav__inner">
        <a className="lc-nav__brand" href="#">
          <img src="../../assets/logo.svg" alt="LeukoCheck" height="32"/>
        </a>
        <nav className="lc-nav__links">
          <a href="#solution">Решение</a>
          <a href="#technology">Технология</a>
          <a href="#evidence">Наука</a>
          <a href="#audience">Для кого</a>
          <a href="#status">Статус</a>
        </nav>
        <div className="lc-nav__cta">
          <a className="lc-btn lc-btn--ghost" href="#">Войти</a>
          <a className="lc-btn lc-btn--primary" href="#cta">Запросить демо</a>
        </div>
      </div>
    </header>
  );
}

window.Nav = Nav;
