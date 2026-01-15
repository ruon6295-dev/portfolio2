
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;
  private model: string = 'gemini-3-flash-preview';

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async askAssistant(prompt: string, context?: string): Promise<string> {
    try {
      // Re-initialize for each call to ensure dynamic API key availability as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: this.model,
        contents: [{ 
          parts: [{ 
            text: `Context: ${context || 'A modern Vite-like landing page called ViteNext'}. \nUser: ${prompt}` 
          }] 
        }],
        config: {
          systemInstruction: "You are a helpful and technical assistant for ViteNext. You are concise, enthusiastic, and provide helpful advice on Vite, React, and AI integration.",
          temperature: 0.8,
        }
      });
      
      return response.text || "I'm sorry, I couldn't generate a response.";
    } catch (error) {
      console.error("Gemini Assistant Error:", error);
      return "I'm having trouble connecting to my brain right now. Please try again in a moment.";
    }
  }
}

export const geminiService = new GeminiService();
