import { FavoriteBorder, RepeatRounded, ChatBubbleOutline, Share } from "@mui/icons-material"
import { Avatar, Paper, Typography, IconButton, Box } from "@mui/material"
import { styled } from "@mui/system"
import { FC, ReactElement } from "react"
import { Link } from "react-router-dom"

const tweetContent = {
  borderTop: 0, borderLeft: 0, borderRight: 0, padding: '10px 15px',
  cursor: 'pointer',
  display: 'flex',
  '&:hover': {
    backgroundColor: 'rgb(245,248,250)'
  }
}

interface TweetProps {
  _id: string,
  text: string,
  user: {
    avatarUrl: string,
    fullName: string,
    username: string
  },
}
const MyPaper = styled(Paper)(({ theme }) => ({
  border: "0",

  borderBottom: "1px solid #eee",
}))
export const Tweet: FC<TweetProps> = ({ _id, text, user }): ReactElement => {
  return (
    <Link to={`/home/tweet/${_id}`} style={{ textDecoration: "none" }}>
      <MyPaper variant="outlined" sx={{ ...tweetContent }}>
        <Avatar sx={{ width: 46, height: 46, marginRight: 1 }} src={user.avatarUrl} />
        <Box>
          <Typography >
            <b>{user.fullName}  {' '}</b>
            <span style={{ color: "#9e9e9e" }}>{user.username}</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            {text}
          </Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ width: 450 }}>
            <IconButton color="primary">
              <ChatBubbleOutline fontSize="small" />
              <span style={{ fontSize: 15 }}>1</span>
            </IconButton>

            <IconButton color="primary">
              <RepeatRounded fontSize="small" />

            </IconButton>

            <IconButton color="primary">
              <FavoriteBorder fontSize="small" />

            </IconButton>

            <IconButton color="primary">
              <Share fontSize="small" />

            </IconButton>
          </Box>
        </Box>
      </MyPaper>
    </Link>
  )
}