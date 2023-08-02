import { Component } from "react";

class MyErrorBoundary extends Component {
    state = {
        errorMessage: '',
    };

    static getDerivedStateFromError(error) {
        return {errorMessage: error.toString()}
    }


    render() {
        if (this.state.errorMessage) {
            return (
                <div>
                    <h1>Une erreur est survenue</h1>
                </div>
            );
        }
        return this.props.children;
    }
}

export default MyErrorBoundary;
