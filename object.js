<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form onsubmit="saveToLocalStorage(event)">
        <label> Name</label>
        <input type="text" name="username"  required/>
        <label> EmailId</label>
        <input type="email" name="emailId"  required/>
        <label> Phone Number</label>
        <input type="tel" name="phonenumber" />
        <button> Submit </button>
    </form>
    <ul id='listOfitems'></ul>
    <ul id='listOfUsers'></ul>
    <script>
        function saveToLocalStorage(event) {
                event.preventDefault()
                const name = event.target.username.value;
                const email = event.target.emailId.value;
                const phonenumber = event.target.phonenumber.value;
                // localStorage.setItem('name', name);
                // localStorage.setItem('email', email);
                // localStorage.setItem('phonenumber', phonenumber)
                const obj = {
                    name,
                    email,
                    phonenumber
                }
                localStorage.setItem(obj.email, JSON.stringify(obj))
                showNewUserOnScreen(obj)
            }

            function showNewUserOnScreen(user){
                const parentNode = document.getElementById('listOfUsers');
                const childHTML = `<li> ${user.email}${user.name} - ${user.email} </li>`
                 parentNode.innerHTML = parentNode.innerHTML + childHTML;
            }
</script>