import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { FaChevronLeft } from 'react-icons/fa';
import Panel from '../../assets/Icons/Panel';
import Product from '../../assets/Icons/Product';
import Sales from '../../assets/Icons/Sales';
import Link from 'next/link';
import styles from '../../styles/SideBar.module.css';
import SimpleAccordion from '../Accordion'

function SideBar({ name }) {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    const itemsProduct = [
        {
            title: 'Cadastrar Produto',
            path: '/Product'
        },
    ]

    const itemsSales = [
        {
            title: 'Visão Geral',
            path: '/'
        },
    ]

    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.menuBars}>
                    <FaChevronRight onClick={showSidebar} />
                </div>
            </div>
            {sidebar ? <nav className={styles.active}>
                <ul className={styles.navMenuItems}>
                    <li className={styles.navbarToogle}>
                        <div className={styles.menuBars}>
                            <FaChevronLeft onClick={showSidebar} />
                        </div>
                        <div className={styles.accountContainer}>
                            <p className={styles.nameUser}>Olá, {name}!</p>
                            <a className={styles.myAccount}>Minha Conta</a>
                        </div>
                    </li>
                    <li className={styles.navText} onClick={showSidebar}>
                        <Link href="/" >
                            <a>
                                <Panel width={21} height={21} fill={'#fff'} />
                                <span className={styles.spanText}>Painel</span>
                            </a>
                        </Link>

                    </li>
                    <li className={styles.navText}>
                        <SimpleAccordion icon={<Product width={21} height={21} fill={'#fff'} />} title={"Produtos"} items={itemsProduct} showsidebar={showSidebar} />
                    </li>
                    <li className={styles.navText}>
                        <SimpleAccordion icon={<Sales width={21} height={21} fill={'#fff'} />} title={"Vendas"} items={itemsSales} showsidebar={showSidebar}/>
                    </li>
                </ul>
            </nav> : <nav className={styles.navMenu}>
                <ul className={styles.navMenuItems}>
                    <li className={styles.navbarToogle}>
                        <div className={styles.menuBars}>
                            <FaChevronLeft onClick={showSidebar} />
                        </div>
                        <div className={styles.accountContainer}>
                            <p className={styles.nameUser}>Olá, {name}!</p>
                            <a className={styles.myAccount}>Minha Conta</a>
                        </div>
                    </li>
                    <li className={styles.navText} onClick={showSidebar}>
                        <Link href="/" >
                            <a>
                                <Panel width={21} height={21} fill={'#fff'} />
                                <span className={styles.spanText}>Painel</span>
                            </a>
                        </Link>

                    </li>
                    <li className={styles.navText}>
                        <SimpleAccordion icon={<Product width={21} height={21} fill={'#fff'} />} title={"Produtos"} items={itemsProduct} showsidebar={showSidebar} />
                    </li>
                    <li className={styles.navText}>
                        <SimpleAccordion icon={<Sales width={21} height={21} fill={'#fff'} />} title={"Vendas"} items={itemsSales} />
                    </li>
                </ul>
            </nav>}
            {console.log(sidebar)}
        </>
    )
}

export default SideBar;

