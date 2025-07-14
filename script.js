function sendMessage() {
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = userInput.value.trim();
  if (!userText) return;  
   chatBox.innerHTML += `<div><strong>You:</strong> ${userText}</div>`;

