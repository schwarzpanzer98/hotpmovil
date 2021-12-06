import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';


function Input({ label, type, required }) {

    return (
        <>
            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                <TextField id="outlined-basic" label={label} type={type} variant="outlined" required={required} />
            </FormControl>
        </>
    )
}

export default Input;
