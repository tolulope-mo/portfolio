import styles from './recentPosts.module.css'
import Button from '../button';


const PostCards = [
    {
        title: 'Making a design system from scratch',
        date: '12 Feb 2020',
        index: 1,
        category: 'Design, Pattern',
        details: 'An overview of building a scalable design system from the ground up, focusing on consistency, usability, and components that support long-term product growth.'
    },

    {
        title: 'Creating pixel perfect icons in Figma',
        index: 2,
        date: '12 Feb 2020',
        category: 'Figma, Icon Design',
        details: 'A practical guide to designing clean, pixel-perfect icons in Figma, covering grid usage, alignment techniques, and export-ready best practices.'
    }
]


function RecentPosts () {

    function linkFunc (e){
        e.preventDefault();
        window.location.href= '/works'
    }

    return (
        <section className={styles.container} >
        <div className={styles.wrapper1} >
        <div className={styles.header} >
            <p className={styles.sectionTitle} >Recent Posts</p>
            <Button btnFunction={linkFunc}  text='view all' variant='secondary' />
        </div>

        <article className={styles.cardLists} >
            {PostCards.map((card)=>{
                return (
                    <li key={card.index} className={styles.cardWrapper} >
                        <h2 className={styles.cardTitle} >{card.title}</h2>

                        <aside  className={styles.cardDetails1Wrapper}>
                            <p className={styles.cardDetails1} >{card.date}</p>
                            <span className={styles.line}></span>
                            <p className={styles.cardDetails1}>{card.category}</p>
                        </aside>

                        <p className={styles.cardDetails2}>{card.details}</p>

                    </li>
                )
            })}
        </article>
        </div>
        </section>
    )
}

export default RecentPosts;