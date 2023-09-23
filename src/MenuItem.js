import React from 'react';

function MenuItem({ menuName, menuImage, menuPrice, onCreate, menuid }) {
  return (
    <li onClick={onCreate} menuid={menuid}>
      <img src={menuImage} alt={menuName}></img>
      <p>{menuName}</p>
      <p>{menuPrice}</p>
    </li>
  );
}

export default MenuItem; // MenuItem 컴포넌트를 내보냅니다.
