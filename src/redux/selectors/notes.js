const getNotes = (state) => state.notes;
const getNoteById = (id) => (state) => {
	const note = state.notes.filter(note => note.id === id);
	if (note) return note[0]
}

export default {
	getNotes,
	getNoteById
};
