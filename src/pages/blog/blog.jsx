import NavBar from "../../components/navBar/navBar";
import styles from './blog.module.css'
import Footer from "../../components/footer/footer";

const BlogPosts = [
    {
        title: 'Making a design system from scratch',
        date: '12 Feb 2020',
        category: 'Design, Pattern',
        details: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },

    {
        title: 'Creating pixel perfect icons in Figma',
        date: '12 Feb 2020',
        category: 'Figma, Icon Design',
        details: 'Amet minim mollit non des enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },

     {
        title: 'UI interaction of the week',
        date: '12 Feb 2020',
        category: 'Figma, Icon Design',
        details: 'Amet minim mollit non deserunt ullamco est sit aliqua uis enim velit mollit. Exercitation veAmet minim mollit no n dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    }, 

    {
        title: 'Making a design system from scratch',
        date: '12 Feb 2020',
        category: 'Design, Pattern',
        details: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amollit. Exercitation veniam consequat sunt nostrud amet.'
    },

    {
        title: 'Creating pixel perfect icons in Figma',
        date: '12 Feb 2020',
        category: 'Figma, Icon Design',
        details: 'Amet minim mollit non deserunt ullamco est sit aliqua uis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
]


function Blog() {
    return (<>
            <div id='home' />
        <div className={styles.wrapper} >

        <NavBar />

        <div className={styles.wrapper1}>
        <h1 className={styles.sectionTitle} >Blog</h1>

        <ul className={styles.cardLists} >
            {BlogPosts.map((card, index)=>{
                return (
                    <li key={index} className={styles.cardWrapper} >
                        <h2 className={styles.cardTitle} >{card.title}</h2>

                        <div  className={styles.cardDetails1Wrapper}>
                            <p className={styles.cardDetails1} >{card.date}</p>
                            <div  className={styles.line}></div>
                            <p className={styles.cardDetails2}>{card.category}</p>
                        </div>

                        <p className={styles.cardDetails3}>{card.details}</p>

                    </li>
                )
            })}
        </ul>

        </div>
            
        <Footer />
        </div>
        </>
    )
}



export default Blog;