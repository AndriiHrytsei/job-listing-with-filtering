import { useState } from "react";
import Joblist from "../JobList/Joblist";
import FiltersList from "../FiltersList/FiltersList";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleEditFilters = (data: string[]): void => {
    setSelectedFilters(data);
  };

  return (
    <>
      <Header />
      <Main>
        <FiltersList
          selectedFilters={selectedFilters}
          removeFilter={handleEditFilters}
        />
        <Joblist
          selectedFilters={selectedFilters}
          addFilter={handleEditFilters}
        />
      </Main>
    </>
  );
}

export default App;
