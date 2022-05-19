import axios from 'axios'
import { TweetState } from '../../store/ducks/tweet/contracts/state';
import { ITweet, TweetsState } from '../../store/ducks/tweets/contracts/state';



export const TweetsApi = {
  fetchTweets(): Promise<TweetsState> {
    return axios.get('/tweets').then(res => res.data);
  },
  fetchTweetData(id: string): Promise<ITweet> {
    return axios.get(`/tweets/?_id=${id}`).then(res => res.data);
  },
  addTweet(payload: ITweet): Promise<ITweet> {
    return axios.post('/tweets', payload).then(res => res.data);
  }
}
