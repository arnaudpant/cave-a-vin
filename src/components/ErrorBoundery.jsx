import { Component } from "react";

class MyErrorBoundary extends Component {
    state = {
        errorMessage: '',
    };

    static getDerivedStateFromError(error) {
        return {errorMessage: error.toString()}
    }

    // componentDidCatch(error, info) {
    //     this.logErrorToService(error.toString(), info.componentStack);
    // }

    render() {
        if (this.state.errorMessage) {
            return (
                <div>
                    <h1>Une erreur est survenue</h1>
                </div>
            );
        }
        // eslint-disable-next-line react/prop-types
        return this.props.children;
    }
}

export default MyErrorBoundary;
