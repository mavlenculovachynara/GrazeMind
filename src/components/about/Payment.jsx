import React from 'react';
import './Payment.css'

const Payment = () => {
  return (
    <div className="payment-container">
      <h2>Как оплатить и что получить:</h2>
      <p>
        Добро пожаловать! Мы предлагаем простые и гибкие варианты оплаты, чтобы вы могли выбрать то, что подходит именно для вас.
      </p>

      <h3>1. Платные подписки:</h3>
      <p>
        <strong>Выбирайте подписку по вашему уровню и потребностям:</strong> у нас есть несколько тарифных планов с разными функциями. Например, базовый план включает основные возможности мониторинга, а премиум-план предоставляет расширенные аналитические инструменты и уведомления.
      </p>
      <p>
        <strong>Попробуйте бесплатно:</strong> Новым пользователям мы предоставляем бесплатный пробный период, чтобы вы могли оценить все преимущества нашей платформы перед тем, как принять решение.
      </p>

      <h3>2. Платные тарифы в зависимости от количества скота:</h3>
      <p>
        <strong>Платите с учетом вашего стада:</strong> Мы предлагаем гибкие тарифы, учитывая количество животных в вашем хозяйстве. Это выгодно для небольших ферм, а также дает возможность масштабироваться для крупных хозяйств.
      </p>
      <p>
        <strong>Экономьте с сезонными скидками:</strong> Мы регулярно предоставляем акции и скидки, чтобы сделать наш сервис еще доступнее в периоды увеличенной активности в сельском хозяйстве.

      </p>

      <h3>3. Услуги мониторинга и консультации:</h3>
      <p>
        <strong>Получайте профессиональные консультации:</strong> Воспользуйтесь нашими экспертными услугами, чтобы получить индивидуальные консультации от специалистов в области животноводства.
      </p>
      <p>
        <strong>Обучайтесь с нашими образовательными пакетами:</strong> Развивайтесь вместе с нами, участвуя в вебинарах, тренингах и образовательных программах, доступных за дополнительную плату.
      </p>

      <h3>4. Продажа оборудования:</h3>
      <p>
        <strong>Получайте комплексные решения:</strong> Наши предложения включают не только программное обеспечение, но и специализированное оборудование для оптимальной работы вашей системы.
      </p>
      <p>
        <strong>Лизинг для широкой аудитории:</strong> Предоставляем программы лизинга оборудования, что делает наши продукты доступными для всех.
      </p>

      <p>
        А еще, если вы впервые пользуетесь нашим продуктом, мы рады предложить вам <strong>1 месяц бесплатного пробного периода</strong>. Попробуйте, и если наш продукт вас устроит, вы сможете легко приобрести подписку.
      </p>
    </div>
  );
};

export default Payment;
