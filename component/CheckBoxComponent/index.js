import React, { useState } from "react";
import styles from "../../styles/CheckBoxComponent.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckBoxIcon from '../../assets/Icons/CheckBox';

export default function CheckBoxComponent ({letra, editar, active}) { 
return (
<section className={styles.section}>
    <ul class={styles.list}>
        {active ? <li class={`${styles.item} ${styles.active}`}>
            <div class={styles.box}>  
                <div class={styles.letra}>
                    <div>
                        <CheckBoxIcon 
                            width={21}
                            height={21} 
                            fill={'#fff'}
                        />
                        <h5 class="d-inline-block mb-0">
                            <span class={styles.letra}>{letra}</span>
                        </h5>
                    </div>
                    <div class={styles.editar}>
                        <a href="">
                            <span class={styles.editar} >{editar}</span>
                        </a>
                    </div>
                </div>
            </div>
        </li> : <li class={`${styles.item}`}>
            <div class={styles.box}>  
                <div class={styles.letra}>
                    <div>
                        <CheckBoxIcon 
                            width={21}
                            height={21} 
                            fill={'#fff'}
                        />
                        <h5 class="d-inline-block mb-0">
                            <span class={styles.letra}>{letra}</span>
                        </h5>
                    </div>
                    <div class={styles.editar}>
                        <a href="">
                            <span class={styles.editar} >{editar}</span>
                        </a>
                    </div>
                </div>
                <p>Seu cadastro precisa estar completo para que você possa utilizar nossa plataforma.</p>
            </div>
        </li> }
    {/* <li class={`${styles.item} ${styles.active}`}>
            <div class={styles.box}>  
                <div class={styles.letra}>
                    <div>
                        <CheckBoxIcon 
                            width={21}
                            height={21} 
                            fill={'#fff'}
                        />
                        <h5 class="d-inline-block mb-0">
                            <span class={styles.letra}>{letra}</span>
                        </h5>
                    </div>
                    <div class={styles.editar}>
                        <a href="">
                            <span class={styles.editar} >{editar}</span>
                        </a>
                    </div>
                </div>
            </div>
        </li>





        <li class={`${styles.item}`}>
            <div class={styles.box}>  
                <div class={styles.letra}>
                    <div>
                        <CheckBoxIcon 
                            width={21}
                            height={21} 
                            fill={'#fff'}
                        />
                        <h5 class="d-inline-block mb-0">
                            <span class={styles.letra}>{letra}</span>
                        </h5>
                    </div>
                    <div class={styles.editar}>
                        <a href="">
                            <span class={styles.editar} >{editar}</span>
                        </a>
                    </div>
                </div>
                <p>Seu cadastro precisa estar completo para que você possa utilizar nossa plataforma.</p>
            </div>
        </li> */}
    </ul>
</section>
)}
