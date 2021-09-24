export interface SaveReqCustomer{
    Name:string;
    Cell:string;
    Adress:string;
    UserName:string;
    Password:string;
}
export interface UpdateReqCustomer{
    _id: string;
    Name:string;
    Cell:string;
    Adress:string;
    UserName:string;
    Password:string;
}
export interface LogInReq{
    UserName:string;
    Password:string;
  }