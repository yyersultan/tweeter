import { Fragment, ReactElement, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import { Tweet } from '../../../../components/Tweet/index';
import { fetchTweet, setTweetData } from "../../../../store/ducks/tweet/actionCreators";
import { selectIsTweetLoaded, selectTweetData } from "../../../../store/ducks/tweet/selectors";

export const TweetDetail = (): ReactElement => {
  const dispatch = useDispatch();
  const tweet = useSelector(selectTweetData);
  const isLoaded = useSelector(selectIsTweetLoaded);
  const params = useParams();
  const id: string = params.id || "2343";

  useEffect(() => {
    dispatch(fetchTweet(id));

    return () => {
      dispatch(setTweetData(undefined));
    }
  }, [dispatch, id]);

  if (isLoaded) {
    return <CircularProgress />
  }
  return (
    <Fragment>
      {tweet?._id ?
        <Tweet
          _id={tweet._id}
          text={tweet.text}
          user={tweet.user}
        />
        : <div>Tweet is empty </div>
      }
    </Fragment>
  )
}