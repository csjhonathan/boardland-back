import db from '../database/database.connection.js';

export const games = db.collection('games');
export const users = db.collection('users');