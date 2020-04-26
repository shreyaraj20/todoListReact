import React, { Component } from "react";
import Notes from "./components/Notes";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: "",
      notes: []
    };
  }

  updateNoteText(noteText) {
    this.setState({ noteText: noteText.target.value });
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      let notesArr = this.state.notes;
      notesArr.push(this.state.noteText);
      this.setState({ noteText: "" });
    }
  };

  deleteNote(index) {
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({ notes: notesArr });
  }

  addNote() {
    if (this.state.noteText === "") {
      return;
    }

    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: "" });
    this.textInput.focus();
  }

  render() {
    let notes = this.state.notes.map((val, key) => {
      return (
        <Notes key={key} text={val} deleteMethod={() => this.deleteNote(key)} />
      );
    });

    return (
      <div className="App Container">
        <div className="header">React ToDo List</div>
        {notes}
        <div className="btn" onClick={this.addNote.bind(this)}>
          +
        </div>

        <input
          type="text"
          ref={input => {
            this.textInput = input;
          }}
          className="textInput"
          value={this.state.noteText}
          onChange={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
          placeholder="Hello!! Enter your list"
        />
      </div>
    );
  }
}

export default App;
