import Catalog from "./Catalog";
import styles from '../styles/Main.module.css'
import Mixes from "./Mixes";
import Kinds from "./Kinds";
import { Feed } from "./Feed";
import { Feeders } from "./Feeders";

function Main() {
    return(
        <div className={styles.main}>
            <Catalog />
            <Mixes />
            <Kinds />
            <Feed />
            <Feeders />
        </div>
    )
}

export default Main