import { SearchOutlined, }
  from "@mui/icons-material"
import { Box, Container, Grid, InputAdornment } from "@mui/material"

import { ActualTheme } from "../components/ActualThemes/ActualThemes"
import { SideMenu } from "../components/SideMenu"
import { SearchTextFIeld } from "../components/TextFields/SearchTextFiled"
import { Route, Routes } from "react-router-dom"
import { HomeContent } from "./HomeContainer/HomeContent"
import { TweetDetail } from "./HomeContainer/components/TweetDetail/TweetDetail"
import { TweetHeader } from "../components/TweetHeader/TweetHeader"


export const Home = () => {


  return (
    <Container maxWidth="lg" sx={{ height: "100vh" }}>
      <Grid container  >
        {/* ICONS NAVBAR */}
        <Grid item md={3} sm={1} sx={{ borderRight: "2px solid #eee" }}>
          <SideMenu />
        </Grid>
        <Grid item md={6} sm={8} >
          {/* Grid content  / */}
          <TweetHeader />

          <Routes>
            <Route path="/home" element={<HomeContent />} />
            <Route path="/home/tweet/:id" element={<TweetDetail />} />
          </Routes>
          {/* tweet header */}

        </Grid>
        <Grid item md={3} sm={3} sx={{ borderLeft: "2px solid #eee" }}>
          <Box sx={{ position: "sticky", top: 0, marginLeft: '10px' }}>
            <SearchTextFIeld
              sx={{ marginTop: '5px' }}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlined color="primary" />
                  </InputAdornment>)
              }}
            />
            <ActualTheme />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}