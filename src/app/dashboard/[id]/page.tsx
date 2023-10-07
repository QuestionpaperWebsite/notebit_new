import  style  from "../../css/dashboard.module.css";
export default function Dashboard({params}: any){
    return(
        <>
        <h1>Dashoard Here</h1>
        <p className={style.textuser}>{params.id}</p>
        </>
    );
}