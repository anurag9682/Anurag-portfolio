'use server';
/**
 * @fileOverview Animates keywords in the hero section using AI.
 *
 * - animateKeywords - A function that handles the animation of keywords.
 * - AnimateKeywordsInput - The input type for the animateKeywords function.
 * - AnimateKeywordsOutput - The return type for the animateKeywords function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnimateKeywordsInputSchema = z.object({
  keywords: z
    .string()
    .describe('A comma-separated list of keywords to animate.'),
});
export type AnimateKeywordsInput = z.infer<typeof AnimateKeywordsInputSchema>;

const AnimateKeywordsOutputSchema = z.object({
  animatedKeywords: z
    .array(z.string())
    .describe('An array of animated keywords.'),
});
export type AnimateKeywordsOutput = z.infer<typeof AnimateKeywordsOutputSchema>;

export async function animateKeywords(input: AnimateKeywordsInput): Promise<AnimateKeywordsOutput> {
  return animateKeywordsFlow(input);
}

const animateKeywordsPrompt = ai.definePrompt({
  name: 'animateKeywordsPrompt',
  input: {schema: AnimateKeywordsInputSchema},
  output: {schema: AnimateKeywordsOutputSchema},
  prompt: `You are an expert in creating engaging and visually appealing animated keywords for a website hero section.

  Given a comma-separated list of keywords, your task is to generate an array of those keywords suitable for animated display.

  Keywords: {{{keywords}}}

  Ensure the output is an array of strings.
  Do not add any other information.`, 
});

const animateKeywordsFlow = ai.defineFlow(
  {
    name: 'animateKeywordsFlow',
    inputSchema: AnimateKeywordsInputSchema,
    outputSchema: AnimateKeywordsOutputSchema,
  },
  async input => {
    const {output} = await animateKeywordsPrompt(input);
    return output!;
  }
);
