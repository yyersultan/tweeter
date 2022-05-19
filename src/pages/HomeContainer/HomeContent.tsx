import { Component, Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CircularProgress, Paper } from "@mui/material"

import { AddTweetForm } from "../../components/AddTweetForm/AddTweetForm"
import { RenderIf } from "../../components/ConditionalyRender/RenderIf"
import { Tweet } from "../../components/Tweet"
import { fetchTweets } from "../../store/ducks/tweets/actionCreators"
import { selectIsTweetsLoaded, selectTweets } from "../../store/ducks/tweets/selectors"
import { fetchTags } from "../../store/ducks/tags/actionCreators"
import { ComponentDivider } from "../../components/Divider/Divider"


const tweetWrapper = {
  height: '100%',
  border: 0,

}

export const HomeContent = () => {
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweets);
  const isLoadedTweets = useSelector(selectIsTweetsLoaded);

  useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);
  return (
    <div style={{ ...tweetWrapper }}>
      {/* <TweetHeader /> */}
      <AddTweetForm />
      <ComponentDivider />
      <RenderIf isTrue={isLoadedTweets}>
        <CircularProgress sx={{ position: "absolute", top: '25%', left: "50%" }} />
      </RenderIf>

      <RenderIf isTrue={!isLoadedTweets}>
        <Fragment>
          {tweets.map((tweet, index) => (
            <Tweet key={tweet.text} {...tweet} />
          ))}
        </Fragment>
      </RenderIf>
    </div>
  )
}