import {IRentType} from './rentType';
import {IServiceType} from './serviceType';


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
