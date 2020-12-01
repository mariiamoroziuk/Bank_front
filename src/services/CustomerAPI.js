
import Base from './base'

export default class CustomerAPI extends Base {

	getAllCustomer() {
		return super.get(`customers`).then(res => res.data)
	}
	getCustomerById(id) {
		return super.get(`customers/${id}`).then(res => res.data);
	}
	addCustomer(customer) {
		return super.post(`customers`, customer).then(res => res.data);
	}
	deleteCustomer(id){
		return super.delete(`customers/${id}`).then(res => res.data);
	}
	updateCustomer(customer){
		return super.put(`customers`, customer).then(res => res.data);
	}
}