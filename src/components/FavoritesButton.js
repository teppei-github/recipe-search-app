import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa"; // react-iconsライブラリからFaHeartアイコンをインポート
import { useRecoilState } from "recoil";
import { FavoritesRecipeState } from "./FavoritesAtom";

const FavoriteButton = () => {
  const [, setCount] = useRecoilState(FavoritesRecipeState);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    /*
    // カウントを増減する前に、isFavoriteの現在の値を確認
    if (isFavorite) {
      console.log("isFavorite:true");
      // isFavoriteがtrueの場合、カウントを1増やす
      setCount((prevCount) => prevCount + 1);
    } else {
      console.log("isFavorite:false");

      // isFavoriteがfalseの場合、カウントが0より大きい場合のみ1減らす
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }
      */
  }, [isFavorite, setCount]);

  const handleClick = () => {
    // カウントを増減する前に、isFavoriteの現在の値を確認
    if (!isFavorite) {
      console.log("isFavorite:true");
      // isFavoriteがtrueの場合、カウントを1増やす
      setCount((prevCount) => prevCount + 1);
    } else {
      console.log("isFavorite:false");

      // isFavoriteがfalseの場合、カウントが0より大きい場合のみ1減らす
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }

    setIsFavorite((isFavorite) => !isFavorite);
  };

  return (
    <button onClick={handleClick}>
      <FaHeart color={isFavorite ? "red" : "grey"} />{" "}
      {/* ハートアイコンを表示 */}
    </button>
  );
};

export default FavoriteButton;
