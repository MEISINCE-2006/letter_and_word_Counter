const inputText = document.getElementById("inputText");
const wordCount = document.getElementById("wordCount");
const letterCount = document.getElementById("letterCount");
inputText.addEventListener("input", () => {
  const text = inputText.value;
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  const letters = text.replace(/\s/g, '');
  wordCount.textContent = words.length;
  letterCount.textContent = letters.length;
});
