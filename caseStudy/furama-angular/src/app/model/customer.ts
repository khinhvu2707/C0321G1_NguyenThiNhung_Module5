import {ICustomerType} from './customerType';


export interface ICustomer {
  id: number;
  customerCode: string;
  customerType: ICustomerType;
  customerName: string;
  customerBirthday: string;
  customerGender: number;
  customerIdCard: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
}
