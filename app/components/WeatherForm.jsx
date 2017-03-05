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
        <h1 className="text-center">Get Weather</h1>
        <input type='text' ref="location" default="enter location"/>
        <button type="submit" className="hollow button expanded">Submit</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
