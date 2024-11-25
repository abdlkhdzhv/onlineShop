import card1 from "/фото.svg";
import card2 from "/Rectangle 369.svg";
import card3 from "/otdelniyVidCorm.svg";
import { Button1 } from "../Buttons/Button1";

function Catalog() {
  return (
    <div className='wrapperSection'>
      <h4 className="headSection">Каталог</h4>
      <div className='containerFlex'>
        <div className='itemContainer'>
          <img src={card1} alt="" />
          <h4>Кормушки</h4>
          <Button1 />
        </div>
        <div className='itemContainer'>
          <img src={card2} alt="" />
          <h4>Готовые миксы</h4>
          <Button1 />
        </div>
        <div className='itemContainer'>
          <img src={card3} alt="" />
          <h4>Отдельные виды кормов</h4>
          <Button1 />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
