import { useFetch } from "./useFetch";

const App = () => {
  const { loading, data } = useFetch();
  console.log(data);

  return <h1>Pagination</h1>;
};
export default App;
