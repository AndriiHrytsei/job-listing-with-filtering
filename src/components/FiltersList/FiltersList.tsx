import css from "./FiltersList.module.css";

const FiltersList = ({
  selectedFilters,
  removeFilter,
}: {
  selectedFilters: string[];
  removeFilter: Function;
}) => {
  const handleRemoveFilter = (filterIndex: number): void => {
    removeFilter((prevState: string[]) =>
      prevState.filter((_, index) => index !== filterIndex)
    );
  };


  return selectedFilters.length !== 0 ? (
    <section className={css.filtersListContainer}>
      <ul className={css.filtersList}>
        {selectedFilters.map((filter, index) => (
          <li className={css.filterItem} key={index}>
            <span>
              {filter}
            </span>
            <button type="button" onClick={() => handleRemoveFilter(index)}></button>
          </li>
        ))}
      </ul>
      <button type="button" className={css.clearAll} onClick={(): void => removeFilter([])}>Clear</button>
    </section>
  ) : (<></>);
};

export default FiltersList;
