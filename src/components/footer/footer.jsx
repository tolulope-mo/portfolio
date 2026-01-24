import styles from './footer.module.css'
import LinIcon from '../../assets/lin'
import FbIcon from '../../assets/fb'
import IgIcon from '../../assets/ig'
import TwitterIcon from '../../assets/twitter'

const Icons = [ LinIcon, IgIcon, FbIcon, TwitterIcon ]


function Footer () {
    return (
        <footer className={styles.wrapper}>
          
        <ul className={styles.iconList}>
                {Icons.map((Icon, index)=>{
                    return(
                        <li key={index} className={styles.icon}><Icon /></li>
                    )
                })}
        </ul>

        <p className={styles.text} >Copyright ©2020 All rights reserved </p>
        
        </footer>
    )
}

export default Footer