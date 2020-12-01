import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import CallMissedIcon from "@material-ui/icons/CallMissed";
import IconButton from "@material-ui/core/IconButton";
import TextField from '@material-ui/core/TextField';
import CallMissedOutgoingIcon from "@material-ui/icons/CallMissedOutgoing";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";

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

export default function TransferButton({label, handler, accounts}) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [soum, setSoum] = React.useState('');
    const [data2, setData2] = React.useState('');
    const [data3, setData3] = React.useState('');

    const handleChange = (event) => {setSoum(event.target.value);};
    const handleChange2 = (event) => {setData2(event.target.value);};
    const handleChange3 = (event) => {setData3(event.target.value);};

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleOk = () => {
        label === "transfer" ?  handler(data2, data3, soum) :
            handler(soum);
        setOpen(false);
    };
    return (
        <>
            {label === "transfer" ? (
                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>{label}</Button>) :
                    <IconButton aria-label="delete" onClick={handleClickOpen}>
                        {label === "replenish" ? (<CallMissedIcon/>) : (<CallMissedOutgoingIcon/>)}
                    </IconButton>
            }
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>{label}</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        {label === "transfer" ? (
                            <>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="demo-dialog-native">from account</InputLabel>
                                <Select
                                    native
                                    value={data2}
                                    onChange={handleChange2}
                                    input={<Input id="demo-dialog-native" />}
                                >
                                    <option aria-label="None" value="" />
                                    {accounts.map((account) => (
                                        <option key={account.number} value={account.number}>{account.number}</option>
                                    ))
                                    }
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="demo-dialog-native">to account</InputLabel>
                                <Select
                                    native
                                    value={data3}
                                    onChange={handleChange3}
                                    input={<Input id="demo-dialog-native" />}
                                >
                                    <option aria-label="None" value="" />
                                    {accounts.map((account) => (
                                        <option key={account.number} value={account.number}>{account.number}</option>
                                    ))
                                    }
                                </Select>
                            </FormControl>
                            </>
                        ) : null}
                        <FormControl className={classes.formControl}>
                            <TextField id="outlined-basic" value={soum} onChange={handleChange} label="soum" variant="outlined" />
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