var React = require("react");
var DisplayText = require("./DisplayText.jsx");

class CenterContainer extends React.Component{
    // componentWillMount() { 
    //     var data = this.props.heading.split('?');
        
    //     this.setState({ heading: data[0] });
        
    //     data = this.props.label.split('?');
    //     this.setState({ label: data[0] });
    // }
    
    render() {
        var baseContainerStyle = {
            position: 'relative',
            height: '250px',
            background: this.props.baseBackgroundColor || '#ffffff',
            width: '100%',
            margin: '30px 0px',
            border: '1px solid',
            borderColor: '#E1E2E3',
            borderRadius: '3px',
            },
            innerContainerStyle = {
                position: 'absolute',
                background: this.props.bottomPanelColor || '#484D4D',
                borderRadius: '0px 0px 3px 3px',
                bottom: '0',
                width: '100%',
                height: '25%'
            },
            dispalyContainerStyle = {
                position: 'relative',
                height: '62px'
            },
            header = this.props.heading.split('|'),
            label = this.props.label.split('|'),
            headerText = header[0].split('?'),
            headerStyle = header[1],
            labelText = label[0].split('?'),
            labelStyle = label[1],
            displayCompArray = [];

        for (var i = 0; i < headerText.length; i++){
            displayCompArray.push({
                header: headerText[i],
                label: labelText[i]
            });
        }

        var createDisplayItem = function (data,index) { 
            return <div key={index} className="text-center col-xs-4 col-sm-4" style={dispalyContainerStyle} >
                <DisplayText
                    heading={data.header + "|" + headerStyle}
                    label={data.label + "|" + labelStyle}
                    position="bothCenter"
                    fontStyle="#ffffff|#B1B2B2"
                />
            </div>;
        }; 

        return (
            <div style={baseContainerStyle}>
                <div style={innerContainerStyle}>
                    <div className="row">
                        {displayCompArray.map(createDisplayItem)}
                    </div>    
                </div>
            </div>
        );
    }
};

module.exports = CenterContainer;