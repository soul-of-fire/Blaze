import { cloneDeep } from 'lodash';
import { CommonAction } from 'src/app/root/shared/store/common-action';
import { Options } from '../models/options';
import { Supplier } from 'src/app/supplier/shared/models/supplier';
import { Payload } from 'src/app/supplier/shared/models/payload';

export const LOAD = 'LOAD';
export const LOADED = 'LOADED';
export const SEARCH = 'SEARCH';
export const EDIT = 'EDIT';
export const EDITED = 'EDITED';
export const CREATE = 'CREATE';
export const CREATED = 'CREATED';
export const REMOVE = 'REMOVE';
export const REMOVED = 'REMOVED';

export class Load extends CommonAction<void> {
  type = LOAD;
}

export class Loaded extends CommonAction<Payload> {
  type = LOADED;
}

export class Search extends CommonAction<Options> {
  type = SEARCH;
}

export class Edit extends CommonAction<Supplier> {
  type = EDIT;
}

export class Edited extends CommonAction<Supplier> {
  type = EDITED;
}

export class Create extends CommonAction<any> {
  type = CREATE;
}

export class Created extends CommonAction<Supplier> {
  type = CREATED;
}

export class Remove extends CommonAction<Supplier> {
  type = REMOVE;
}

export class Removed extends CommonAction<Supplier> {
  type = REMOVED;
}

export function suppliersReducer(payload: Payload = new Payload(0, []), action: CommonAction<Supplier | Payload>) {
  switch (action.type) {
    case LOADED:
      return action.payload;
    case EDITED:
      const edited = (<Supplier>action.payload)
      Object.assign(payload.list.filter((supplier: Supplier) => supplier.id == edited.id)[0], edited);
      return cloneDeep(payload);
    case CREATED:
      const created = (<Supplier>action.payload)
      payload.list.unshift(created);
      ++payload.total
      return cloneDeep(payload);
    case REMOVED:
      const deleted = (<Supplier>action.payload)
      payload.list.filter((supplier: Supplier) => supplier.id == deleted.id)[0] = deleted;
      return cloneDeep(payload);
    default:
      return payload;
  }
}
