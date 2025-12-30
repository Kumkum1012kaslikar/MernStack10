const requestUrl = 'https://api.github.com/users/Kumkum1012kaslikar'
document.getElementById("card").addEventListener("click", function(){

const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)

xhr.onreadystatechange = function(){
    
    if(xhr.readyState === 4 && xhr.status === 200){
        const data = JSON.parse(this.responseText);
         document.getElementById("avatar").src = data.avatar_url;
        document.getElementById('followers').innerText =
                `Followers: ${data.followers}`;
       
document.getElementById('profile').style.display ="block";
    }
    
    
}
xhr.send();
})