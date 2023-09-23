import React, { useState, useRef ,useEffect} from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux";
import {plusPrice,minusPrice,plusAmount,minusAmount,resetAmount,resetPrice,addMenus,removeMenus,resetMenus} from "./store.js";
import Menu from './Menu';
import MenuList from './MenuList';
import './App2.css';

function Main(){

    let store = useSelector((state) => state);
    let dispatch = useDispatch();

//    const [checkedMenus,setCheckedMenus] = useState([
    
//    ]); // 선택된 메뉴들이 저장되는 배열

   const nextId = useRef(1); // 선택된 메뉴들의 id는 1부터 시작

   const onCreate = (menuImage, menuName, menuPrice) => {
    const checkedmenu = {
        id:nextId.current,
        menuImage,
        menuName,
        menuPrice
   }
//    setCheckedMenus([...checkedMenus,checkedmenu])
   dispatch(addMenus(checkedmenu));
   nextId.current += 1;
   dispatch(plusAmount());
   dispatch(plusPrice(parseInt(menuPrice)));
   console.log(store.checkedMenus.menuAmount)
   }

   const onRemove = (id,menuPrice,menuAmount) =>{
    console.log(menuAmount);
    nextId.current -= 1;
    // dispatch(store.checkedMenus.filter(checkedmenu => checkedmenu.id !== id));
    dispatch(removeMenus(id));
    dispatch(minusAmount());
    // store.orderPrice -= parseInt(menuPrice)*menuAmount;
    dispatch(minusPrice(parseInt(menuPrice)*menuAmount));
   }
   
   const Plus = (menuPrice) =>{
        dispatch(plusPrice(parseInt(menuPrice)));
   }

   const Minus = (menuPrice) =>{
        // setOrderPrice(orderPrice -parseInt(menuPrice));
        dispatch(minusPrice(parseInt(menuPrice)));
   }

   useEffect(() => {
    // orderPrice 상태가 변경된 후 실행되는 로직을 이곳에 작성
    console.log('orderPrice가 업데이트되었습니다:', store.orderPrice);
  }, [store.orderPrice]); // store.orderPrice가 변경될 때만 실행

    return(
        <>
        <nav className="nav_top">
<div className="nav_logo">
    
</div>

</nav>
<div className="menu_page">
<Menu className="menubar"
onCreate={onCreate}
onRemove={onRemove}
/>
</div>




<MenuList checkedMenus={store.checkedMenus} onRemove={onRemove} Plus={Plus} Minus={Minus}/>


<div className="order_line">
<p id="order_amount">
    <span>주문 수량</span>
    <span>{store.orderAmount}</span>
</p>
<p id="order_price">
    <span>주문 금액</span>
    <span>{store.orderPrice} 원</span>
</p>

</div>

<div className="bottom_line">
<button id="all_cancel_btn" onClick={()=>{
    dispatch(resetMenus());
    dispatch(resetAmount());
    dispatch(resetPrice());
}}>전체 취소</button>

<Link to="/kiosk2"><button id="payment_btn">결제 하기</button></Link>
</div>
</>
    )
}
export default Main;