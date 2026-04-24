import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const suggestions = [
  "What can I ask you to do?",
  "Which one of my projects is performing the best?",
  "What projects should I be concerned about right now?",
];

export default function ChatWithIshtiaq() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: Message = { id: Date.now(), role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system:
            "You are Istiaq Ahmmed Fahad, a skilled software developer and designer. Answer questions about your skills, projects, and experience in a friendly, professional tone. Keep answers concise.",
          messages: [
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: trimmed },
          ],
        }),
      });

      const data = await response.json();
      const reply =
        data?.content?.find((b: { type: string }) => b.type === "text")?.text ||
        "Sorry, I couldn't process that.";

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "assistant", content: reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage(input);
  };

  const isEmpty = messages.length === 0;

  return (
    <section
      id="chat"
      className="flex flex-col items-center justify-start px-4 py-10"
    >
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2e3460;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #5b21b6;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #2e3460 transparent;
        }
      `}</style>
      {/* Page Title */}
      <h1 className="text-white text-4xl font-bold mb-8 tracking-tight">
        Chat With Ishtiaq
      </h1>

      {/* Chat Container */}
      <div className="w-full max-w-4xl h-150 bg-[#10142e] border border-[#1e2451] rounded-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-4 px-6 py-4 border-b border-[#1e2451]">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-[#1e2451] shrink-0">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ishtiaq&backgroundColor=b6e3f4&clothingColor=3c4f5c"
              alt="Istiaq Ahmmed Fahad"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white font-medium text-base">
            Istiaq Ahmmed Fahad
          </span>
        </div>

        {/* Messages Area */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto custom-scrollbar px-6 py-6 flex flex-col gap-4 relative"
        >
          {/* Purple glow background */}
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-75 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at center, #5b21b6 0%, transparent 70%)",
            }}
          />

          {isEmpty ? (
            /* Empty state */
            <div className="flex-1 flex flex-col items-center justify-center gap-4 py-16 relative z-10">
              <Sparkles size={40} className="text-white opacity-90" />
              <p className="text-white text-xl font-light">Ask your Qustion</p>
            </div>
          ) : (
            /* Message bubbles */
            <div className="flex flex-col gap-4 relative z-10">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#5b21b6] text-white rounded-br-sm"
                        : "bg-[#1e2451] text-[#c8cee8] rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[#1e2451] text-[#c8cee8] px-4 py-3 rounded-2xl rounded-bl-sm text-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-[#7c3aed] rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 bg-[#7c3aed] rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-[#7c3aed] rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Suggestions + Input */}
        <div className="px-6 pb-6 flex flex-col gap-4">
          {/* Suggestions */}
          {isEmpty && (
            <div className="flex flex-col gap-2">
              <p className="text-[#8b8bb0] text-xs font-semibold">
                Suggestions on what to ask Our AI
              </p>
              <div className="flex flex-wrap gap-3">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="flex-1 min-w-40 text-left px-4 py-3 bg-transparent border border-[#2e3460] rounded-xl text-[#c8cee8] text-sm hover:border-[#5b21b6] hover:text-white transition-all duration-200"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input bar */}
          <div className="flex items-center gap-3 bg-[#13163a] border border-[#2e3460] rounded-2xl px-5 py-3 focus-within:border-[#5b21b6] transition-colors duration-200">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about your projects"
              className="flex-1 bg-transparent text-[#c8cee8] placeholder-[#4a5080] text-sm outline-none"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || loading}
              className="text-white disabled:opacity-40 hover:text-[#a78bfa] transition-colors duration-200"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
