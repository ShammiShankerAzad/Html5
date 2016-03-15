var nameInput;
var spanMsg;

function load() {

	openContactsDB();

	nameInput = document.getElementById("name");
	spanMsg = document.getElementById("nameMsg");

	nameInput.addEventListener("invalid", function() {
		var validity = nameInput.validity;

		if (validity.valueMissing) {
			spanMsg.innerHTML = "The name is mismatch";
		} else {
			spanMsg.innerHTML = "This name is not as per pattern";
		}

	}, false);
}

function validateName() {
	nameInput.checkValidity();
}

function saveUser() {
	var nameInput = document.getElementById("name");
	var emailInput = document.getElementById("email");
	var urlInput = document.getElementById("companyUrl");
	var dobInput = document.getElementById("dob");

	var user = {
		name : nameInput.value,
		email : emailInput.value,
		companyURL : urlInput.value,
		dateOfBirth : dobInput.value,
	};

	var tx = contactsDB.transaction("Users", "readwrite");
	var usersStore = tx.objectStore("Users");
	
	var request = usersStore.add(user);
	
	request.addEventListerner("success",function(){
		console.log("User saved with name:"+user.name);
	},false);
	
	request.addEventListerner("error",function(){
		console.log("error:"+user.name);
	},false);

}