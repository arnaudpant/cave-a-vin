import { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        error: null,
    };

    static getDerivedStateFromError(error) {
        return {error}
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Une erreur est survenue.</h1>
                </div>
            );
        }
        // eslint-disable-next-line react/prop-types
        return this.props.children;
    }
}

export default ErrorBoundary;
