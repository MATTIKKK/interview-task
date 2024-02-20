import "./page2.css";

const Page2 = () => {
  return (
    <div className="page two">
      <p className="mainTitle">Эта услуга для Вас, если Вы:</p>
      <div className="cards">
        <div className="cardContainer2">
          <p className="titleInContainer">Устали менять таргетологов</p>
          <div className="cardContent">
            <p>Получите 6 digital специалистов по цене 1 таргетолога</p>
            <br/>
            <ul className="list">
              <li>Маркетолог</li>
              <li>Копирайтер</li>
              <li>Мобилограф</li>
              <li>Дизайнер</li>
              <li>Digital маркетолог</li>
              <li>Таргетолог</li>
            </ul>
            <p>+</p>
            <p style={{textAlign:"center"}}>Искуственный Интеллект</p>
          </div>
        </div>
        <div className="cardContainer2">
          <p className="titleInContainer">Клиенты пишут, но не покупают</p>
          <div className="cardContent"> 
            <p>Покупайте только качественные заявки, благодаря нашей собственной методике ультраточного таргетирования <br /><b>Rocket Power</b> </p>
          </div>
        </div>
        <div className="cardContainer2">
          <p className="titleInContainer">Цена за лид заоблачна</p>
          <div className="cardContent">
            <p>Получите в 2 раза больше качественных лидов за тот же бюджет при помощи американских стратегий продвижения</p>
          </div>
        </div>
      </div>
      <button className="primaryButton">Запустить таргет</button>
    </div>
  );
};

export default Page2;
