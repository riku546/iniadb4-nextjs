import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Selecter({ CategoryList }) {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select value={age} onChange={handleChange} displayEmpty>
          <MenuItem value="">
            <em>なし</em>
          </MenuItem>
          {CategoryList.map((category: String, categoryIndex: number) => (
            <MenuItem value={category} key={categoryIndex}>
  
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
