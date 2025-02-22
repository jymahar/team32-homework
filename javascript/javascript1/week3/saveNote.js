const notes = [];

/**
 *Function to save Note
 * @param {string} content
 * @param {number} id
 */
function saveNote(content, id) {
  // write some code here
  const object = {
    content: content,
    id: id,
  };
  notes.push(object);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

function getNote(id) {
  for (let note of notes) {
    if (id === note.id) {
      return note;
    } else {
      console.log(`Note not found with id: ${id}`);
    }
  }
}

const firstNote = getNote(1);
const secondNote = getNote(2);
console.log(firstNote);
console.log(secondNote);

function logOutNotesFormatted() {
  for (let note of notes) {
    const output = `The note with id: ${note.id}, has the following note text: ${note.content}`;
    console.log(output);
  }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
