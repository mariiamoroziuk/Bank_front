import React, { useEffect, useState } from 'react'
import CustomerAPI from "../services/CustomerAPI";
import Customer from './Customer.js';
import ModalCustomerButton from "./ModalCustomerButton";

export default function Orders() {
    const [customers, setCustomers] =useState([]);

    function reload(){ new CustomerAPI().getAllCustomer().then(res => setCustomers(res)); }

    useEffect(() => { reload(); }, []);

    function createCustomer(name, email, age) {
        new CustomerAPI().addCustomer({"name": name, "email": email, "age": age}).then(()=> reload());
    }

    return (
        <React.Fragment>
            {customers.map((customer) => (
                <Customer key = {customer.id} customer = {customer} reload = {reload}/>
            ))}
            <ModalCustomerButton label={"create customer"} handler={createCustomer} customer={null}/>
        </React.Fragment>
    );
}