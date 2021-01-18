let db;
const request = indexedDB.open('budget-tracker', 1);

// this event will emit if the database version changes (nonexistant to version 1, v1 to v2, etc.)
request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('new_tracker', { autoIncrement: true });
  };

// upon a successful 
request.onsuccess = function(event) {
    db = event.target.result;
    if (navigator.onLine) {

    }
  };
  
  request.onerror = function(event) {
    // log error here
    console.log(event.target.errorCode);
  };

  // This function will be executed if we attempt to submit a new pizza and there's no internet connection
function saveRecord(record) {
    // open a new transaction with the database with read and write permissions 
    const transaction = db.transaction(['new_pizza'], 'readwrite');
  
    // access the object store for `new_pizza`
    const ObjectStore = transaction.objectStore('new_pizza');
  
    // add record to your store with add method
    pizzaObjectStore.add(record);
  }

  .catch(err => {
    console.log(err);
    saveRecord(formData);
  });