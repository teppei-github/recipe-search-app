import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa'; // react-iconsライブラリからFaHeartアイコンをインポート

const FavoriteButton = () => {

  //初期値
  const [isFavorite,setIsFavorite] =useState(false);

  //ボタンクリック
  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <button onClick={handleClick} >
      <FaHeart color={isFavorite ? 'red' : 'grey'} /> {/* ハートアイコンを表示 */}
    </button>
  );
};

export default FavoriteButton;