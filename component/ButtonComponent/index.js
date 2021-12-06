import * as React from 'react';
import Button from '@material-ui/core/Button';

function ButtonComponent({ variantContent, colorContent, content }) {

    return (
        
        <Button type="submit" variant={variantContent} color={colorContent}>{content}</Button>
    )
}

export default ButtonComponent;