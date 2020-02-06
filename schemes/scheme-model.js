const knex = require('knex');
const configureOptions = require('../knexfile').development;
const db = knex(configureOptions);

module.exports = {
	find,
	findById,
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
