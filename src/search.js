import { useHistory } from 'react-router-dom';

const { search } = window.location;
const query = new URLSearchParams(search).get('s');
const Search = () => {
  return <div>Hello world!</div>;
};

export default Search;

const SearchBar = ({searchQuery, setSearchQuery}) => (
  <form action="/" method="get">
      <label htmlFor="header-search">
          <span className="visually-hidden">Search</span>
      </label>
      <input
          value={searchQuery}
          onInput={e => setSearchQuery(e.target.value)}
          id="header-search"
          placeholder="Search memes"
          name="s"
      />
      <button>Search</button>
  </form>
);

export default SearchBar;
