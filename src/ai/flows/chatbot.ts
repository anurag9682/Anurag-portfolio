'use server';
/**
 * @fileOverview A chatbot AI agent for Anurag Dubey's portfolio.
 *
 * - chat - A function that handles the chatbot conversation.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatInputSchema = z.object({
  query: z.string().describe('The user\'s query to the chatbot.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string().describe('The chatbot\'s response.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const chatPrompt = ai.definePrompt({
  name: 'chatPrompt',
  input: {schema: ChatInputSchema},
  output: {schema: ChatOutputSchema},
  prompt: `You are a friendly and helpful chatbot on Anurag Dubey's personal portfolio website. Your goal is to answer questions about Anurag's skills and projects.

  Keep your answers concise and informative.

  Here is the information about Anurag's skills and projects:

  **Skills:**
  - **Frontend:** React.js, HTML, CSS, Tailwind, JavaScript
  - **Backend:** Node.js, Express.js
  - **Database:** MongoDB, SQL
  - **Languages:** Python, C++
  - **Tools & Platforms:** GitHub, Firebase, VS Code

  **Projects:**
  1.  **Medical History Vault with QR Code:** A secure healthcare web app that allows patients to manage medical records and share them with doctors via a unique, encrypted QR code. Features role-based access and AES encryption for data security. Tech: React.js, Node.js, MongoDB, Express.js, Tailwind CSS, JWT, AES, Cloudinary.
  2.  **Mock Mentor:** AI-powered mock interview web app that provides real-time feedback and analysis. Tech: React.js, JSX, Node.js, Tailwind CSS, Google API.
  3.  **Uber Clone:** Uber Clone app using the MERN stack, with fully functional user authentication, ride request flow, real-time updates, and responsive UI design. Tech: React.js, Node.js, MongoDB, Express.js, Socket.io.
  4.  **Responsive Coffee Shop Landing Page:** Responsive and visually appealing landing page for a coffee shop. Tech: HTML, CSS, JavaScript.

  Now, please answer the following user query:
  {{{query}}}
  `,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async input => {
    const {output} = await chatPrompt(input);
    return output!;
  }
);
