
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;
  private model: string = 'gemini-3-flash-preview';

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async askAssistant(prompt: string, context?: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: this.model,
        contents: `Context about this website: ${context || 'A modern tech homepage'}. \n\nUser Question: ${prompt}`,
        config: {
          systemInstruction: "You are a helpful, professional AI assistant for a cutting-edge software development agency website. Keep answers concise and friendly.",
          temperature: 0.7,
        }
      });
      return response.text || "I'm sorry, I couldn't process that.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "There was an error communicating with the AI. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();
