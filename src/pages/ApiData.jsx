import { useState, useEffect } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function ApiData() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`https://catfact.ninja/facts?page=${page}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch cat facts");
        return res.json();
      })
      .then((data) => {
        setFacts(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page]);

  const filteredFacts = facts.filter((fact) =>
    fact.fact.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Card title="🐱 Cat Facts">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Search facts"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 w-full rounded"
        />

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <ul className="space-y-4">
          {filteredFacts.map((fact, index) => (
            <li key={index} className="bg-gray-100 dark:bg-gray-700 p-3 rounded shadow">
              <p className="text-gray-800 dark:text-white">{fact.fact}</p>
            </li>
          ))}
        </ul>

        <div className="flex justify-between mt-4">
          <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Previous
          </Button>
          <Button onClick={() => setPage(page + 1)}>Next</Button>
        </div>
      </div>
    </Card>
  );
}


