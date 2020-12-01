import Base from './base';

export default class AccountAPI extends Base {
	addAccount(account) {
		return super.post(`customers/accounts`, account).then(res => res.data);
	}
	deleteAccount(number){
		return super.delete(`customers/accounts/${number}`).then(res => res.data);
	}
	replenish(operation){
		return super.post(`operations/replenish`, operation).then(res => res.data);
	}
	withdraw(operation){
		return super.post(`operations/withdraw`, operation).then(res => res.data);
	}
	transfer(operation){
		return super.post(`operations/transfer`, operation).then(res => res.data);
	}
}