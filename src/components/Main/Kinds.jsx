import { MixCard } from "../Cards/MixCard.jsx"
import { kindBirds } from "../Cards/kindBird.js"

function Kinds (){
    return(
        <div className='wrapperSection'>
            <h4 className="headSection">Виды птиц</h4>
            <div className='containerFlex'>
            <MixCard {...kindBirds}/>
            <MixCard {...kindBirds}/>
            <MixCard {...kindBirds}/>
            <MixCard {...kindBirds}/>
            </div>
        </div>
    )
}

export default Kinds