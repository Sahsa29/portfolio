document.getElementById('find-github-user').onclick = function () {
    //debugger;
    var userName = document.getElementById('github-user').value;
    
    var url = 'https://api.github.com/users/' + userName;
     var xhr = new XMLHttpRequest();
     xhr.open('GET', url, true);
     xhr.send();
     xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var userInfo = JSON.parse(xhr.response);
            console.log(userInfo);
            console.log('User name: ' + userInfo.name);
            document.getElementById('user-link').innerHTML = "User found! Click to see more";
            document.getElementById('user-link').setAttribute("href",
             "user.html?name=" + userInfo.name + 
             "&photo=" + userInfo.avatar_url + 
             "&email=" + userInfo.email);

        }
    }
}


