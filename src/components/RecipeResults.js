import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function RecipeResults({ result }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div>
      {result.map((item, index) => (
        <div key={index}>{item.categoryName}</div>
      ))}
    </div>
  );
}
