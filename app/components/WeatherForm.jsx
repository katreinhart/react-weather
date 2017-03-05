var React=require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var location=this.refs.location.value;
    if(location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <h3>Weather Form</h3>
        <input type='text' ref="location" default="enter location"/>
        <button>Submit</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
