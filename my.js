function sendMessage(inputId, name){
    const message = document.getElementById(inputId);

    const messageBox = document.createElement("DIV");
        messageBox.classList.add("message");
        messageBox.setAttribute("data-from", inputId);
        const sender = document.createElement("DIV");
            sender.innerHTML = name;
    messageBox.appendChild(sender);

        const messageNode = document.createElement("DIV");
            messageNode.innerHTML = message.value;
    messageBox.appendChild(messageNode);

    document.getElementById("messages").appendChild(messageBox);

    message.value = "";
}

function sendBack(){
    const messagesContainer = document.getElementById("messages");
    const messages = messagesContainer.getElementsByClassName("message");

    for(let mId = 0; mId < messages.length; mId++){
        const message = messages[mId];

            const senderId = message.getAttribute("data-from");
            const messageText = message.getElementsByTagName("DIV")[1].innerHTML;

            const messageInput = document.getElementById(senderId);
                messageInput.value = messageInput.value + "\n" + messageText;
    }

    messagesContainer.innerHTML = "";
}