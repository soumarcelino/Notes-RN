import { List } from 'immutable';
import actions from '../actions/note';
import uuidv1 from 'uuid/v1';

const initialState = List([{
	id: uuidv1(),
	text: 'Funciona bem'
}]);

export default function notes(state = initialState, action) {
	switch (action.type) {
		case actions.CREATE:
			return List(state).push({
				id: uuidv1(),
				text: action.payload
			});
		default:
			return state;
	}
}
