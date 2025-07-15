document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("תודה! ההודעה שלך נשלחה.");
  this.reset();
});
// Allow adding new text blocks
document.getElementById("add-text-btn").addEventListener("click", () => {
  const textContainer = document.getElementById("text-container");
  const newText = document.createElement("div");
  newText.className = "text-block";
  newText.textContent = "טקסט חדש";
  newText.style.top = "20px";
  newText.style.right = "20px";
  makeDraggable(newText);
  textContainer.appendChild(newText);
});

// Make initial draggable elements draggable
document.querySelectorAll(".draggable").forEach(makeDraggable);

// Function to make an element draggable
function makeDraggable(el) {
  let offsetX = 0, offsetY = 0, isDragging = false;

  el.addEventListener("mousedown", (e) => {
    isDragging = true;
    // For RTL, use clientX and clientY normally
    offsetX = e.clientX - el.getBoundingClientRect().left;
    offsetY = e.clientY - el.getBoundingClientRect().top;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      el.style.position = "absolute";
      el.style.right = (window.innerWidth - e.clientX - offsetX) + "px";
      el.style.top = (e.clientY - offsetY) + "px";
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.userSelect = "";
  });
}
