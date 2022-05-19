import axios from 'axios'
import { TagState } from '../../store/ducks/tags/contracts/state';



export const TagssApi = {
  fetchTags(): Promise<TagState> {
    return axios.get('/tags').then(res => res.data);
  }
}
