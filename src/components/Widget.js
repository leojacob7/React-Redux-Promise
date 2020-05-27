import React, { Component } from 'react';
import './styles.scss';

class Widget extends Component {
    renderData = () => {
        const { widgetInfo }  = this.props;
        if (widgetInfo.error) return widgetInfo.error
        if( widgetInfo.title )  return widgetInfo.title
    }
    render() {
        const { widgetInfo }  = this.props;
        return (
            <div className= { widgetInfo.error? "widgetfailData" :"widgetSuccessData" }>
                { this.renderData() }
            </div>
        );
    }
}

export default Widget;