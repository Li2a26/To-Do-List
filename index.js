
document.querySelector("#addbtn").onclick = function () {
  let line = document.querySelector("#errands");
  if (document.querySelector("#input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#errands").innerHTML += `
              <div class="task">
                  <button class="done" onclick='strike()'>
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
    line.addEventListener(("click"), function (){
      line.style.textDecoration = "line-through";
    })
  }
};
// function strike() {
//  let ele = document.getElementsByClassName("name");
//  ele.style.textDecoration = "line-through";
// }
// let list = document.getElementsByClassName("task");
// list.addEventListener(
//   "click",
//   function (ev) {
//     if (ev.target.tagName === "span") {
//       ev.target.classList.toggle("checked");
//     }
//   },
//   false
// );


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
