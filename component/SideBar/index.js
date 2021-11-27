import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Panel from '../../assets/Icons/Panel';
import Product from '../../assets/Icons/Product';
import Link from 'next/link';
import styles from '../../styles/SideBar.module.css'

function SideBar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar)
    }
    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.menuBars}>
                    <FaBars onClick={showSidebar} />
                </div>
                {console.log(sidebar)}
            </div>
            <nav className={sidebar ? (styles.navMenu) (styles.active) : (styles.navMenu)}>
                <ul className={styles.navMenuItems}>
                    <li className={styles.navbarToogle}>
                        <div className="menu-bars">
                            <AiOutlineClose />
                        </div>
                    </li>
                    <li className={styles.navText}>
                        <Link href="/" >
                            <a>
                                <Panel width={21} height={21} fill={'#fff'} />
                                <span>Painel</span>
                            </a>
                        </Link>

                    </li>
                    <li className={styles.navText}>
                        <Link href="/Product" >
                            <a>
                                <Product width={21} height={21} fill={'#fff'} />
                                <span>Produtos</span>
                            </a>
                        </Link>

                    </li>

                </ul>
            </nav>

        </>
    )
}

export default SideBar;

