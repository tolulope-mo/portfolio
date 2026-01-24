import Button from "../button";
import styles from './hero.module.css'
import ProfilePic from '../../images/pic.jpg'

function HeroSection () {

    function onClickHandler (e) {
        e.preventDefault()
        window.location.href = "/resume";
    }
    
    return(<>

        <div className={styles.wrapper1}>

        <section className={styles.wrapper}>

            <div className={styles.leftDiv}>
                <h1 className={styles.headerText}>Hi, I am John,<br />Creative Technologist</h1>
                <p className={styles.headerPg}>I design and build interactive digital experiences that blend creativity, technology, and human-centered thinking, helping ideas come to life in meaningful and engaging ways.</p>
                <Button btnFunction={onClickHandler} text='View Resume' />
            </div>

            <img className={styles.heroImg} src={ProfilePic}/>

        </section>

        </div>
        </>
    )
}
export default HeroSection;

