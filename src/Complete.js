import React from 'react';
import './App3.css';

function Complete(){
    return(
        <>
            <div className="centered-container">
                    <img src="logo.png" alt="" width="150" height="150"></img>
                    <div className="centered-text">
                        <p>주문이 완료 되었습니다.</p>
                        <p>주문번호:</p>
                    </div>

                    <div className="last_font">
                        <p className="sjt">스마트정보통신공학과</p> 
                        <p>영래아</p>
                    </div>
            </div>
        </>
    )
}
export default Complete;