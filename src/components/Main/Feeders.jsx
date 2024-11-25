import { MixCard } from "../Cards/MixCard"
import { feeders } from "../Cards/feeders"


export const Feeders = () => {
  return (
    <div className='wrapperSection'>
            <h4 className="headSection">Кормушки</h4>
            <div className='containerFlex'>
            <MixCard {...feeders}/>
            <MixCard {...feeders}/>
            <MixCard {...feeders}/>
            <MixCard {...feeders}/>
            </div>
        </div>
  )
}
