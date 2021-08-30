import {IService} from './service';
import {ICustomer} from './customer';
import {IEmployee} from './employee';

export interface IContract {
  id: number;
  contractDate: string;
  contractDeposit: number;
  contractTotalMoney: number;
  employee: IEmployee;
  customer: ICustomer;
  service: IService;
}
