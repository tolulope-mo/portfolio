import NavBar from "../../components/navBar/navBar";
import HeroSection from "../../components/heroSection/hero";
import WorkComponent from "../../components/work";
import RecentPosts from '../../components/recentPosts'
import Footer from "../../components/footer/footer";

import style from './home.module.css'

function Home () {
    return (
        <div>
            <NavBar />
            
            <div className={style.overallDiv}>
                <div id='home' />
                <HeroSection />
                <RecentPosts />
                <WorkComponent heading='Featured works' />
                <Footer />
            </div>
        </div>
    )
}

export default Home;