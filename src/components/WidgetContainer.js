import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchDataFromAPI } from '../redux/actions/action';

class WidgetContainer extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <div>
                Initialised data here
            </div>
        );
    }
}

function mapStateToProps( { loading, data, error } ) {
    return {
        isLoading: loading,
        data,
        error,
    }

}

const mapDispatchToProps = dispatch => {
    return {
      fetchData: () => dispatch(fetchDataFromAPI())
    }
  }

export default connect( mapStateToProps, mapDispatchToProps )(WidgetContainer);