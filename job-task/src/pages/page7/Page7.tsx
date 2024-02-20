import "./page7.css"
const Page7 = () => {
  return (
    <div className='page seven'>
        <div className='bigCard'>
            <p className="sevensTitle">Еще остались сомнения?</p>
            <p className="sevensDescription">Оставь заявку и получи бесплатный чек-лист на проверку своего таргетолога</p>
            <div className="form">
              <input type="text" placeholder="Имя"/>
              <input type="text" placeholder="+7 (777) 777 77 77"/>
            </div>
            <button className='primaryButton'>Оставить заявку</button>
        </div>
        <footer></footer>
    </div>
  )
}

export default Page7