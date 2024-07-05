import React, { useState } from "react";
import data from "../../data.json";
import css from "./JobList.module.css";

const Joblist = () => {
  const [filter, setFilter] = useState<string[]>([]);

  const handleGetBtnValue = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const value: string = e.currentTarget.value;
    if (filter.includes(value)) {
      return;
    }
    setFilter((prevState) => [...prevState, value]);
  };

  return (
    <ul className={css.jobList}>
      {data.map((item) => {
        if (filter.length >= 0) {
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
                    onClick={handleGetBtnValue}
                    value={item.role}
                  >
                    {item.role}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={handleGetBtnValue}
                    value={item.level}
                  >
                    {item.level}
                  </button>
                </li>
                {item.languages.map((language) => (
                  <li key={language}>
                    <button
                      type="button"
                      onClick={handleGetBtnValue}
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
                      onClick={handleGetBtnValue}
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
  );
};

export default Joblist;
