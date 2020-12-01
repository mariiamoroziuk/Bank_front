import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

export default function AddAccountButton({label, handler}) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState('');

    const currencies = ["UAH", "USD", "EUR", "CHF", "GBP"];

    const handleChange = (event) => {
        setData(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleOk = () => {
        handler(data);
        setOpen(false);
    };
    return (
        <>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>{label}</Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>{label}</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="demo-dialog-native">currency</InputLabel>
                            <Select
                                native
                                value={data}
                                onChange={handleChange}
                                input={<Input id="demo-dialog-native" />}
                            >
                                <option aria-label="None" value="" />
                                {currencies.map((currency) => (
                                    <option key={currency} value={currency}>{currency}</option>
                                ))
                                }
                            </Select>
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