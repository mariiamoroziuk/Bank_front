import React from "react";
import AccountAPI from "../services/AccountAPI";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TransferButton from "./TransferButton";

export default function Account({account, reload}) {

    function deleteAccount(number) {
        new AccountAPI().deleteAccount(number).then(() => reload());
    }
    function replenish(amount) {
        new AccountAPI().replenish({"to": account.number, "amount": amount}).then(() => reload());
    }
    function withdraw(amount) {
        new AccountAPI().withdraw({"from": account.number, "amount": amount}).then(() => reload());
    }

    return (
        <TableRow>
            <TableCell>{account.number}</TableCell>
            <TableCell>{account.currency}</TableCell>
            <TableCell>{account.balance}</TableCell>
            <TableCell align="right">
                <TransferButton label={"replenish"} handler={replenish} accounts={[]}/>
                <TransferButton label={"withdraw"} handler={withdraw} accounts={[]}/>
                <IconButton onClick={() => deleteAccount(account.number)}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}