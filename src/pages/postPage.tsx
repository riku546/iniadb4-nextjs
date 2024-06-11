import React, { useState } from "react";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import styles from "../css/pageCss/postPage.module.css";
import NextLink from "next/link";

import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";

const PostPage = () => {
  const [Selectedcategory, setSelectedcategory] = useState("質問");
  const setCategoryFn = (e: SelectChangeEvent) => {
    setSelectedcategory(e.target.value);
  };

  const categorys: String[] = ["質問", "解説", "進捗"];
  return (
    <div className={styles.postContainer}>
      <div className={styles.inputarea}>
        <div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">PostMode</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Selectedcategory}
                label="PostMode"
                onChange={setCategoryFn}
              >
                {categorys.map((category: String, categoryIndex: number) => (
                  <MenuItem value={category} key={categoryIndex}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>

        <textarea name="" id="" placeholder="text"></textarea>
      </div>

      <div className={styles.buttons}>
        <NextLink href="/">Homeに戻る</NextLink>

        <Button
          variant="outlined"
          style={{ borderColor: "orange", color: "orange" }}
          startIcon={<RestartAltIcon />}
          className={styles.resetButton}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          style={{ background: "orange" }}
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
