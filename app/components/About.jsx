var React=require('react');
var {Link}=require('react-router');

var About = (props) => {
  return(
    <div className='row'>
      <div className='columns medium-8 large-8 small-centered'>
        <h1 className='text-center'>About</h1>
        <p>This is just a simple weather app that I built in the React Develper Course. Here are some of the resources I used to build it:</p>
        <ul>
          <li><Link to="https://facebook.github.io/react">React </Link> - this was the Javascript framework.</li>
          <li><Link to="http://foundation.zurb.com/">Styled with Foundation</Link></li>
          <li><Link to="https://www.udemy.com/the-complete-react-web-app-developer-course/">Udemy Complete React Developer Course</Link></li>
        </ul>
      </div>
    </div>
  );
}

module.exports=About;
