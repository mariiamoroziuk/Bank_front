import React from "react";
import CustomerAPI from "../services/CustomerAPI";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Title from './Title';
import AccountAPI from "../services/AccountAPI";
import { makeStyles } from '@material-ui/core/styles';
import Account from './Account.js';
import CustomButton from './CustomButton';
import AddAccountButton from './AddAccountButton';
import TransferButton from "./TransferButton";
import ModalCustomerButton from "./ModalCustomerButton";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function Customer({customer, reload}) {
    const classes = useStyles();

    function addAccount(currency) {
        new AccountAPI()
            .addAccount({"currency": currency, "customerId": customer.id})
            .then(() => reload());
    }
    function deleteCustomer() {
        new CustomerAPI().deleteCustomer(customer.id).then(() => reload());
    }

    function updateCustomer(name, email, age) {
        new CustomerAPI().updateCustomer({"id": customer.id,"name": name, "email": email, "age": age}).then(() => reload());
    }

    function transfer(numberFrom, numberTo, amount) {
        new AccountAPI().transfer({"from": numberFrom, "to": numberTo, "amount": amount}).then(() => reload());
    }

    return (
        <div>
            <Title>{customer.name}</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>NUMBER</TableCell>
                        <TableCell style={{ width: 100}}>CURRENCY</TableCell>
                        <TableCell style={{ width: 100}}>BALANCE</TableCell>
                        <TableCell style={{ width: 180}} align="center">ACTIONS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                { customer.accounts.length > 0 ? (
                    customer.accounts.map((account) => (
                        <Account key = {account.number} account={account} reload={reload}/>
                    ))
                ) : null
                }
                </TableBody>
                <div className={classes.root}>
                    <AddAccountButton label = {"add account"} handler = {addAccount}/>
                    <TransferButton label={"transfer"} handler={transfer} accounts={customer.accounts}/>
                    <CustomButton label = {"delete customer"} handler = {deleteCustomer}/>
                    <ModalCustomerButton label={"update customer"} handler={updateCustomer} customer={customer}/>
                </div>
            </Table>
        </div >
    );
}