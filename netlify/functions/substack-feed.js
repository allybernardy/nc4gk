exports.handler = async (event, context) => {
  try {
    const response = await fetch('https://nc4gk.substack.com/feed');
    const text = await response.text();
    
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/xml' },
      body: text
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
