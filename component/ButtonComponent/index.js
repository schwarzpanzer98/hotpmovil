import * as React from 'react';
import Button from '@material-ui/core/Button';
import styles from '../../styles/ButtonComponent.module.css'     

function ButtonComponent({ variantContent, colorContent, content, type, disabled }) {

    return (
        
        <Button disabled={disabled} className={styles.button} type={type} variant={variantContent} color={colorContent}>{content}</Button>
    )
}

export default ButtonComponent;