import { useState, useRef } from "react";
import "../styles/assistant.css";

export default function Assistant({ onAction }) {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [open, setOpen] = useState(false);
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);

  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice input not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognition.onend = () => setListening(false);

    recognitionRef.current = recognition;
    recognition.start();
  };

  const handleAsk = () => {
    if (!input) return;

    const text = input.toLowerCase();

    let action = null;
    let message = "Sorry, I didn’t understand that.";

    const priceMatch = text.match(/(\d+)\s*lakh/);
    const maxPrice = priceMatch ? parseInt(priceMatch[1]) * 100000 : null;

    const types = ["suv", "sedan", "hatchback", "electric", "sports"];
    const foundType = types.find((t) => text.includes(t));

    const brands = [
      "nova",
      "tata",
      "hyundai",
      "mahindra",
      "kia",
      "toyota",
      "honda",
    ];
    const foundBrand = brands.find((b) => text.includes(b));

    let sort = null;

    if (
      text.includes("low to high") ||
      text.includes("cheapest") ||
      text.includes("low budget")
    ) {
      sort = "LOW_HIGH";
    }

    if (
      text.includes("high to low") ||
      text.includes("expensive") ||
      text.includes("highest")
    ) {
      sort = "HIGH_LOW";
    }

    if (foundType || foundBrand || maxPrice || sort) {
      action = {
        type: "SMART_FILTER",
        payload: { type: foundType, brand: foundBrand, maxPrice, sort },
      };
      message = "Showing cars based on your preference.";
    } else if (text.includes("compare")) {
      action = { type: "COMPARE" };
      message = "Showing comparison.";
    } else if (text.includes("book")) {
      action = {
        type: "BOOK",
        payload: {
          model: "Nova X",
          city: "Kochi",
          date: "2026-04-20",
        },
      };
      message = "Booking form opened.";
    } else if (text.includes("family")) {
      action = { type: "RECOMMEND" };
      message = "Best family car shown.";
    } else if (
      text.includes("all") ||
      text.includes("reset") ||
      text.includes("show all")
    ) {
      action = { type: "RESET" };
      message = "Reset done.";
    }

    setChat((prev) => [
      ...prev,
      { role: "user", text: input },
      { role: "ai", text: message },
    ]);

    onAction(action);
    setInput("");
  };

  return (
    <>
      {!open && (
        <div className="ai-toggle" onClick={() => setOpen(true)}>
          🤖
        </div>
      )}

      {open && (
        <div className="assistant-box">
          <div className="assistant-header">
            <span>AI Assistant</span>
            <span className="close-btn" onClick={() => setOpen(false)}>
              ✖
            </span>
          </div>

          <div className="chat">
            {chat.map((c, i) => (
              <div key={i} className={`message ${c.role}`}>
                {c.text}
              </div>
            ))}
          </div>

          <div className="assistant-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask: SUV under 20 lakh"
            />

            <button
              onClick={startVoice}
              style={{ background: listening ? "#ff4d4d" : "#00d2ff" }}
            >
              🎤
            </button>

            <button onClick={handleAsk}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
