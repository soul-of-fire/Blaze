import { TableGeneratorService } from "src/app/common/table-generator/shared/table-generator.service";

export class Supplier {
  public id: number;
  public name: string;
  public address: string;
  public phone: string;
  public fax: string;
  public email: string;
  public contact: string;
  public priority: number;
  public created: any;
  public site: any;
  constructor(raw?: Supplier) { 
    Object.assign(this, raw);
  }

  public toSupplier(service: TableGeneratorService): Supplier {
    this.created = service.stringToDate(this.created);
    return this;
  }

  public toObject(service: TableGeneratorService): any {
    return {
      id: this.id,
      name: this.name,
      address: this.address,
      phone: this.phone,
      fax: this.fax,
      email: this.email,
      contact: this.contact,
      priority: Number(this.priority),
      created: service.dateToString(this.created),
      site_id: this.site && this.site.id || 1
    }
  }
}
