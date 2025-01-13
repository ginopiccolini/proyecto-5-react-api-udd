import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataList from './components/DataList';
import ErrorBoundary from './components/ErrorBoundary';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Container className="mt-5">
        {/* Uso de ErrorBoundary para envolver las rutas */}
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<DataList />} />
          </Routes>
        </ErrorBoundary>
      </Container>
    </Router>
  );
}

export default App;
