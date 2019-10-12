import { List } from 'immutable';
import actions from '../actions/note';
import uuidv1 from 'uuid/v1';

const initialState = List([{
	id: uuidv1(),
	title: 'Minha primeira task',
	description: 'Funciona bem',
	date: new Date()
}]);

export default function notes(state = initialState, { type, payload }) {
	switch (type) {
		case actions.CREATE:
			return List(state).push({
				id: uuidv1(),
				title: payload.title,
				description: payload.description,
				date: new Date()
			});
		default:
			return state;
	}
}
