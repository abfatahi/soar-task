import { Component } from "react";
import styled from "styled-components";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryContainer>
          <h2>Something went wrong.</h2>
          <p>
            We're sorry for the inconvenience. Please try refreshing the page.
          </p>
          <details>
            <summary>Error Details</summary>
            <p>{this.state.error && this.state.error.toString()}</p>
            <p>{this.state.errorInfo && this.state.errorInfo.componentStack}</p>
          </details>
        </ErrorBoundaryContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

const ErrorBoundaryContainer = styled.div`
  padding: 20px;
  border: 1px solid #ff6b6b;
  background-color: #ffe3e3;

  details {
    white-space: pre-wrap;
  }
`;
