/**
 * 
 */

var contactsDB; // IDBDatabase

function openContactsDB() {
	var indexedDB = window.indexedDB || window.webkitIndexedDB
			|| window.mozIndexedDB || window.mskitIndexedDb;
	if (indexedDB) {
		console.log("indexedDB supported");
		var request = indexedDB.open("ContactsDB", 3);
		request.addEventListener("success", function(argument) {
			console.log('success');
			contactsDB = request.result;
		}, false);
		request.addEventListener("error", function(argument) {
			console.log('error');
		}, false);
		request.addEventListener("upgradeneeded", function(argument) {
			console.log('upgradeneeded');

			var store = request.result.createObjectStore("Users", {
				keyPath : "id",
				autoIncrement : "true"
			});
			store.createIndex("nameIndex", "name", {
				unique : false
			});
			store.createIndex("emailIndex", "email", {
				unique : true
			});

		}, false);
	}

}