import {
  Twitter, Search,
  NotificationsNoneOutlined,
  EmailOutlined, BookmarkBorder,
  ListAltOutlined, PersonOutline
} from "@mui/icons-material"

import { Button, Hidden, IconButton, Typography } from "@mui/material"
import { styled } from "@mui/system"
import { useState } from "react"
import { Link } from "react-router-dom"
import { AddTweetForm } from "./AddTweetForm/AddTweetForm"
import { DialogContainer } from "./Dialog"

const Li = styled("li")(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '5px',
  cursor: 'pointer',
  borderRadius: 10,
  "&:hover": {
    background: "rgba(29,161,242,0.1)",
    "& h6": {
      color: theme.palette.primary.main
    }
  }
}))
const ulStyles = {
  top: 0,

  listStyle: "none", paddingRight: 20, marginTop: 10,
}
export const SideMenu = () => {
  const [visibleTweetModal, setVisibleTweetModal] = useState<boolean>(false);
  const onClose = (): void => setVisibleTweetModal(false);
  const onOpen = (): void => setVisibleTweetModal(true);
  return (
    <ul style={{ ...ulStyles, position: "sticky" }}>
      <li >
        <Link to="/home">
          <IconButton color="primary">
            <Twitter sx={{ fontSize: '40px', }} />
          </IconButton>
        </Link>
      </li>
      <Li >
        <IconButton >
          <Search sx={{ fontSize: '28px' }} />
        </IconButton>
        <Hidden mdDown>
          <Typography fontWeight="bold" component={"h6"} >Поиск</Typography>
        </Hidden>
      </Li>
      <Li >
        <IconButton >
          <NotificationsNoneOutlined sx={{ fontSize: '28px' }} />
        </IconButton>

        <Hidden mdDown>
          <Typography fontWeight="bold" component="h6" >Уведомления</Typography>
        </Hidden>

      </Li>
      <Li >
        <IconButton >
          <EmailOutlined sx={{ fontSize: '28px' }} />
        </IconButton>

        <Hidden mdDown>
          <Typography fontWeight="bold" component="h6">Сообщения</Typography>
        </Hidden>
      </Li>
      <Li >
        <IconButton >
          <BookmarkBorder sx={{ fontSize: '28px' }} />
        </IconButton>

        <Hidden mdDown>
          <Typography fontWeight="bold" component="h6">Закладки</Typography>
        </Hidden>
      </Li>
      <Li >
        <IconButton >
          <ListAltOutlined sx={{ fontSize: '28px' }} />
        </IconButton>

        <Hidden mdDown>
          <Typography fontWeight="bold" component="h6">Список</Typography>
        </Hidden>
      </Li>
      <Li >
        <IconButton >
          <PersonOutline sx={{ fontSize: '28px' }} />
        </IconButton>

        <Hidden mdDown>
          <Typography fontWeight="bold" component="h6">Профиль</Typography>
        </Hidden>
      </Li>
      <li>
        <Button sx={{ mt: 3 }} variant="contained" fullWidth onClick={onOpen}>
          Твитнуть
        </Button>
      </li>
      <DialogContainer title="" open={visibleTweetModal} handleClose={onClose}>
        <AddTweetForm />
      </DialogContainer>
    </ul>
  )
}