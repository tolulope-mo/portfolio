import styles from './work.module.css'
import work1 from '../../images/work1.png'
import work2 from '../../images/work2.png'
import work3 from '../../images/work3.png'
import work4 from '../../images/work4.png'



const featuredWorks = [
    {
        imgSrc: work1,
        index: 1,
        title: 'Designing Dashboards',
        year: '2020',
        category: 'Dashboard',
        details: 'A case study focused on designing intuitive dashboards, emphasizing clear data visualization, usability, and layouts that help users quickly understand complex information.'
    },

    {
        imgSrc: work2,
        index: 2,
        title: 'Vibrant Portraits of 2020',
        year: '2018',
        category: 'Illustration',
        details: 'A personal illustration series exploring color, expression, and form, capturing diverse personalities through bold compositions and vibrant visual storytelling.'
    },

    {
        imgSrc: work3,
        index: 3,
        title: '36 Days of Malayalam type',
        year: '2018',
        category: 'Typography',
        details: 'An experimental typography project exploring Malayalam letterforms, focusing on rhythm, structure, and creative interpretation across a consistent daily challenge.'
    },

    {
        imgSrc: work4,
        index: 4,
        title: 'Components',
        year: '2018',
        category: 'Components, Design',
        details: 'A design exploration centered on building reusable UI components, prioritizing consistency, scalability, and visual harmony across digital products.'
    }
]

function WorkComponent (props) {
    return (
        <section className={styles.container} >

            <div className={styles.wrapper} >
                
            <h2 className={styles.sectionTitle} data-variant={props.variant}>{props.heading}</h2>

            <ul >
                {featuredWorks.map((work)=>{
                    return (
                        <div key={work.index}  className={styles.workContainer} >
                            <img className={styles.image} src={work.imgSrc} />
                          


                            <div  className={styles.rightDiv} >
                                <h3 className={styles.workTitle} >{work.title}</h3>

                                <aside className={styles.lineTwo} >
                                    <p className={styles.workYear} >{work.year}</p>
                                    <p className={styles.workCategory} >{work.category}</p>
                                </aside>

                                <p className={styles.workDetails} >{work.details}</p>
                            </div>
                        </div>
                    )
                })}
            </ul>
            </div>
        </section>
    )
}

export default WorkComponent;