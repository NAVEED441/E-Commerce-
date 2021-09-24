export interface SaveReqProduct{
    Name:string;
    Price:string;
    Discription:string;
}
export interface UpdateReqProduct{
    _id:string;
    Name:string;
    Price:string;
    Discription:string;
}
export interface DeletReqProduct{
    _id:string;
}
export interface GetReqProduct{
    _id:string;
}