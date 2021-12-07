import * as React from 'react';
import Button from '@material-ui/core/Button';

function ButtonComponent({ variantContent, colorContent, content, type }) {

    return (
        
        <Button type={type} variant={variantContent} color={colorContent}>{content}</Button>
    )
}

export default ButtonComponent;