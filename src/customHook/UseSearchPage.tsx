import React, { useState } from "react";
import  { SelectChangeEvent } from "@mui/material/Select";

type categoryType = "質問" | "進捗" | "解説";

const UseSearchPage = () => {
  const [Selectedcategory, setCategory] = useState<categoryType>("質問");

  const setCategoryFn =  (e) =>{
    console.log("fff")
    console.log(e.target.value)
    setCategory(e.target.value)
  }
  const categoryList: String[] = ["質問", "進捗", "解説"];
  const searchSuggests: { 質問: String[]; 進捗: String[]; 解説: String[] } = {
    質問: [
      "HTML",
      "CSS",
      "JavaScript",
      "CLang",
      "Java",
      "Git",
      "哲学",
      "数学",
      "レポート",
    ],
    進捗: ["課題", "サークル", "実習"],
    解説: [
      "HTML",
      "CSS",
      "JavaScript",
      "CLang",
      "Java",
      "Git",
      "哲学",
      "数学",
      "レポート",
    ],
  };

  return { categoryList, searchSuggests, Selectedcategory  , setCategoryFn};
};

export default UseSearchPage;
