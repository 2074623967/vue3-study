import { mapGetters} from 'vuex';
import {useMapper} from './userMapper'

export function useGetters(mapper) {
  return useMapper(mapper,mapGetters);
}
