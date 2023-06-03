/*let array1 = [];

function add () {
    let value = document.getElementById('input').value;
    array1.push (value);
    document.getElementById('output').innerHTML= array1;

}*/
document.querySelector("#wrapper").onclick = function () {
    if (document.querySelector("#input").value.length == 0) {
      alert("Please Enter a Errand");
    } else {
      document.querySelector("#errands").innerHTML += `
                <div class="task">
                    <button class="done">
                    </button>
                    <span id="name">
                        ${document.querySelector("#input").value}
                    </span>
                    <button class="remove">
                        <img class="redx" src="https://i.postimg.cc/K860PG8c/gie5-B478-T-removebg-preview.png"/>
                    </button>
                </div>
            `;
      let putted = document.querySelectorAll(".remove");
      for (let i = 0; i < putted.length; i++) {
        putted[i].onclick = function () {
          this.parentNode.remove();
        };
      }
    }
};
//Load task from local storage when the page loads
//document.addEventListener(" DOMContentLoaded",enter errands);


//function add a errand
f//unction Errand() {
    //


/*function wipe(){
    let clear = document.getElementById("output")
    clear.innerHTML = '';
    console.log(array1);
    array1 = [];
}*/
