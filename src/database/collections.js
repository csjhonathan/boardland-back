import db from './database.connection.js';

export const games = db.collection('games');
export const users = db.collection('users');
export const session = db.collection('session');