import css from "./FiltersList.module.css";

const FiltersList = ({
  selectedFilters,
  removeFilter,
}: {
  selectedFilters: string[];
  removeFilter: Function;
}) => {

  const handleRemoveFilter = (filterIndex: number) => {
    removeFilter((prevState: string[]) => prevState.filter((filter) => prevState.indexOf(filter) !== filterIndex))
  }

  return (
    <section className={css.filtersListContainer}>
      <ul className={css.filtersList}>
        {selectedFilters.map((filter, index) => (
          <li className={css.filterItem} key={index}>
            <span>{filter}</span>
            <button type="button" onClick={() => handleRemoveFilter(index)}>X</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FiltersList;
