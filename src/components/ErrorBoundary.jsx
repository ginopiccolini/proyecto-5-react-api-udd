import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  // Método llamado cuando ocurre un error durante el renderizado
  static getDerivedStateFromError() {
    return { hasError: true }; // Actualiza el estado para mostrar un mensaje de error
  }

  // Captura el error y la información adicional
  componentDidCatch(error) {
    this.setState({ errorMessage: error.toString() });
    // Puedes registrar el error en un servicio de monitoreo si lo necesitas
    console.error("Error capturado por ErrorBoundary:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
          <h2>Algo salió mal:</h2>
          <p>{this.state.errorMessage}</p>
        </div>
      );
    }

    // Renderiza los hijos normalmente
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
