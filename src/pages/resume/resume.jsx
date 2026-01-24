import CV from '../../images/cv.png'
import CV3 from '../../images/cv3.png'
import styles from './resume.module.css'
import NavBar from '../../components/navBar/navBar'

function Resume () {
    return <>

    <NavBar />
    <div className={styles.container} >
    <h1 className={styles.heading}>My CV</h1>
    <img className={styles.img} src={CV3} alt='CV' />
    </div>

    </>
}


export default Resume