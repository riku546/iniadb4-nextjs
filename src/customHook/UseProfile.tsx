import ContentList from '@/components/ContentList';
import React ,{useState} from 'react'

const UseProfile = () => {
    const contentCate = ["投稿", "自己紹介", "ユーザータグ"];
    const [displayMode, setDisplayMode] = useState("投稿");
    const displayContent = () => {
      switch (displayMode) {
        case "投稿":
          return <ContentList text={"投稿"} />;
        case "自己紹介":
          return <ContentList text={"自己紹介"} />;
        case "ユーザータグ":
          return <ContentList text={"ユーザータグ"} />;
      }
    };
  return {contentCate , setDisplayMode , displayContent}
}

export default UseProfile
