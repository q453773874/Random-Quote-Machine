import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
// Redux
// Action constants
const GET_QUOTE = 'GET_QUOTE'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'rgb(44, 62, 80)'
    }
  }
  componentDidMount() {
    this.props.getQuotes()
  }
  onGetNewQuote = () => {
    this.props.getQuotes()
    const color =
      'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')'
    this.setState({ color })

  }
  render() {
    // style
    let appStyle = {
      backgroundColor: this.state.color,
      height: '100vh',
    }
    const textBoxStyle = {
      position: 'absolute',
      backgroundColor: 'white',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,0)',
      padding: '20px',
      width: '40vw',
      borderRadius: '10px 10px 10px 10px'
    }
    let textStyle = {
      color: this.state.color,
    }
    let authorStyle = {
      color: this.state.color,
      textAlign: 'right'
    }
    let leftButtonStyle = {
      borderRadius: '5px 5px 5px 5px',
      fontSize: '20px',
      marginTop: '10px',
      color: 'white',
      backgroundColor: this.state.color,
      float: 'left'
    }
    let rightButtonStyle = {
      borderRadius: '5px 5px 5px 5px',
      padding: '10px',
      marginTop: '10px',
      color: 'white',
      backgroundColor: this.state.color,
      float: 'right'
    }

    return (
      <div style={appStyle}>
        <div id="quote-box" style={textBoxStyle}>
          <div id="text" style={textStyle}>
            {this.props.quote.content}
          </div>
          <div id="author" style={authorStyle}>-{this.props.quote.author}</div>
          <div>
            <p><a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet" style={leftButtonStyle}><i class="fab fa-twitter-square"></i></a></p>
            <button id="new-quote" style={rightButtonStyle} onClick={this.onGetNewQuote}>New Quote</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quote: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getQuotes: () => { dispatch({ type: GET_QUOTE }) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
