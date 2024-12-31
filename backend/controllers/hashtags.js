const generateHashtags = (req, res) => {
    const { text } = req.body;
  
    if (!text) {
      return res.status(400).json({ message: 'Text input is required' });
    }
  
    // Simple hashtag generation logic
    const words = text.split(' ');
    const hashtags = words.map((word) => `#${word.toLowerCase()}`);
  
    res.status(200).json({ hashtags });
  };
  
  module.exports = { generateHashtags };
  