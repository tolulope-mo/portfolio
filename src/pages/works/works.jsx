import NavBar from "../../components/navBar/navBar";
import styles from './works.module.css'
import Footer from "../../components/footer/footer";
import WorkComponent from "../../components/work";


function Works () {
    return <>
    <div id='home' />
    <div className={styles.wrapper} >
        
        <NavBar />
        <main><WorkComponent variant='page' heading='Works'/></main>
        <Footer />
    </div>
    </>
}

export default Works;