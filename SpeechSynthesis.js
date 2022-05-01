const sdk = require("microsoft-cognitiveservices-speech-sdk");
function textToSpeechApi(text, voice, speed, pitch) {

  return new Promise((resolve, reject) => {

    "use strict";

    var sdk = require("microsoft-cognitiveservices-speech-sdk");

    var key = process.env.API_KEY;
    var region = process.env.API_REGION;
    var audioFile = "AudioFile.wav";

    const speechConfig = sdk.SpeechConfig.fromSubscription(key, region);
    const audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFile);

    // The language of the voice that speaks.
    speechConfig.speechSynthesisVoiceName = voice; 

    // Create the speech synthesizer.
    var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);    

    let ssmlXml = `<speak xmlns="http://www.w3.org/2001/10/synthesis" 
    xmlns:mstts="http://www.w3.org/2001/mstts" xmlns:emo="http://www.w3.org/2009/10/emotionml" 
    version="1.0" xml:lang="en-US"><voice name="${voice}"><prosody rate="${speed}%" 
    pitch="${pitch}%">${text}</prosody></voice></speak>`

    // Start the synthesizer and wait for a result.
    synthesizer.speakSsmlAsync(ssmlXml,
        function (result) {
      if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
        //console.log("synthesis finished.");
        resolve(result);
      } else {
        //console.error("Speech synthesis canceled, " + result.errorDetails +
        //    "\nDid you set the speech resource key and region values?");
        reject(result.errorDetails);
      }
      synthesizer.close();
      synthesizer = null;
    },
        function (err) {
      console.trace("err - " + err);
      synthesizer.close();
      synthesizer = null;
    });
    //console.log("Now synthesizing to: " + audioFile);

  })
};

module.exports = { textToSpeechApi };