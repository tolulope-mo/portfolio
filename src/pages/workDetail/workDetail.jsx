import styles from './workDetail.module.css'
import NavBar from '../../components/navBar/navBar';

import workDetail1 from '../../images/workDetail1.png'
import workDetail2 from '../../images/workDetail2.png'
import workDetail3 from '../../images/workDetail3.png'
import Footer from '../../components/footer/footer';


function WorkDetail () {
    return (
        <div>
            <NavBar />
            <div className={styles.wrapper}>
            <main className={styles.container}>

                <h1 className={styles.heading1}>Designing Dashboards with usability in mind</h1>

                <aside className={styles.lineTwo}>
                    <h4  className={styles.workYear} >2020</h4>
                    <p className={styles.workCategory} >Dashboard, User Experience Design</p>
                </aside>

                <p  className={styles.workDetails} >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                <img className={styles.img} src={workDetail2} alt='img' />

                <h2 className={styles.heading2} >Heading 1</h2>

                <h3 className={styles.heading3}>Heading 2</h3>

                <img className={styles.img} src={workDetail1} alt='img' />

                <img className={styles.img} src={workDetail3} alt='img' />
            </main>
            </div>
            <Footer />
        </div>
    )
}

export default WorkDetail;