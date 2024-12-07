import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import './SearchBar.css';


interface GeminiResponse {
  response: {
    text: string;
  };
}

const ChatBox: React.FC = () => {
  const word = "give me the 50 words of content with for";
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const financeKeywords = [
    "price", "crypto", "cryptocurrency", "bitcoin", "ethereum", "altcoins", "blockchain", "wallet",
    "investment", "stocks", "mutual funds", "bonds", "etf", "dividends", "portfolio", "roi",
    "capital gains", "risk", "loan", "personal loan", "home loan", "car loan", "student loan",
    "mortgage", "refinancing", "emi", "installment", "credit", "credit card", "debt", "interest",
    "apr", "default", "tax", "income tax", "gst", "vat", "deductions", "refund", "filing",
    "bracket", "taxable income", "budget", "expenses", "income", "savings", "financial planning",
    "spending", "emergency fund", "cash flow", "insurance", "life insurance", "health insurance",
    "car insurance", "premium", "claim", "coverage", "policy", "term insurance", "liability",
    "trading", "stock market", "forex", "commodity", "futures", "options", "ipo", "market trends",
    "wealth", "net worth", "assets", "liabilities", "estate planning", "trust fund", "advisor",
    "inflation", "exchange rate", "currency conversion", "loan calculator", "tax calculator",
    "retirement", "pension", "annuity", "subsidy", "social security", "nasdaq", "dow jones",
    "s&p 500", "money"
  ];

  const genAI = new GoogleGenerativeAI("AIzaSyDeQ2QYCW9bu32DX9nmuNrctgKC2oTyZW8");

  const isFinanceQuery = (query: string): boolean => {
    return financeKeywords.some((keyword) => query.toLowerCase().includes(keyword));
  };

  const handleSendPrompt = async () => {
    if (!prompt.trim()) return;

    if (!isFinanceQuery(prompt)) {
      setResponse("I can only assist with finance-related questions. Please try again!");
      return;
    }

    setIsLoading(true);

    try {

      const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const result = await model.generateContent([word+" "+prompt]);

      setResponse(result.response.text);
    } catch (error) {
      console.error("Error communicating with Gemini AI:", error);
      setResponse("Failed to get a response from AI");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbox-container">
      <textarea
        className="chatbox-input"
        rows={4}
        placeholder="Ask your question to FinED AI..."
        value={prompt}
        onChange={(e) => setPrompt(  e.target.value)}
      />
      <button className="send-button" onClick={handleSendPrompt} disabled={isLoading}>
        {isLoading ? "Loading..." : "Send"}
      </button>

      {response && (
        <div>
          {isLoading ? (
            <p className="response-loading">Generating response...</p>
          ) : (
            <pre className="chatbox-response">{response}</pre>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBox;
