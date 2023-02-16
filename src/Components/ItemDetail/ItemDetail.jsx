import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = () => {
    
    return(
        <div className="detailBlock row rounded-4 w-100">
            <div className="images col-6">
                <div className="m-3 p-3">
                    <img className="w-100 h-100 rounded-4" src="#" alt="#" />
                </div>
            </div>
            <div className="col-6">
                <div className='details m-3 p-3 rounded-4'>
                    <h3>Marca + Modelo</h3>
                    <h3 className='price'>U$S (Precio)</h3>
                    <br />
                    <button className="btn btn-danger w-50 rounded-pill">Comprar</button>
                    {/* <ItemCount initial={1} stock={10} onClick={()=>{onAdd={onAdd}}} /> */}
                    <ItemCount></ItemCount>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail