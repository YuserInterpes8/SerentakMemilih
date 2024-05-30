fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    const toggleSidebarButton = document.getElementById("toggleSidebar");
    const sidebar = document.getElementById("sidebar");
    const body = document.querySelector("body");

    toggleSidebarButton.addEventListener("click", () => {
      sidebar.classList.toggle("show");
    });

    body.addEventListener("click", (event) => {
      if (
        !sidebar.contains(event.target) &&
        !toggleSidebarButton.contains(event.target)
      ) {
        sidebar.classList.remove("show");
      }
    });

    // Highlight the current page link
    const navItems = document.querySelectorAll(".nav-item a");
    const currentPage = window.location.pathname.split("/").pop();

    navItems.forEach((item) => {
      if (item.getAttribute("href") === currentPage) {
        item.classList.add("active");
      }
    });
  });

// Load footer
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

fetch("chatadmin.html");
const chatMessages = document.querySelector(".chat-messages");
const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
  const messageText = chatInput.value.trim();
  if (messageText !== "") {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", "sent");
    messageElement.innerHTML = `
                <div class="message-avatar"></div>
                <div class="message-content">
                    <div class="message-username">Kamu</div>
                    <p>${messageText}</p>
                </div>`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatInput.value = "";
  }
});

chatInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendButton.click();
  }
});

// Toggle image on click
document.addEventListener('DOMContentLoaded', () => {
    const ttsImage = document.getElementById('ttsImage');
    const ttsImageLink = document.getElementById('ttsImageLink');
    const ttsRed = '../assets/tts_red.png';
    const ttsGreen = '../assets/tts_green.png';

    ttsImageLink.addEventListener('click', (event) => {
        event.preventDefault();
        if (ttsImage.src.includes('tts_red.png')) {
            ttsImage.src = ttsGreen;
        } else {
            ttsImage.src = ttsRed;
        }
    });
});