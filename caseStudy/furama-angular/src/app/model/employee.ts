import {IPosition} from './position';
import {IEducationDegree} from './educationDegree';
import {IDivision} from './division';


export interface IEmployee {
  id: number;
  employeeCode: string;
  employeeName: string;
  employeeBirthday: string;
  employeeIdCard: string;
  employeeSalary: number;
  employeePhone: string;
  employeeEmail: string;
  employeeAddress: string;
  position: IPosition;
  educationDegree: IEducationDegree;
  division: IDivision;

}
