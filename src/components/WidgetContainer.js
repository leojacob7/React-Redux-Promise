import React, { Component } from 'react';
import { connect } from 'react-redux';
import Widget from './Widget';
import { fetchDataFromAPI } from '../redux/actions/action';

class WidgetContainer extends Component {
	componentDidMount() {
		this.props.fetchData();
	}

	render() {
		const { widgetData } = this.props;
		return widgetData.map((item) => {
			return (
				<div>
					<Widget widgetInfo={item.data} />
				</div>
			);
		});
	}
}

function mapStateToProps(state) {
	return {
		widgetData: state,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: () => dispatch(fetchDataFromAPI()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetContainer);
