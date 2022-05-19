import { IconButton, Paper, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const tweetHeader = {
  borderTop: 0, borderLeft: 0, borderRight: 0, padding: '10px 15px',
  display: "flex", alignItems: "center"
}

export const TweetHeader = () => {
  const navigate = useNavigate();

  const handleBackBtn = () => navigate(-1);

  return (
    <Paper variant="outlined" sx={{ ...tweetHeader }}>
      <IconButton color="primary" onClick={handleBackBtn}>
        <ArrowBackIcon />
      </IconButton>
      <Typography component="h6" variant="h6" fontWeight={700} ml={2}>
        Tweet
      </Typography>
    </Paper>
  )
}