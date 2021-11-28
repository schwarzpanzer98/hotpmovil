import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { FaChevronLeft } from 'react-icons/fa';
import Panel from '../../assets/Icons/Panel';
import Product from '../../assets/Icons/Product';
import Link from 'next/link';
import styles from '../../styles/SideBar.module.css';
import { IconContext } from 'react-icons';
import ArrowLeft from '../../assets/Icons/ArrowLeft';


function SideBar({ name }) {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar)
    }
    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.menuBars}>
                    <FaChevronRight onClick={showSidebar} />
                </div>
                {console.log(sidebar)}
            </div>
            {sidebar ? <nav className={styles.active}>
                <ul onClick={showSidebar} className={styles.navMenuItems}>
                    <li className={styles.navbarToogle}>
                        <div className={styles.menuBars}>
                            <FaChevronLeft  />
                        </div>
                        <div className={styles.accountContainer}>
                            <p className={styles.nameUser}>Olá, {name}!</p>
                            <a className={styles.myAccount}>Minha Conta</a>
                        </div>
                    </li>
                    <li className={styles.navText}>
                        <Link href="/" >
                            <a>
                                <Panel width={21} height={21} fill={'#fff'} />
                                <span className={styles.spanText}>Painel</span>
                            </a>
                        </Link>

                    </li>
                    <li className={styles.navText}>
                        <Link href="/Product" >
                            <a>
                                <Product width={21} height={21} fill={'#fff'} />
                                <span className={styles.spanText}>Produtos</span>
                            </a>
                        </Link>

                    </li>

                </ul>
            </nav> : <nav className={styles.navMenu}>
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
                                <span className={styles.spanText}>Painel</span>
                            </a>
                        </Link>

                    </li>
                    <li className={styles.navText}>
                        <Link href="/Product" >
                            <a>
                                <Product width={21} height={21} fill={'#fff'} />
                                <span className={styles.spanText}>Produtos</span>
                            </a>
                        </Link>

                    </li>

                </ul>
            </nav>}
        </>
    )
}

export default SideBar;

