/**
  ECMASCRIPT 2015 based code, transpiled with babel
**/
/**
  These are javascript objects describing CSS styles.
  With the correspondent webpack workflow it will be possible to import plain
  css style sheets, so you don't need to write your styles in .js if you don't
  want to.
**/

const baseStyle = {
  fontFamily: '"Tangerine", cursive',
  fontWeight: 400,
  fontSize: `2rem`,
  color: 'white'
};

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#7697cd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'column'
  },
  title: {
    ...baseStyle,
    fontSize: `4rem`,
    margin: 0,
  },
  link: {
    ...baseStyle,
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.75)',
  }
};

/**
  Small functional util that returns a random array item.
**/
const getRandomFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
  To receive a random design that our link will point at. Later, this code will be replaced with react based logic.
**/
const designs = ['textAnimation.html', 'typedText.html'];

const getRandomDesignURL = () => window.location.href+`designs/${getRandomFromArray(designs)}`;

/**
  This is the real page markup! It gets the URL query parameters as properties, so you can access them easily.
**/
const App = (props) => (
  <div style={styles.container}>
    <h1 style={{...styles.title, fontWeight: 700}}><span id="nametext">Dear {props.name ? props.name : "Anonymous"},</span></h1>
    <h1 style={styles.title}>This is a full stop, not a period. A full stop.</h1>
    <a style={styles.link} href={getRandomDesignURL()}>really?</a>
  </div>
);

/**
  Parse a query string like '?name=anonymous&expression=sad' to an object
  like {name: "anonymous", expression: "sad"}.
  (modified by me, orignal source at https://github.com/intesso/url-query)
**/
const parseQueryString = (queryString = '') => {
  queryString = queryString.trim().replace(/^(\?)/, '');
  queryString = queryString.split('&');

  var query = {};
  queryString.forEach(function(q) {
    var segment = q.split('=');
    query[segment[0]] = segment.length > 1 ? segment[1] : true;
  });

  return query;
};

const getURLQuery = () => parseQueryString(window.location.search);

/**
  Actually this renders the component based design. You can just change to another design (that is transformed into a component) and the browser will render the appropriate page.
**/
ReactDOM.render(<App {...getURLQuery()} />,  document.getElementById('root'));
