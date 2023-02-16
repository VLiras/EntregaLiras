import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const DetailContainer=()=>{
const {idProduct}=useParams()
// console.log(idProduct)
//sell(idProducto){}
    
    return(
        <div className="mt-5 p-3 border border-warning border-3"><ItemDetail/></div>
    )
}
export default DetailContainer