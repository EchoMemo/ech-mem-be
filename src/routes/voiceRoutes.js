const express = require('express');
const voiceController = require('../controllers/voiceController');

const router = express.Router();

router.post('/upload', voiceController.uploadVoiceNote);
router.post('/process', voiceController.processVoiceNote);
router.get('/search', voiceController.searchVoiceNotes);
router.post('/reminder/set', voiceController.setReminder);

module.exports = router; 