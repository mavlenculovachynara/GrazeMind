import React from 'react';
import bgHome from '../../img/swoop-05.svg';
import './Main.css';

const Main = () => {
  return (
    <div style={{
      backgroundImage: `url(${bgHome}), linear-gradient(to bottom, #3498db, #ffffff)`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
       <div className="container">
        <div className="containerform">
          <h1 className='mainH1'>GrazeMind - мониторинг скота</h1>
          <p className='mainP'>GrazeMind - инновационное решение для мониторинга состояния скота.  <br />Наш продукт использует передовые технологии компьютерного зрения<br /> для точного отслеживания здоровья и поведения скота. <br />Простой интерфейс обеспечивает быстрый доступ к важным данным, помогая<br /> фермерам эффективно управлять своим стадом и сэкономить время. </p>
          <h2 className='mainH2'>GrazeMind - ваш надежный помощник в заботе о скоте.</h2>
          <button className='mainBtn'>Узнать подробнее</button>
        </div>
       </div>
    </div>
  );
};

export default Main;
