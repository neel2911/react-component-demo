var React = require("react");
var ReactDom = require("react-dom");
var HeaderTile = require("./components/HeaderTile.jsx");
var CenterContainer = require("./components/CenterContainer.jsx");
var RightSideContainer = require("./components/RightSideContainer.jsx");
var List = require("./components/List.jsx");


ReactDom.render(<HeaderTile
    heading="21|headar"
    label="New follower add this month|label-headar"
    position="verticalCenter"
/>, document.getElementById("header_container_1"));

ReactDom.render(<HeaderTile
    heading="$ 1250|headar"
    label="Average Monthly Income|label-headar"
    position="verticalCenter"
/>, document.getElementById("header_container_2"));

ReactDom.render(<HeaderTile
    heading="$ 13865|headar"
    label="Yearly Income Goal|label-headar"
    position="verticalCenter"
/>, document.getElementById("header_container_3"));

ReactDom.render(<HeaderTile
    tileBackground="#FF8A00"
    heading="18°|headar"
    label="Paris|label-headar"
    position="bothCenter"
    isTemperatureTile= "true"
/>, document.getElementById("header_container_4"));

ReactDom.render(<CenterContainer
    baseBackgroundColor="#0096D0"
    heading="15080?12000?5100|headar"
    label="Shot View?Likes?Comments|label-headar"
    position="bothCenter"
/>, document.getElementById("sub_container_1"));

ReactDom.render(<CenterContainer
    baseBackgroundColor="#CD59AE"
    heading="15080?12000?5100|headar"
    label="Shot View?Likes?Comments|label-headar"
    position="bothCenter"
/>, document.getElementById("sub_container_2"));


ReactDom.render(<RightSideContainer
    titleColor="#0096D0"    
    heading="New Visitor|label-headar"
    label="1.5K|headar"    
/>, document.getElementById("side_left_container_1"));

ReactDom.render(<RightSideContainer
    titleColor="#B28AD6"    
    heading="Bounce Rate|label-headar"
    label="50%|headar"    
/>, document.getElementById("side_left_container_2"));

ReactDom.render(<RightSideContainer
    titleColor="#FF4826"    
    heading="Searchs|label-headar"
    label="28%|headar"    
/>, document.getElementById("side_left_container_3"));

ReactDom.render(<RightSideContainer
    titleColor="#63C254"    
    heading="Traffic|label-headar"
    label="140.5 kb|headar"    
/>, document.getElementById("side_left_container_4"));

