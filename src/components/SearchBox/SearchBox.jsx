import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    const query = event.target.value;
    dispatch(changeFilter(query));
  };

  return (
    <div>
      <input
        className={css.input}
        type="text"
        name="search"
        placeholder="Search contacts"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}