import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [noteDescription, setNoteDescription] = useState([]);

  function onAdd(event) {
    event.preventDefault();

    setNoteDescription((prev) => {
      return [...prev, { noteTitle: title, noteContent: note }];
    });
    setTitle("");
    setNote("");
  }

  function onTitleChange(event) {
    setTitle(event.target.value);
  }

  function onNoteChange(event) {
    setNote(event.target.value);
  }

  function deleteNote(id) {
    setNoteDescription((prev) => {
      return prev.filter((notes, index) => {
        return id !== index ;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={onAdd}
        onTitleChange={onTitleChange}
        onNoteChange={onNoteChange}
        titleValue={title}
        noteValue={note}
      />

      {noteDescription.map((notes, index) => {
        return (
          <Note
            key={index}
            title={notes.noteTitle}
            content={notes.noteContent}
            delete={deleteNote}
            id={index}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
