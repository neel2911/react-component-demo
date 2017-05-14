var React = require('react');
class DisplayText extends React.Component {
    constructor(props) { 
        super(props);       
    }
    componentWillMount() { 
        var data = this.props.heading.split('|');
        
        this.setState({ headingText: data[0] });
        this.setState({ headingClass: data[1] });
        
        data = this.props.label.split('|');
        this.setState({ labelText: data[0] });
        this.setState({ labelClass: data[1] });
    }
    render() {
        var contentColor = {},
            positionStyle = {},
            headingColor = { color: '#656565' },
            labelColor = { color: '#B1B2B2' },
            temperatureTileStyle = {
                fontWeight: 'lighter',
                fontSize: '30px'
            };
        if (this.props.fontStyle) {
            if (this.props.fontStyle === "#ffffff") {
                headingColor.color = this.props.fontStyle;
                labelColor.color = this.props.fontStyle;                
            } else {
                headingColor.color = this.props.fontStyle.split('|')[0];
                labelColor.color = this.props.fontStyle.split('|')[1];                
            }
        }
        switch (this.props.position) {
            case 'bothCenter':
                 positionStyle = {
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%,-50%)'            
                };
                break;
            case 'verticalCenter':
                 positionStyle = {
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)'            
                };                
                break;
            case 'horizontalCenter':
                 positionStyle = {
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)'            
                };                
                break;
            default:
        }
     
        return (<div style={Object.assign(contentColor,positionStyle)}>
            <div className={this.state.headingClass} style={this.props.isTemperatureTile ?  Object.assign(headingColor,temperatureTileStyle):headingColor}>{this.state.headingText}</div>
            <div className={this.state.labelClass} style={labelColor}>{this.state.labelText}</div>
        </div>);

    }
};

module.exports = DisplayText;
