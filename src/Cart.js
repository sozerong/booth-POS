import React from 'react';
import Main from './Main.js';
import { useState, useRef } from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import './App2.css';
import {useDispatch} from "react-redux";

import {plusAmount,resetAmount,resetPrice,resetMenus} from "./store.js";


function Cart(orderAmount){

    let dispatch = useDispatch();

    let store = useSelector((state) => {return state})
    return (
        <>
        <div className="topDiv">결제하기</div>

        <div className="topBar">
            <p style={{width:'800px', fontSize:'18px'}}>주문내용</p>
            <p style={{width:'720px', fontSize:'18px' }}>금액</p>
        </div>

        <div className="mainDiv">
            <table border={1}>
                <tbody>
                {
                    store.checkedMenus.map((a,i)=>
                    <tr key={i}>
  <td width='800' height={'45'} style={{ textAlign: 'center' }}>
    {store.checkedMenus[i].menuName}
  </td>
  <td width='720' height={'45'} style={{ textAlign: 'center' }}>
    {store.checkedMenus[i].menuPrice}
  </td>
</tr>
                    )
                }
                </tbody>
            </table>
            
        </div>

        <div className="bottomDiv">
            <div className="QR">
                <img src="QRCODE.png" width={350} height={350} />
            </div>
        
            
            <div className="totalDiv">
            <p className="totalP" style={{width:'400px'}}>
                <span className='t_p'>총 수량</span>
                <span><span style={{color:'red'}}>{store.orderAmount}</span> 개</span>
            </p>
            <p className="totalP" style={{width:'700px'}}>
                <span className='t_p2'>총 결제 금액</span>
                <span><span style={{color:'red'}}>{store.orderPrice}</span> 원</span>
            </p>
            </div>

            <div className="bottomBtn">
            <Link to="/"><button className="complete" id="all_cancel_btn2" onClick={()=>{
                dispatch(resetMenus());
                dispatch(resetAmount());
                dispatch(resetPrice());
            }}>완료</button></Link>
            </div>
        </div>
        </>
    )
}
export default Cart;