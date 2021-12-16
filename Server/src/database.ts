import mysql from 'promise-mysql';

import db from './config';

const pool = mysql.createPool(db.db);

const connection = pool.get('getConnection');

const connectionPromise = mysql.createConnection(db.db);

connectionPromise.then(connect =>{
    console.log('connect');
    connect.query("select id_persona from Persona");
});


/*

var EntityModel = {
    createEntity: function(entityName, entityObject) {
      var cols = [];
      var bindParams = [];
      var values = [];
  
      Object.keys(entityObject).forEach(function(key) {
        cols.push(key);
        bindParams.push("?");
        values.push(entityObject[key]);
      });
  
      return connectionPromise.then(function(conn) {
        var query = "INSERT INTO " + entityName + " (" + cols.join(", ") + ") VALUES (" + bindParams.join(", ") + ")";
        console.log("QUERY:\t" + query);
        console.log("VALUES:\t" + values);
        return conn.query(query, values);
      });
    },
  
    searchEntity: function(entityName, searchObj) {
      return connectionPromise.then(function(conn) {
        var query = "SELECT * FROM " + entityName + " WHERE 1=1";
        var values = [];
  
        if (searchObj) {
          Object.keys(searchObj).forEach(function(key) {
            query += "\n AND " + key + " = ?";
            values.push(searchObj[key]);
          });
        }
  
        console.log("QUERY:\t" + query);
        console.log("VALUES:\t" + values);
  
        return conn.query(query, values);
      });
    },
  
    deleteEntity: function(entityName, searchObj) {
      return connectionPromise.then(function(conn) {
        var query = "DELETE FROM " + entityName + " WHERE 1=1";
        var values = [];
  
        Object.keys(searchObj).forEach(function(key) {
          query += "\n AND " + key + " = ?";
          values.push(searchObj[key]);
        });
        console.log("QUERY:\t" + query);
        console.log("VALUES:\t" + values);
  
        return conn.query(query, values);
      });
    },
  
    updateEntity: function(entityName, searchObj, newEntity) {
      return connectionPromise.then(function(conn) {
        var query = "UPDATE " + entityName + " SET ";
  
        var values = [];
        var temp = [];
        Object.keys(newEntity).forEach(function(key) {
          temp.push(key + " = ?");
          values.push(newEntity[key]);
        });
  
        query += " " + temp.join(", ");
        query += " WHERE 1=1";
  
        Object.keys(searchObj).forEach(function(key) {
          query += "\n AND " + key + " = ?";
          values.push(searchObj[key]);
        });
  
        console.log("QUERY:\t" + query);
        console.log("VALUES:\t" + values);
  
        return conn.query(query, values);
      });
    }
  };
  */
 
  export default connectionPromise;
