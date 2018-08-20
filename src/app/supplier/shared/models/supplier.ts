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
  public site: any

  constructor(raw?: any) {
    this.id = raw.id;
    this.name = raw.name;
    this.address = raw.address;
    this.phone = raw.phone;
    this.fax = raw.fax;
    this.email = raw.email;
    this.contact = raw.contact;
    this.priority = raw.priority;
    this.site = raw.site;
    this.created = raw.created && 
      typeof raw.created == 'string' && 
      this.stringToDate(raw.created) || raw.created;
  }

  private stringToDate(value) {
    const date = new Date(value);
    return {
      "year": date.getFullYear(),
      "month": date.getMonth() + 1,
      "day": date.getDate()
    }
  }

  public transform() {
    return {
      id: this.id,
      name: this.name,
      address: this.address,
      phone: this.phone,
      fax: this.fax,
      email: this.email,
      contact: this.contact,
      priority: Number(this.priority),
      site_id: this.site && this.site.id || 1,
      created: this.created && `${this.created.year}-${this.created.month}-${this.created.day}`
    }
  }
}