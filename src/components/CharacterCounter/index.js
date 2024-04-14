import {Component} from 'react'
import {v4} from 'uuid'

import './index.css'

class CharacterCounter extends Component {
  state = {
    textInput: '',
    charList: [],
  }

  onClickAdd = () => {
    const {textInput, charList} = this.state

    const newChar = {
      id: v4(),
      word: textInput,
      count: textInput.length,
    }

    this.setState({charList: [...charList, newChar], textInput: ''})
  }

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  listItem = each => (
    <li className="list-item" key={each.id}>
      <p className="word-count">
        {each.word} : {each.count}
      </p>
    </li>
  )

  render() {
    const {charList, textInput} = this.state
    const listLenght = charList.length === 0

    return (
      <div className="main-container">
        <div className="app-container">
          <div className="count-container">
            <div className="count-heading-cont">
              <h1 className="count-heading">
                Count the characters like a Boss...
              </h1>
            </div>
            {listLenght ? (
              <div className="no-user-container">
                <img
                  className="no-user-image"
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                />
              </div>
            ) : (
              <ul className="count-list">
                {charList.map(each => this.listItem(each))}
              </ul>
            )}
          </div>
          <div className="char-input">
            <h1 className="main-heading">Character Counter</h1>
            <form className="input-and-button">
              <input
                className="input"
                onChange={this.onChangeInput}
                type="text"
                value={textInput}
                placeholder="Enter the Characters here"
              />
              <button
                className="add-button"
                onClick={this.onClickAdd}
                type="button"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
