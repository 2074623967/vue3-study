import { mapState } from 'vuex';
import { useMapper } from './userMapper';

export function useState(mapper) {
  return useMapper(mapper, mapState);
}
