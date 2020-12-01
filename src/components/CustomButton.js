import React from "react";
import Button from '@material-ui/core/Button';

export default function CustomButton({label, handler}) {

    return (
        <Button
            variant="outlined"
            color="primary"
            onClick={handler}
        >
        {label}
        </Button>
    )
}