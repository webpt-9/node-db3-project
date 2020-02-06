const knex = require('knex');
const configureOptions = require('../knexfile').development;
const db = knex(configureOptions);

module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
	remove
};

function find() {
	return db('schemes');
}

function findById(id) {
	return db('schemes').where({ id }).first();
}

function findSteps(schemeID) {
	console.log(schemeID);
	return db('steps')
		.join('schemes', 'steps.scheme_id', '=', 'schemes.id')
		.where({ scheme_id: schemeID })
		.select('steps.id', 'steps.step_number', 'steps.instructions', 'schemes.scheme_name');
}

function add(scheme) {
	return db('schemes').insert(scheme).then((ids) => {
		return findById(ids[0]);
	});
}

function update(id, changes) {
	console.log('changes', changes);
	console.log('id', id);
	return db('schemes').where({ id }).update(changes);
}

function remove(id) {
	return db('schemes').where('id', id).del();
}
