import { ChangeEvent, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FiltersProvider, useFilters } from "react-qif";

function App() {
  const [filters, setFilters] = useState({});

  return (
    <FiltersProvider syncSearchParams filters={filters} setFilters={setFilters}>
      <CustomFilter name="search" defaultValue="" />
    
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </FiltersProvider>
  );
}

export default App;

const CustomFilter = ({ name, defaultValue = "" }: any) => {
  const { register, setValue, getValue } = useFilters();

  useEffect(() => {
    register(name, defaultValue);
  }, [name, defaultValue, register]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(name, e.target.value);

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        type="text"
        value={getValue(name) || defaultValue}
        onChange={handleChange}
        placeholder={`Enter ${name}...`}
      />
    </div>
  );
};
