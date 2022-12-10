import { WORDS } from "./words.js";

function Test() {
  feedback = document.getElementsByTagName("form")[0]
  feedback.innerHTML = '<h2>Has it worked yet? </h2>';
  //alert("Testing...");
}

function Test2() {
        let btn = document.getElementById('btnCount');
        btn.addEventListener('click', () => {
            let headings = document.getElementsByTagName('h1');
            alert(`The number of H1 tags: ${headings.length}`);
        });
}
