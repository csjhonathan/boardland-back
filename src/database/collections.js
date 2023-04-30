import db from '../database/database.connection.js';

export const games = db.collection('games');
export const users = db.collection('users');
export const session = db.collection('session');
export const purchases = db.collection('purchases');
export const carts = db.collection('carts');
