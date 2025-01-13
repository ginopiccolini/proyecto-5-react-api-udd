import { useState, useEffect } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';

const DataList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setError(null);

    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener datos de la API');
        }
        return response.json();
      })
      .then((data) => {
        setData(data.value);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="text-center">
      <h1 className="mb-4">Chuck Norris Jokes</h1>
      {loading && <Spinner animation="border" variant="primary" />}
      {error && <p className="text-danger">{error}</p>}
      {data && !loading && !error && (
        <Card className="mb-3">
          <Card.Body>
            <Card.Text>{data}</Card.Text>
          </Card.Body>
        </Card>
      )}
      <Button variant="primary" onClick={fetchData}>
        Obtener otro chiste
      </Button>
    </div>
  );
};

export default DataList;
