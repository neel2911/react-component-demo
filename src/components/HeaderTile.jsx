var React = require("react");
var DisplayText = require("./DisplayText.jsx");
class HeaderTile  extends React.Component {
    render() {
        var fontStyle = "",
            headerTileStyle = {
                border:'1px solid',
                borderColor: this.props.tileBorder || '#E1E2E3',
                height: '150px',
                padding: '0px 10px',
                margin:'10px 0px',
                backgroundColor: this.props.tileBackground || 'white',
                position: 'relative',
                borderRadius:'3px'
            };
        
        if (this.props.tileBackground) { 
            fontStyle = '#ffffff';
        }
        
        return (
            <div style={headerTileStyle}>
            <DisplayText 
                    heading={this.props.heading}
                    label={this.props.label}
                    position={this.props.position}
                    fontStyle={fontStyle}
                    isTemperatureTile={this.props.isTemperatureTile || false}    
            />
            </div>
        );
    }
};

module.exports = HeaderTile;