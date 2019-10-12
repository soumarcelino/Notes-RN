export default function CUR(module) {
	const CREATE = `${module}/CREATE`;
	const UPDATE = `${module}/UPDATE`;
	const REMOVE = `${module}/REMOVE`;

	const create = (data) => ({
		type: CREATE,
		payload: data
	});

	const update = (data) => ({
		type: UPDATE,
		payload: data
	});

	const remove = (key) => ({
		type: REMOVE,
		payload: key
	});

	return {
		CREATE,
		UPDATE,
		REMOVE,
		create,
		update,
		remove
	};
}
