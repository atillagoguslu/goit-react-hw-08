import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../redux/filteredSlice";
import { fetchContacts } from "../redux/constactsOps";

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleSortChange = (e) => {
    const value = e.target.value;
    dispatch(fetchContacts(value));
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </div>
      <div className={styles.sortList}>
        <label htmlFor="sortSelect" className={styles.sortLabel}>
          Sort by:
        </label>
        <select
          defaultValue=""
          className={styles.sortSelect}
          id="sortSelect"
          onChange={handleSortChange}
        >
          
          <option value="">Creation Date</option>
          <option value="name">Name</option>
          <option value="number">Number</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBox;
