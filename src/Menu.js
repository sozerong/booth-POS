import React, { useState } from 'react';

function MenuItem({ menuName, menuImage, menuPrice, onCreate, menuId }) {
  return (
    <li onClick={onCreate}>
      
    </li>
  );
}

function Menu({ onCreate }) {
  
  const [menuName, setMenuName] = useState([
    '비빔밥',
    '미역국',
    '두부김치',
    '두루치기',
    '소세지야채볶음',
    '이병', 
    '일병', 
    '상병', 
    '병장', 
  ]);
  const [menuImage, setMenuImage] = useState([
    '비빔밥.png',
    '미역국.png',
    '두부김치.png',
    '두루치기.png',
    '소야볶.png',
    '이병.png', 
    '일병.png', 
    '상병.png', 
    '병장.png', 
  ]);
  const [menuPrice, setMenuPrice] = useState([3900, 3900, 6900, 7900, 7900, 6900, 17900, 18900, 20900]);
  const [menuId, setMenuId] = useState([1,1,1,1,1]);
  const [menubar, setMenubar] = useState(0);

  

  const menuItems = menuName.map((menuName, index) => ({
    menuName,
    menuImage: menuImage[index],
    menuPrice: menuPrice[index],
    menuId: menuId[index]
  }));

  return (
    <div className='menupan'>

      <ul className="menu_1">
        {menuItems.slice(0, 9).map((item) => (
          <MenuItem
            key={item.menuName}
            menuName={item.menuName}
            menuImage={item.menuImage}
            menuPrice={item.menuPrice}
            menuId={item.menuId}
            onCreate={() =>
              onCreate(item.menuImage, item.menuName, item.menuPrice, item.menuId)
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
