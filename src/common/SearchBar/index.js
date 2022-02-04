import { useDispatch } from 'react-redux';
import Wrapper from './Wrapper';

import { setSearch } from 'redux/appSlice';

export const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <input
        type="text"
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </Wrapper>
  );
};

export default SearchBar;
