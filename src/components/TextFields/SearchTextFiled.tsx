import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const SearchTextFIeld = styled(TextField)(({ theme }) => ({

  borderRadius: 30,
  outline: 'none',
  '& .MuiOutlinedInput-root': {
    borderRadius: 30,
  },


}))