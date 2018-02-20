export class Register {

  constructor(
    public account_name: string,
    public display_name: string,
    public email: string,
    public phone: string,
    public dob: string,
    public zipcode: string,
    public password: string,
    public password_con: string,
    public avatar: string
  ) { }
}
