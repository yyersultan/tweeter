import { Paper } from "@mui/material"
import { styled } from "@mui/system"

export const MyPaper = styled(Paper)(({ theme }) => ({
  border: "0",
  borderBottom: "1px solid #eee",
  borderTop: 0, borderLeft: 0, borderRight: 0, padding: '10px 15px',
  cursor: 'pointer',
  display: 'flex',
  '&:hover': {
    backgroundColor: 'rgb(245,248,250)'
  }
}))