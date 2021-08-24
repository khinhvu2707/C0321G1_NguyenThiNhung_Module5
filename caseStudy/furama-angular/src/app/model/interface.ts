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
  position: Position;
  educationDegree: IEducationDegree;
  division: IDivision;

}

export interface IPosition {
  id: number;
  positionName: string;
}

export interface IEducationDegree {
  id: number;
  educationDegreeName: string;
}

export interface IDivision {
  id: number;
  divisionName: string;
}

export interface IService {
  id: number;
  serviceCode: string;
  serviceName: string;
  serviceArea: number;
  serviceCost: number;
  serviceMaxPeople: number;
  rentType: IRentType;
  serviceType: IServiceType;
  standardRoom: string;
  descriptionOtherConvenience: string;
  poolArea: number;
  numberOfFloor: number;
}

export interface IRentType {
  id: number;
  rentTypeName: string;
  rentTypeCost: number;
}

export interface IServiceType {
  id: number;
  serviceTypeName: string;
}


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

export interface ICustomerType {
  id: number;
  customerTypeName: string;
}


export interface IAttachService {
  id: number;
  attachServiceName: string;
  attachServiceCost: number;
  attachServiceUnit: number;
  attachServiceStatus: string;
}

export interface IContract {
  id: number;
  contractStartDate: string;
  contractEndDate: string;
  contractDeposit: number;
  contractTotalMoney: number;
  employee: IEmployee;
  customer: ICustomer;
  service: IService;
}

export interface IContractDetail {
  id: number;
  contract: IContract;
  attachService: IAttachService;
  quantity: number;

}
