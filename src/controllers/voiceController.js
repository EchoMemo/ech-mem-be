const voiceService = require('../services/voiceService');

exports.uploadVoiceNote = async (req, res) => {
  try {
    const result = await voiceService.upload(req);
    res.status(result.status).json(result.data);
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.processVoiceNote = async (req, res) => {
  try {
    const result = await voiceService.process(req.body);
    res.status(result.status).json(result.data);
  } catch (error) {
    console.error('Process error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.searchVoiceNotes = async (req, res) => {
  try {
    const result = await voiceService.search(req.query);
    res.status(result.status).json(result.data);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.setReminder = async (req, res) => {
  try {
    const result = await voiceService.setReminder(req.body);
    res.status(result.status).json(result.data);
  } catch (error) {
    console.error('Set reminder error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}; 