import categoryData from "../api/categories.json";
import { useState } from "react"
import { useEffect } from "react";
import Category  from "./ui/Category";

export default function Categories() {
  const [categories , setCategories] = useState([]);

  useEffect(() => {
    //isteğe bağlı çalışacak
  //  setTimeout(() => {
  //   setCategories(categoryData);
  //  }, 2000);
  setCategories(categoryData);
  }, [])

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3">Kategoriler</h3>
    {/* 10 luk bir grid sistemi oluşturalım */}
    <div className="grid grid-cols-10">
      {/* {!categories.length  && <h2 className="text-2xl text-brandColor ">Yükleniyor...</h2>} */}
    {categories && categories.map((categories , index) =>
      <Category key={ index } categories={ categories } />
    )}
    </div>
      </div>
    </div>
  )
}
