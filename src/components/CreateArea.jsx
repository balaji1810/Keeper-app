import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          onChange={props.onTitleChange}
          name="title"
          placeholder="Title"
          value={props.titleValue}
        />
        <textarea
          onChange={props.onNoteChange}
          name="content"
          placeholder="Take a note..."
          value={props.noteValue}
          rows="3"
        />
        <button onClick={props.onAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
