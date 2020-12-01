import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function ModalCustomerButton({label, handler, customer}) {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState(customer?.name||'');
    const [email, setEmail] = React.useState(customer?.email||'');
    const [age, setAge] = React.useState(customer?.age||'');

    const handleName = (event) => {setName(event.target.value);};
    const handleEmail = (event) => {setEmail(event.target.value);}
    const handleAge = (event) => {setAge(event.target.value);}

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleOk = () => {
        handler(name, email, age);
        setOpen(false);
    };
    return (
        <>
            <Button variant={label === "update customer" ? "outlined" : "contained"} color="primary" onClick={handleClickOpen}>{label}</Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>{label}</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <TextField id="outlined-basic" value={name} onChange={handleName} label="name" variant="outlined" />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <TextField id="outlined-basic" value={email} onChange={handleEmail} label="email" variant="outlined" />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <TextField id="outlined-basic" value={age} onChange={handleAge} label="age" variant="outlined" />
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleOk} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}