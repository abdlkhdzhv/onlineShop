import logo from "/лого.svg";
import styles from "../styles/Header.module.css";
import image from "/spisok.svg";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <img src={logo} alt="" />
        <ul className={styles.navigation}>
          <li className={styles.selectNav}>
            Каталог <img src={image} alt="" className={styles.spisok} />
              <ul className={styles.dropSel}>
                <li>
                  <Link to={'/mixes'} className='link'>Готовые миксы</Link>
                </li>
                <li>
                  <Link to={'/kinds'} className='link'>Виды птиц</Link>
                </li>
                <li>
                  <Link to={'/feed'} className='link'>Зерна</Link>
                </li>
                <li>
                <Link to={'/feeders'} className='link'>Кормушки</Link>
                </li>
                <li>
                  <Link to={'/'} className='link'>Главная страница</Link>
                </li>
              </ul>
          </li>
          <li>О проекте</li>
          <li>Птицы</li>
          <li>Пожертвования</li>
        </ul>
      </div>
      <div>
        <div className={styles.wrapInfo}>
          <div className={styles.wrapProfile}>
            <button className={styles.tel}></button>
            <p>8 920 999 43 50</p>
            <button className={styles.buy}></button>
            <button className={styles.profile}></button>
          </div>
          <div>
            <input type="text" id={styles.serch} placeholder="Поиск" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
