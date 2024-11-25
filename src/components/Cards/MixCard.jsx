import { useDispatch } from 'react-redux'
import {  Button1 } from '../Buttons/Button1'
import styles from '../styles/MixCard.module.css'
import { updatePrice } from '../../redux/priceReducer'


export const MixCard = ({ image, head, paragraf, price, weights, id }) => {

  const dispatch = useDispatch()

  const handleUpdatePrice = (weight) => {
    dispatch(updatePrice({cardId: id, weight}))
  }

  return (
    <div className={styles.wrapperCard}>
        <img src={image} alt="" />
        <h4 className={styles.head}>{head}</h4>
        <p>{paragraf}</p>
        <h5 className={styles.price}>{price}</h5>
        <div className={styles.wrapperWeight}>
            {(weights || []).map((weight, index) => (
                <button key={index} className={styles.btnMix} onClick={() => handleUpdatePrice(weight)}>{weight} грамм</button>
            ))}
        </div>
        <div>
            <Button1 />
        </div>
    </div>
  )
}
