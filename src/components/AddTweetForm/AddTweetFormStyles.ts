import { CircularProgress, TextField } from "@mui/material"
import { styled } from "@mui/system"

export const FormTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 0,
      margin: 0,
      padding: 0
    },
  }
}))

export const TweetForm = {
  marginBottom: 2, padding: '10px 15px', border: 0, borderRadius: 0,
}
export const ActiveCircularProgress = styled(CircularProgress)(({ theme }) => ({
  position: "absolute",
  left: 0,
  zIndex: 0,
  '&	.MuiCircularProgress-circle': {
    color: "#eee",


  },

}))