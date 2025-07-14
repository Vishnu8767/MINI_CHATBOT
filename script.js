function sendMessage() {
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = userInput.value.trim();
  if (!userText) return;  
   chatBox.innerHTML += `<div><strong>You:</strong> ${userText}</div>`;
let botResponse = getBotResponse(userText.toLowerCase());
  chatBox.innerHTML += `<div><strong>Bot:</strong> ${botResponse}</div>`;
   chatBox.scrollTop = chatBox.scrollHeight;
  userInput.value = "";
}
 
