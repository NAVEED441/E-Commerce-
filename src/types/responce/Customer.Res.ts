export interface SaveUpdateRes{
    _id:string;
    Name:string;
    Cell:string;
    Adress:string;
    UserName:string;
    Password:string;
    createdAt?: string;
   updatedAt?: string;
}
export interface LoginResponce{
    token:string
}