import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    <section className="jobs-center">
      <div className="loading"></div>
    </section>;
  }

  return <h2>Tabs Starter</h2>;
};

export default App;
