const fileStorage = require('../utils/fileStorage');
const aiService = require('./aiService');

exports.upload = async (req) => {
  try {
    const file = req.file; // Assuming file is uploaded via middleware
    const filePath = await fileStorage.save(file);
    return { status: 200, data: { message: 'File uploaded successfully', filePath } };
  } catch (error) {
    console.error('Upload service error:', error);
    return { status: 500, data: { message: 'Error uploading file' } };
  }
};

exports.process = async (data) => {
  try {
    const result = await aiService.transcribeAudio(data.filePath); // Pass the file path to the transcription function
    return { status: 200, data: result };
  } catch (error) {
    console.error('Process service error:', error);
    return { status: 500, data: { message: 'Error processing voice note' } };
  }
};

exports.search = async (query) => {
  try {
    const results = await aiService.search(query);
    return { status: 200, data: results };
  } catch (error) {
    console.error('Search service error:', error);
    return { status: 500, data: { message: 'Error searching voice notes' } };
  }
};

exports.setReminder = async (data) => {
  try {
    // Implement reminder logic here
    return { status: 200, data: { message: 'Reminder set successfully' } };
  } catch (error) {
    console.error('Set reminder service error:', error);
    return { status: 500, data: { message: 'Error setting reminder' } };
  }
}; 