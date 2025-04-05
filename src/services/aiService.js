const openai = require('openai');
const fs = require('fs');
require('dotenv').config();

/**
 * Transcribe an audio file using OpenAI's API.
 *
 * @param {string} filename - The name of the audio file to transcribe.
 * @returns {Promise<Object>} - A promise that resolves with the transcription result.
 */
async function transcribeAudio(filename) {
    try {
        // Initialize the OpenAI client with the given API key.
        const openAiClient = new openai.OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        
        // Send the audio file for transcription using the specified model.
        const transcription = await openAiClient.audio.transcriptions.create({
            file: fs.createReadStream(filename),
            model: 'whisper-1'
        });
        
        // Return the transcription result.
        return transcription;
    } catch (error) {
        // Log any errors that occur during transcription.
        console.error('Error during transcription:', error);
        throw new Error('Transcription failed');
    }
}

module.exports = {
    transcribeAudio,
}; 