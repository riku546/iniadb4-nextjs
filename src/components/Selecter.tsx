import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Selecter() {

  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
 
        >
          <MenuItem value="">
            <em>なし</em>
          </MenuItem>

          <MenuItem value="質問">質問</MenuItem>
          <MenuItem value="解説">解説</MenuItem>
          <MenuItem value="進捗">進捗</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}