var React = require('react');
var DisplayText = require('./DisplayText.jsx');

class RightSideContainer extends React.Component{
    render() {
        var baseContainerStyle = {
            height: '150px',
            background: this.props.baseBackgroundColor || '#ffffff',
            width: '100%',
            margin: '15px 0px',
            border: '1px solid',
            borderColor: '#E1E2E3',
            borderRadius:'3px'
        },innerContainerStyle = {
            position: 'relative',
            height: '50%',
            padding: '0px 10px',
            background: this.props.titleColor || '#000000',
            borderRadius: '3px 3px 0px 0px'
        };
        return (
            <div style={baseContainerStyle}>
                <div style={innerContainerStyle}>
                    <DisplayText
                        heading={this.props.heading}
                        label={this.props.label}
                        position="verticalCenter"
                        fontStyle="#ffffff"    
                    />    
                </div>
            </div>
        );
    }
};

module.exports = RightSideContainer;