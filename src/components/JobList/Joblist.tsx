import React from "react";
import data from "../../data.json";
import css from "./JobList.module.css";

const Joblist = ({
  addFilter,
  selectedFilters,
}: {
  addFilter: Function;
  selectedFilters: string[];
}) => {
  const handleAddFilter = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const value: string = e.currentTarget.value;
    if (selectedFilters.includes(value)) {
      return;
    }
    addFilter((prevState: string[]) => [...prevState, value]);
  };

  return (
    <section className={css.jobListContainer}>
      <ul className={css.jobList}>
        {data.map((item) => {
          const filtersList: string[] = [
            item.role,
            item.level,
            ...item.languages,
            ...item.tools,
          ];
          if (selectedFilters.every((filter) => filtersList.includes(filter))) {
            return (
              <li key={item.id} className={css.jobItem} style={{borderLeft: item.featured ? "10px solid var(--desaturated-dark-cyan)" : "none"}}>
                <div className={css.companyLogo}>
                  <img src={item.logo} alt="company logo" />
                </div>
                <div className={css.jobInfo}>
                  <div className={css.heading}>
                    <h3 className={css.companyName}>{item.company}</h3>
                    {item.new === true ? (
                      <span className={css.new}>NEW!</span>
                    ) : (
                      <></>
                    )}
                    {item.featured === true ? (
                      <span className={css.featured}>FEATURED</span>
                    ) : (
                      <></>
                    )}
                  </div>
                  <h2 className={css.jobName}>{item.position}</h2>
                  <ul className={css.jobDetails}>
                    <li className={css.jobDetailsItem}>{item.postedAt}</li>
                    <li className={css.jobDetailsItem}>{item.contract}</li>
                    <li className={css.jobDetailsItem}>{item.location}</li>
                  </ul>
                </div>
                <ul className={css.stack}>
                  {filtersList.map((filter) => (
                    <li key={filter}>
                      <button
                        type="button"
                        onClick={handleAddFilter}
                        value={filter}
                        className={css.stackBtn}
                      >
                        {filter}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
};

export default Joblist;
