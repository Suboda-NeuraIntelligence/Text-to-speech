const textToSpeech = require("@google-cloud/text-to-speech");
const client = new textToSpeech.TextToSpeechClient();

// firebase
const { storage, db } = require("../services/firebase");
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");

const convertTextToSpeech = async (req, res) => {
  const { text, contentId, paragraphId } = req.body;

  const request = {
    input: { text: text },
    voice: {
      languageCode: "en-US",
      name: "en-US-Neural2-J",
    },
    audioConfig: { audioEncoding: "MP3" },
  };

  const [response] = await client.synthesizeSpeech(request);

  if (response) {
    const audioRef = ref(storage, `audios/${contentId}/${paragraphId}`);
    await uploadBytes(audioRef, response.audioContent)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          res.status(200).json({ success: true, url: url });
        });
      })
      .catch((err) => {
        console.error(err);

        res.json({ success: true, data: response });
      });
  } else {
    res.json({ success: false, data: response });
  }
};

module.exports = { convertTextToSpeech };
