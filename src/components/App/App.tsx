import { useState } from "react";
import Joblist from "../JobList/Joblist";
import FiltersList from "../FiltersList/FiltersList";

function App() {  

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleAddFilter = (data: string[]) => {
    setSelectedFilters(data)
  }

  const handleRemoveFilter = (data: string[]) => {
    setSelectedFilters(data)
  }


  return (
    <>
      <FiltersList selectedFilters={selectedFilters} removeFilter={handleAddFilter}/>
      <Joblist selectedFilters={selectedFilters} addFilter={handleAddFilter}/>
    </>
  );
}

export default App;
