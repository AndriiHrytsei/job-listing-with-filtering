import data from "../../data.json";
import css from "./JobList.module.css";

const Joblist = () => {
  console.log(data);
  return (
    <ul className={css.jobList}>
      {data.map((item) => (
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
              <button type="button">{item.role}</button>
            </li>
            <li>
              <button type="button">{item.level}</button>
            </li>
            {item.languages.map(language => (
              <li key={language}>
                <button type="button">{language}</button>
              </li>
            ))}
            {item.tools.map(tool => (
            <li key={tool}>
              <button type="button">{tool}</button>
            </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Joblist;
