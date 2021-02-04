import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const SearchFilter = ({ handleFilterChange }) => {
  const filter = useSelector(state => state.filter);
  return (
    <input
      value={filter}
      id="filter"
      placeholder="Filter"
      onChange={handleFilterChange}
    />
  );
};

SearchFilter.propTypes = {
  handleFilterChange: PropTypes.func,
};

SearchFilter.defaultProps = {
  handleFilterChange: () => { },
};

export default SearchFilter;
