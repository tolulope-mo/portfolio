import MenuIcon from "../../assets/menuIcon"
import Blog from "../../pages/blog/blog"
import Works from "../../pages/works/works"
import Contact from "../../pages/contact"
import Home from "../../pages/home/home"
import Resume from "../../pages/resume/resume"
import { NavLink } from "react-router"
import styles from './navBar.module.css'
import Button from "../button"
import { useState } from "react"

import menuImg from '../../images/menu.png'
import close from '../../images/close.png'


const PagesNav = [
     {
        label: 'Home',
        path: "/",
        index: 1,
        fragment: '#home'
   
    },
    
    {
        label : 'Works',
        path: "/works",
        index: 2,
        fragment: '#home'

    },

    {
        label: 'Blog',
        path: "/blog",
        index: 3,
        fragment: '#home'
    }, 

    {
        label: 'Resume',
        path: "/resume",
        index: 4,
        fragment: '#home'
    }, 

]

function NavBar () {

    const [menu, setMenu] = useState(false)

    function displayMenu () {
        setMenu(prev=> !prev)
    }

    return (
        <header className={styles.header}>
            
        <div onClick={displayMenu} className={styles.menuIcon} >
        <img className={styles.image} src={menu ? close : menuImg} />
        </div>

        <div className={ menu ? styles.container2: styles.container}> 

                {
                PagesNav.map((link, index)=>{

                return (

                    <nav key={index} > 

                        <NavLink 
                            className={({isActive})=> isActive ? styles.link2 : styles.link}

                            to={link.path}> {link.label}

                        </NavLink>
                    </nav>

                )})
                }
        </div>

        </header>
    )
}

export default NavBar;

