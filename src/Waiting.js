import React from 'react';
import './App3.css';



function Waiting()
{
    return(
        <>
            <div className="centered-container">
                <img src="logo.png" alt="" width="150" height="150"></img>
                    <div className="centered-text">
                        <p>입금 확인 중...</p>
                        <p>잠시만 기다려주세요</p>
                    </div>
                    <div className="last_font">
                        <p className="sjt">스마트정보통신공학과</p> 
                        <p>영래아</p>
                    </div>
            </div>
        </>
    )
}

export default Waiting;