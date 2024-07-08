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
          const filtersList: string[] = item.languages
            .concat(item.tools)
            .concat(item.level)
            .concat(item.role);
          if (selectedFilters.every((filter) => filtersList.includes(filter))) {
            return (
              <li key={item.id} className={css.jobItem}>
                <div className={css.companyLogo}>
                  <img src={item.logo} alt="company logo" />
                </div>
                <div className={css.jobInfo}>
                  <h3 className={css.companyName}>{item.company}</h3>
                  <h2 className={css.jobName}>{item.position}</h2>
                  <ul className={css.jobDetails}>
                    <li>{item.postedAt}</li>
                    <li>{item.contract}</li>
                    <li>{item.location}</li>
                  </ul>
                </div>
                <ul className={css.stack}>
                  <li>
                    <button
                      type="button"
                      onClick={handleAddFilter}
                      value={item.role}
                    >
                      {item.role}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={handleAddFilter}
                      value={item.level}
                    >
                      {item.level}
                    </button>
                  </li>
                  {item.languages.map((language) => (
                    <li key={language}>
                      <button
                        type="button"
                        onClick={handleAddFilter}
                        value={language}
                      >
                        {language}
                      </button>
                    </li>
                  ))}
                  {item.tools.map((tool) => (
                    <li key={tool}>
                      <button
                        type="button"
                        onClick={handleAddFilter}
                        value={tool}
                      >
                        {tool}
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
