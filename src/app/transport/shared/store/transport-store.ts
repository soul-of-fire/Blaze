import { cloneDeep } from 'lodash';
import { CommonAction } from 'src/app/root/shared/store/common-action';

export const LOAD = 'LOAD';
export const SEARCH = 'SEARCH';
export const LOADED = 'LOADED';

export class Load extends CommonAction<any> {
  type = LOAD;
}

export class Search extends CommonAction<any> {
  type = SEARCH;
}

export class Loaded extends CommonAction<any> {
  type = LOADED;
}

export function transportReducer(transport: any = [], action: CommonAction<any>) {
  switch (action.type) {
    case LOADED:
      return action.payload;
    default:
      return transport;
  }
}
