import React from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import styles from "../css/pageCss/postPage.module.css";
import NextLink from "next/link";
import Selecter from "@/components/Selecter";

const PostPage = () => {
  const categorys = ["投稿" , "解説" , "進捗"]
  return (
    <div className={styles.postContainer}>
      <div className={styles.inputarea}>
        <Selecter CategoryList={categorys} />

        <textarea name="" id="" placeholder="text"></textarea>
      </div>

      <div className={styles.buttons}>
        <NextLink href="/">戻る</NextLink>

        <Button
          variant="outlined"
          style={{borderColor:"orange" , color:"orange"}}
          startIcon={<RestartAltIcon />}
          className={styles.resetButton}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          style={{background:"orange"}}
          endIcon={<SendIcon />}
          className={styles.submitButton}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default PostPage;
