function sendMessage() {
  const chat = document.getElementById("chat");
  const input = document.getElementById("userInput");

  if (!input.value.trim()) return;

  const userText = input.value.toLowerCase();

  // Show user message
  chat.innerHTML += `<p class="user"><b>You:</b> ${input.value}</p>`;

  let reply = "";

  // SMARTER CONDITIONS
  if (
    userText.includes("skill") ||
    userText.includes("abilities") ||
    userText.includes("strength")
  ) {
    reply = "Include technical skills, soft skills, and tools relevant to the job role.";
  } 
  else if (
    userText.includes("experience") ||
    userText.includes("work") ||
    userText.includes("job")
  ) {
    reply = "Describe your work experience with achievements and measurable results.";
  } 
  else if (
    userText.includes("project") ||
    userText.includes("portfolio")
  ) {
    reply = "Projects show real-world skills. Mention technologies used and outcomes.";
  } 
  else if (
    userText.includes("resume") ||
    userText.includes("cv")
  ) {
    reply = "Keep your resume clean, concise, and tailored to the job description.";
  } 
  else if (
    userText.includes("interview") ||
    userText.includes("hr")
  ) {
    reply = "Prepare using the STAR method and practice common interview questions.";
  } 
  else {
    reply = "I can help with resumes, skills, projects, and interview preparation.";
  }

  // AI typing effect
  const botMsg = document.createElement("p");
  botMsg.className = "bot";
  botMsg.innerHTML = "<b>AI:</b> ";
  chat.appendChild(botMsg);

  let i = 0;
  const typing = setInterval(() => {
    if (i < reply.length) {
      botMsg.innerHTML += reply.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, 35);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
