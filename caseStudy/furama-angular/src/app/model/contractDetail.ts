import {IContract} from './contract';
import {IAttachService} from './attachService';

export interface IContractDetail {
  id: number;
  contract: IContract;
  attachService: IAttachService;
  quantity: number;

}
