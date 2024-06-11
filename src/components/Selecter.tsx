import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Selecter({
  CategoryList,
  handleChange,
  Selectedcategory,
}) {
console.log(Selectedcategory)

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={
            Selectedcategory 
          }
          onChange={handleChange}
          autoWidth
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={CategoryList[0]}>
            <em>{CategoryList[0]}</em>
          </MenuItem>
          {CategoryList.map((category: String, categoryIndex: number) =>
            categoryIndex === 0 ? (
              ""
            ) : (
              <MenuItem value={category} key={categoryIndex}>
                {category}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
    </div>
  );
}
