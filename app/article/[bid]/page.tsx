export default function Page({params} : {params : {bid : string}}){
    return (
        <p>{params.bid}</p>
    );
}