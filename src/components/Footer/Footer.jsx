import image from '/messengers.svg'
import tel from '/tel.svg'

function Footer() {
    
  return (
    <div className='footer'>
      <div className='footInfo'>
        <span>Оплата</span>
        <span>Доставка</span>
      </div>

      <div>
        <img src={image} alt="" />
      </div>

      <div className='footDiv'>
        <img src={tel} alt="" />
        <p>8 920 999 43 50</p>
      </div>
    </div>
  );
}

export default Footer;
