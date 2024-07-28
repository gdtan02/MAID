require('dotenv').config();

const URL = `http://localhost:${process.env.PORT}`  // replace with actual server URL

function test() {
  // Test purpose only
  
}

function test2() {
    // Test local push
}

function testLocal() {
    // Test local push versioning
    // Dev branch
    
} 

function writeCaptions(message, attachments) {
  const fullUrl = `${URL}/generate-caption`;

  const options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify({
      message: message,
      attachments: attachments
    })
  };

  try {
    const response = UrlFetchApp.fetch(fullUrl, options);
    const result = JSON.parse(response.getContentText());
    return result.caption;
  } catch (error) {
    console.error("Error in writeCaptions: ", error);
    return 'Failed to generate captions. Please try again.'
  }
}


writeCaptions('Generate a caption for my upcoming event.');