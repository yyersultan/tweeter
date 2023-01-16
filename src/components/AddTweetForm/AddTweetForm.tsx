import { ChangeEvent, FC, ReactElement, useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { ImageOutlined, SentimentSatisfiedAlt } from "@mui/icons-material"
import { Avatar, Grid, Paper, Box, IconButton, CircularProgress, Button } from "@mui/material"

import { fetchAddTweet } from "../../store/ducks/tweets/actionCreators"
import { selectIsLoadingAddFormState } from "../../store/ducks/tweets/selectors"
import { ActiveCircularProgress, FormTextField, TweetForm } from "./AddTweetFormStyles"


export const AddTweetForm: FC = ():ReactElement => {
  const dispatch = useDispatch();
  const isAddingFormLoading = useSelector(selectIsLoadingAddFormState);
  const [text, setText] = useState<string>("");
  const textLimitPercent = (text.length / 280) * 100;

  const handleChangeTextarea = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }
  const handleClickAddTweet = () => {
    dispatch(fetchAddTweet(text));
    setText('');
  }

  const textCount: number = 280 - text.length;

  return (
    <Paper sx={{ ...TweetForm }} variant="outlined">
      <Grid container mb={2} spacing={4}>
        <Grid item md={1}>
          <Avatar sx={{ marginTop: 1 }} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
        </Grid>
        <Grid item md={11}>
          <FormTextField
            sx={{ marginBottom: "10px" }}
            value={text}
            multiline
            fullWidth
            onChange={handleChangeTextarea}
            placeholder="Что происходит ?"
          />
          {/* ICONS */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <IconButton>
                <ImageOutlined color="primary" />
              </IconButton>
              <IconButton>
                <SentimentSatisfiedAlt color="primary" />
              </IconButton>
            </Box>
            <Box display="flex" alignItems="center">
              <span style={{ marginRight: '5px' }}>{textCount}</span>
              {textLimitPercent >= 100 ? <CircularProgress color="error" variant="determinate" value={100} />
                : <Box position="relative">
                  <ActiveCircularProgress disableShrink color="primary" value={100} variant="determinate" />
                  <CircularProgress sx={{ zIndex: 100 }} color="primary" variant="determinate" value={textLimitPercent} thickness={4} />
                </Box>}
              <Button

                onClick={handleClickAddTweet}
                sx={{ marginLeft: '10px' }}
                variant="contained"
                disabled={textLimitPercent >= 100 || isAddingFormLoading}>
                Твитнуть
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}