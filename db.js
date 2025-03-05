import sqlite3 from 'better-sqlite3'

//const dbPath = "C:/sqliteDBs/test.db"
const dbPath = '/home/ubuntu/database/test.db';

export const db = new sqlite3(dbPath);

const createTable = () => {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS comments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        comment TEXT NOT NULL
      );
    `;
  
    db.exec(createTableQuery);  // Executes the query to create the table
    console.log('Table created or already exists');
};
  
  // Call the function to create the table
  createTable();