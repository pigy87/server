let button = document.getElementById('button');
let dataField = document.getElementById('proba');
let url = "https://reqres.in/api/users?page=2";

let takeData = () => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.status == 200) {
            let response = JSON.parse(xhr.response);
            let pro = response.data;
            console.log(pro);

            pro.forEach(function(element) {

                dataField.innerHTML +=

                    '<div class="files">' +
                    '<img src="' + element.avatar + '">' +
                    '<ul>' +
                    '<li>' + element.first_name + '</li>' +
                    '<li>' + element.last_name + '</li/>' +
                    '<li>' + element.email + '</li>' +
                    '<li>' + element.id + '</li>' +
                    '</ul>' +
                    `</div>`;
            });
        }
    };
    xhr.open("GET", url);
    xhr.send();
};



button.addEventListener("click", function() {
    (takeData())
});