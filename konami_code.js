const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


function init() {
  let index = 0

  document.body.addEventListener("keydown", (e) => {
    const key = e.key
    
    index = (codes[index] === key) ? ++index : 0
    
    if (idx === codes.length) {
      window.alert("Hurray!");
      idx = 0
    }
    
  });
}
