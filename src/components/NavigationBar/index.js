import React, { useState } from 'react'
import { navs as navTabs } from '../../constants/const'
import { Link} from 'gatsby'
import { FaSearch } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'

import Toggle from './rightNav'
import SearchBar from "../SearchBar"

import styles from './style.module.css'
import logo from '../../images/logo-side.png'

const NavigationBar = (props) =>  {
    const [rightNav, setRightNav] = useState(false);
    const [search, setSearch] = useState(false);
    let toggle;
    let button;
    let searchBar;
    let searchButton;

    const toggleRightNav = () => rightNav === false ? setRightNav(true) : setRightNav(false);
    const toggleSearch = () => search === false ? setSearch(true) : setSearch(false);

    if(search) {
        searchBar = <SearchBar />
        searchButton = <IoClose style={{ marginBottom: '-5px', height: '35px', width: '35px' }} />
    }
    else {
        searchButton = <FaSearch style={{ marginBottom: '-2px', height: '25px', width: '25px' }} />
    }

    if(rightNav) {
        toggle = <Toggle style={styles.toggle}/>
        button = <IoClose style={{ marginBottom: '-5px', height: '35px', width: '35px'}} />
        searchButton = <FaSearch style={{ marginBottom: '-2px', height: '20px', width: '20px'}} />
    }
    else {
        button = <FiMenu style={{ marginBottom: '-5px', height: '35px', width: '35px'}} />
    }

    return (
        <>
        <div className={styles.sticky}>
        <header className={styles.container}>
            <div className={styles.left}>
            <Link to="/"><img src={logo} className={styles.logoSide} alt="OPG Tabar"/></Link>
            </div>
            <div className={styles.right}>
                {navTabs.map(({ tab, to }, index) => {
                    return (
                        <Link key={index} to={to}>
                            <span className={to === props.path ? styles.selected : ""}>{tab}</span>
                        </Link>)
                }
                )}
                <button className={styles.searchButton} onClick={toggleSearch}>
                    {searchButton}
                </button>
            </div>
            <button className={styles.hamburger} onClick={toggleRightNav}>
                {button}
            </button>
            <button className={styles.hamburger} onClick={toggleSearch}>
                {searchButton}
            </button>
            
        </header>
        {toggle}
        {searchBar}
        </div>
        </>
    )
}

export default NavigationBar
