# ITIS-6177-Final-Project

Microsoft Azure Text to Speech is a Speech service feature that converts text to lifelike speech.<br>

[Swagger Playground](http://137.184.211.204:3000/docs)

## Table of Contents
* [Requirements](#requirements)
* [Setup](#setup)
* [Installation](#installation)
* [Usage](#usage)
* [API Reference](#api-reference)
---
## Requirements
* [Node.js](https://nodejs.org/en/download/)
* [Postman](https://www.postman.com/downloads/)
---
## Setup
* Create a free [Azure](https://azure.microsoft.com/free/cognitive-services) account.
* Create a [Speech Resource](https://ms.portal.azure.com/#create/Microsoft.CognitiveServicesSpeechServices) to get a subscription key and endpoint.
* After your Speech resource is deployed, select Go to resource to view and manage keys.

---
## Installation
Clone the repository
```
$ git clone https://github.com/aniketvarade/ITIS-6177-Final-Project.git
$ cd ITIS-6177-Final-Project
```

Create a .env file in the project directory and add the following contents:
```
API_KEY=<YOUR_API_KEY>
VOICE_LIST_API_ENDPOINT=https://<YOUR_API_REGION>.tts.speech.microsoft.com/cognitiveservices/voices/list
API_REGION=<YOUR_API_REGION>
```

Install dependencies
```
npm install
```

Start the application
```
node app.js
```

The application can be accessed at http://localhost:3000/

---
## Usage
The API has two endpoints and can be tested using Postman or [Swagger](http://localhost:3000/docs):
* GET localhost:3000/voices
* POST localhost:3000/texttospeech

### GET API
The GET API returns the list of voices that can be used to convert the text to speech.
It returns a JSON with the list of voices.

**Response**
```
[
    "af-ZA-AdriNeural",
    "af-ZA-WillemNeural",
    "am-ET-AmehaNeural",
    "am-ET-MekdesNeural",
    "ar-AE-FatimaNeural",
    "ar-AE-HamdanNeural",
    "ar-BH-AliNeural",
    .
    .
]
```


The following table lists the prebuilt neural voices supported in each language.
|Language|Gender|Voice name|
|:----|:----|:----|
|Afrikaans (South Africa)|Female|af-ZA-AdriNeural|
|Afrikaans (South Africa)|Male|af-ZA-WillemNeural|
|Amharic (Ethiopia)|Female|am-ET-MekdesNeural|
|Amharic (Ethiopia)|Male|am-ET-AmehaNeural|
|Arabic (Algeria)|Female|ar-DZ-AminaNeural|
|Arabic (Algeria)|Male|ar-DZ-IsmaelNeural|
|Arabic (Bahrain)|Female|ar-BH-LailaNeural|
|Arabic (Bahrain)|Male|ar-BH-AliNeural|
|Arabic (Egypt)|Female|ar-EG-SalmaNeural|
|Arabic (Egypt)|Male|ar-EG-ShakirNeural|
|Arabic (Iraq)|Female|ar-IQ-RanaNeural|
|Arabic (Iraq)|Male|ar-IQ-BasselNeural|
|Arabic (Jordan)|Female|ar-JO-SanaNeural|
|Arabic (Jordan)|Male|ar-JO-TaimNeural|
|Arabic (Kuwait)|Female|ar-KW-NouraNeural|
|Arabic (Kuwait)|Male|ar-KW-FahedNeural|
|Arabic (Libya)|Female|ar-LY-ImanNeural|
|Arabic (Libya)|Male|ar-LY-OmarNeural|
|Arabic (Morocco)|Female|ar-MA-MounaNeural|
|Arabic (Morocco)|Male|ar-MA-JamalNeural|
|Arabic (Qatar)|Female|ar-QA-AmalNeural|
|Arabic (Qatar)|Male|ar-QA-MoazNeural|
|Arabic (Saudi Arabia)|Female|ar-SA-ZariyahNeural|
|Arabic (Saudi Arabia)|Male|ar-SA-HamedNeural|
|Arabic (Syria)|Female|ar-SY-AmanyNeural|
|Arabic (Syria)|Male|ar-SY-LaithNeural|
|Arabic (Tunisia)|Female|ar-TN-ReemNeural|
|Arabic (Tunisia)|Male|ar-TN-HediNeural|
|Arabic (United Arab Emirates)|Female|ar-AE-FatimaNeural|
|Arabic (United Arab Emirates)|Male|ar-AE-HamdanNeural|
|Arabic (Yemen)|Female|ar-YE-MaryamNeural|
|Arabic (Yemen)|Male|ar-YE-SalehNeural|
|Bangla (Bangladesh)|Female|bn-BD-NabanitaNeural|
|Bangla (Bangladesh)|Male|bn-BD-PradeepNeural|
|Bengali (India)|Female|bn-IN-TanishaaNeural|
|Bengali (India)|Male|bn-IN-BashkarNeural|
|Bulgarian (Bulgaria)|Female|bg-BG-KalinaNeural|
|Bulgarian (Bulgaria)|Male|bg-BG-BorislavNeural|
|Burmese (Myanmar)|Female|my-MM-NilarNeural|
|Burmese (Myanmar)|Male|my-MM-ThihaNeural|
|Catalan (Spain)|Female|ca-ES-AlbaNeural|
|Catalan (Spain)|Female|ca-ES-JoanaNeural|
|Catalan (Spain)|Male|ca-ES-EnricNeural|
|Chinese (Cantonese, Traditional)|Female|zh-HK-HiuGaaiNeural|
|Chinese (Cantonese, Traditional)|Female|zh-HK-HiuMaanNeural|
|Chinese (Cantonese, Traditional)|Male|zh-HK-WanLungNeural|
|Chinese (Mandarin, Simplified)|Female|zh-CN-XiaochenNeural|
|Chinese (Mandarin, Simplified)|Female|zh-CN-XiaohanNeural|
|Chinese (Mandarin, Simplified)|Female|zh-CN-XiaomoNeural|
|Chinese (Mandarin, Simplified)|Female|zh-CN-XiaoqiuNeural|
|Chinese (Mandarin, Simplified)|Female|zh-CN-XiaoruiNeural|
|Chinese (Mandarin, Simplified)|Female|zh-CN-XiaoshuangNeural|
|Chinese (Mandarin, Simplified)|Female|zh-CN-XiaoxiaoNeural|
|Chinese (Mandarin, Simplified)|Female|zh-CN-XiaoxuanNeural|
|Chinese (Mandarin, Simplified)|Female|zh-CN-XiaoyanNeural|
|Chinese (Mandarin, Simplified)|Female|zh-CN-XiaoyouNeural|
|Chinese (Mandarin, Simplified)|Male|zh-CN-YunxiNeural|
|Chinese (Mandarin, Simplified)|Male|zh-CN-YunyangNeural|
|Chinese (Mandarin, Simplified)|Male|zh-CN-YunyeNeural|
|Chinese (Taiwanese Mandarin)|Female|zh-TW-HsiaoChenNeural|
|Chinese (Taiwanese Mandarin)|Female|zh-TW-HsiaoYuNeural|
|Chinese (Taiwanese Mandarin)|Male|zh-TW-YunJheNeural|
|Croatian (Croatia)|Female|hr-HR-GabrijelaNeural|
|Croatian (Croatia)|Male|hr-HR-SreckoNeural|
|Czech (Czech)|Female|cs-CZ-VlastaNeural|
|Czech (Czech)|Male|cs-CZ-AntoninNeural|
|Danish (Denmark)|Female|da-DK-ChristelNeural|
|Danish (Denmark)|Male|da-DK-JeppeNeural|
|Dutch (Belgium)|Female|nl-BE-DenaNeural|
|Dutch (Belgium)|Male|nl-BE-ArnaudNeural|
|Dutch (Netherlands)|Female|nl-NL-ColetteNeural|
|Dutch (Netherlands)|Female|nl-NL-FennaNeural|
|Dutch (Netherlands)|Male|nl-NL-MaartenNeural|
|English (Australia)|Female|en-AU-NatashaNeural|
|English (Australia)|Male|en-AU-WilliamNeural|
|English (Canada)|Female|en-CA-ClaraNeural|
|English (Canada)|Male|en-CA-LiamNeural|
|English (Hongkong)|Female|en-HK-YanNeural|
|English (Hongkong)|Male|en-HK-SamNeural|
|English (India)|Female|en-IN-NeerjaNeural|
|English (India)|Male|en-IN-PrabhatNeural|
|English (Ireland)|Female|en-IE-EmilyNeural|
|English (Ireland)|Male|en-IE-ConnorNeural|
|English (Kenya)|Female|en-KE-AsiliaNeural|
|English (Kenya)|Male|en-KE-ChilembaNeural|
|English (New Zealand)|Female|en-NZ-MollyNeural|
|English (New Zealand)|Male|en-NZ-MitchellNeural|
|English (Nigeria)|Female|en-NG-EzinneNeural|
|English (Nigeria)|Male|en-NG-AbeoNeural|
|English (Philippines)|Female|en-PH-RosaNeural|
|English (Philippines)|Male|en-PH-JamesNeural|
|English (Singapore)|Female|en-SG-LunaNeural|
|English (Singapore)|Male|en-SG-WayneNeural|
|English (South Africa)|Female|en-ZA-LeahNeural|
|English (South Africa)|Male|en-ZA-LukeNeural|
|English (Tanzania)|Female|en-TZ-ImaniNeural|
|English (Tanzania)|Male|en-TZ-ElimuNeural|
|English (United Kingdom)|Female|en-GB-LibbyNeural|
|English (United Kingdom)|Female|en-GB-MiaNeural|
|English (United Kingdom)|Female|en-GB-SoniaNeural|
|English (United Kingdom)|Male|en-GB-RyanNeural|
|English (United States)|Female|en-US-AmberNeural|
|English (United States)|Female|en-US-AriaNeural|
|English (United States)|Female|en-US-AshleyNeural|
|English (United States)|Female|en-US-CoraNeural|
|English (United States)|Female|en-US-ElizabethNeural|
|English (United States)|Female|en-US-JennyNeural|
|English (United States)|Female|en-US-JennyMultilingualNeural|
|English (United States)|Female|en-US-MichelleNeural|
|English (United States)|Female|en-US-MonicaNeural|
|English (United States)|Female|en-US-SaraNeural|
|English (United States)|Kid|en-US-AnaNeural|
|English (United States)|Male|en-US-BrandonNeural|
|English (United States)|Male|en-US-ChristopherNeural|
|English (United States)|Male|en-US-EricNeural|
|English (United States)|Male|en-US-GuyNeural|
|English (United States)|Male|en-US-JacobNeural|
|Estonian (Estonia)|Female|et-EE-AnuNeural|
|Estonian (Estonia)|Male|et-EE-KertNeural|
|Filipino (Philippines)|Female|fil-PH-BlessicaNeural|
|Filipino (Philippines)|Male|fil-PH-AngeloNeural|
|Finnish (Finland)|Female|fi-FI-NooraNeural|
|Finnish (Finland)|Female|fi-FI-SelmaNeural|
|Finnish (Finland)|Male|fi-FI-HarriNeural|
|French (Belgium)|Female|fr-BE-CharlineNeural|
|French (Belgium)|Male|fr-BE-GerardNeural|
|French (Canada)|Female|fr-CA-SylvieNeural|
|French (Canada)|Male|fr-CA-AntoineNeural|
|French (Canada)|Male|fr-CA-JeanNeural|
|French (France)|Female|fr-FR-DeniseNeural|
|French (France)|Male|fr-FR-HenriNeural|
|French (Switzerland)|Female|fr-CH-ArianeNeural|
|French (Switzerland)|Male|fr-CH-FabriceNeural|
|Galician (Spain)|Female|gl-ES-SabelaNeural|
|Galician (Spain)|Male|gl-ES-RoiNeural|
|German (Austria)|Female|de-AT-IngridNeural|
|German (Austria)|Male|de-AT-JonasNeural|
|German (Germany)|Female|de-DE-KatjaNeural|
|German (Germany)|Male|de-DE-ConradNeural|
|German (Switzerland)|Female|de-CH-LeniNeural|
|German (Switzerland)|Male|de-CH-JanNeural|
|Greek (Greece)|Female|el-GR-AthinaNeural|
|Greek (Greece)|Male|el-GR-NestorasNeural|
|Gujarati (India)|Female|gu-IN-DhwaniNeural|
|Gujarati (India)|Male|gu-IN-NiranjanNeural|
|Hebrew (Israel)|Female|he-IL-HilaNeural|
|Hebrew (Israel)|Male|he-IL-AvriNeural|
|Hindi (India)|Female|hi-IN-SwaraNeural|
|Hindi (India)|Male|hi-IN-MadhurNeural|
|Hungarian (Hungary)|Female|hu-HU-NoemiNeural|
|Hungarian (Hungary)|Male|hu-HU-TamasNeural|
|Icelandic (Iceland)|Female|is-IS-GudrunNeural|
|Icelandic (Iceland)|Male|is-IS-GunnarNeural|
|Indonesian (Indonesia)|Female|id-ID-GadisNeural|
|Indonesian (Indonesia)|Male|id-ID-ArdiNeural|
|Irish (Ireland)|Female|ga-IE-OrlaNeural|
|Irish (Ireland)|Male|ga-IE-ColmNeural|
|Italian (Italy)|Female|it-IT-ElsaNeural|
|Italian (Italy)|Female|it-IT-IsabellaNeural|
|Italian (Italy)|Male|it-IT-DiegoNeural|
|Japanese (Japan)|Female|ja-JP-NanamiNeural|
|Japanese (Japan)|Male|ja-JP-KeitaNeural|
|Javanese (Indonesia)|Female|jv-ID-SitiNeural|
|Javanese (Indonesia)|Male|jv-ID-DimasNeural|
|Kannada (India)|Female|kn-IN-SapnaNeural|
|Kannada (India)|Male|kn-IN-GaganNeural|
|Kazakh (Kazakhstan)|Female|kk-KZ-AigulNeural|
|Kazakh (Kazakhstan)|Male|kk-KZ-DauletNeural|
|Khmer (Cambodia)|Female|km-KH-SreymomNeural|
|Khmer (Cambodia)|Male|km-KH-PisethNeural|
|Korean (Korea)|Female|ko-KR-SunHiNeural|
|Korean (Korea)|Male|ko-KR-InJoonNeural|
|Lao (Laos)|Female|lo-LA-KeomanyNeural|
|Lao (Laos)|Male|lo-LA-ChanthavongNeural|
|Latvian (Latvia)|Female|lv-LV-EveritaNeural|
|Latvian (Latvia)|Male|lv-LV-NilsNeural|
|Lithuanian (Lithuania)|Female|lt-LT-OnaNeural|
|Lithuanian (Lithuania)|Male|lt-LT-LeonasNeural|
|Macedonian (Republic of North Macedonia)|Female|mk-MK-MarijaNeural|
|Macedonian (Republic of North Macedonia)|Male|mk-MK-AleksandarNeural|
|Malay (Malaysia)|Female|ms-MY-YasminNeural|
|Malay (Malaysia)|Male|ms-MY-OsmanNeural|
|Malayalam (India)|Female|ml-IN-SobhanaNeural|
|Malayalam (India)|Male|ml-IN-MidhunNeural|
|Maltese (Malta)|Female|mt-MT-GraceNeural|
|Maltese (Malta)|Male|mt-MT-JosephNeural|
|Marathi (India)|Female|mr-IN-AarohiNeural|
|Marathi (India)|Male|mr-IN-ManoharNeural|
|Norwegian (Bokmål, Norway)|Female|nb-NO-IselinNeural|
|Norwegian (Bokmål, Norway)|Female|nb-NO-PernilleNeural|
|Norwegian (Bokmål, Norway)|Male|nb-NO-FinnNeural|
|Pashto (Afghanistan)|Female|ps-AF-LatifaNeural|
|Pashto (Afghanistan)|Male|ps-AF-GulNawazNeural|
|Persian (Iran)|Female|fa-IR-DilaraNeural|
|Persian (Iran)|Male|fa-IR-FaridNeural|
|Polish (Poland)|Female|pl-PL-AgnieszkaNeural|
|Polish (Poland)|Female|pl-PL-ZofiaNeural|
|Polish (Poland)|Male|pl-PL-MarekNeural|
|Portuguese (Brazil)|Female|pt-BR-FranciscaNeural|
|Portuguese (Brazil)|Male|pt-BR-AntonioNeural|
|Portuguese (Portugal)|Female|pt-PT-FernandaNeural|
|Portuguese (Portugal)|Female|pt-PT-RaquelNeural|
|Portuguese (Portugal)|Male|pt-PT-DuarteNeural|
|Romanian (Romania)|Female|ro-RO-AlinaNeural|
|Romanian (Romania)|Male|ro-RO-EmilNeural|
|Russian (Russia)|Female|ru-RU-DariyaNeural|
|Russian (Russia)|Female|ru-RU-SvetlanaNeural|
|Russian (Russia)|Male|ru-RU-DmitryNeural|
|Serbian (Serbia, Cyrillic)|Female|sr-RS-SophieNeural|
|Serbian (Serbia, Cyrillic)|Male|sr-RS-NicholasNeural|
|Sinhala (Sri Lanka)|Female|si-LK-ThiliniNeural|
|Sinhala (Sri Lanka)|Male|si-LK-SameeraNeural|
|Slovak (Slovakia)|Female|sk-SK-ViktoriaNeural|
|Slovak (Slovakia)|Male|sk-SK-LukasNeural|
|Slovenian (Slovenia)|Female|sl-SI-PetraNeural|
|Slovenian (Slovenia)|Male|sl-SI-RokNeural|
|Somali (Somalia)|Female|so-SO-UbaxNeural|
|Somali (Somalia)|Male|so-SO-MuuseNeural|
|Spanish (Argentina)|Female|es-AR-ElenaNeural|
|Spanish (Argentina)|Male|es-AR-TomasNeural|
|Spanish (Bolivia)|Female|es-BO-SofiaNeural|
|Spanish (Bolivia)|Male|es-BO-MarceloNeural|
|Spanish (Chile)|Female|es-CL-CatalinaNeural|
|Spanish (Chile)|Male|es-CL-LorenzoNeural|
|Spanish (Colombia)|Female|es-CO-SalomeNeural|
|Spanish (Colombia)|Male|es-CO-GonzaloNeural|
|Spanish (Costa Rica)|Female|es-CR-MariaNeural|
|Spanish (Costa Rica)|Male|es-CR-JuanNeural|
|Spanish (Cuba)|Female|es-CU-BelkysNeural|
|Spanish (Cuba)|Male|es-CU-ManuelNeural|
|Spanish (Dominican Republic)|Female|es-DO-RamonaNeural|
|Spanish (Dominican Republic)|Male|es-DO-EmilioNeural|
|Spanish (Ecuador)|Female|es-EC-AndreaNeural|
|Spanish (Ecuador)|Male|es-EC-LuisNeural|
|Spanish (El Salvador)|Female|es-SV-LorenaNeural|
|Spanish (El Salvador)|Male|es-SV-RodrigoNeural|
|Spanish (Equatorial Guinea)|Female|es-GQ-TeresaNeural|
|Spanish (Equatorial Guinea)|Male|es-GQ-JavierNeural|
|Spanish (Guatemala)|Female|es-GT-MartaNeural|
|Spanish (Guatemala)|Male|es-GT-AndresNeural|
|Spanish (Honduras)|Female|es-HN-KarlaNeural|
|Spanish (Honduras)|Male|es-HN-CarlosNeural|
|Spanish (Mexico)|Female|es-MX-DaliaNeural|
|Spanish (Mexico)|Male|es-MX-JorgeNeural|
|Spanish (Nicaragua)|Female|es-NI-YolandaNeural|
|Spanish (Nicaragua)|Male|es-NI-FedericoNeural|
|Spanish (Panama)|Female|es-PA-MargaritaNeural|
|Spanish (Panama)|Male|es-PA-RobertoNeural|
|Spanish (Paraguay)|Female|es-PY-TaniaNeural|
|Spanish (Paraguay)|Male|es-PY-MarioNeural|
|Spanish (Peru)|Female|es-PE-CamilaNeural|
|Spanish (Peru)|Male|es-PE-AlexNeural|
|Spanish (Puerto Rico)|Female|es-PR-KarinaNeural|
|Spanish (Puerto Rico)|Male|es-PR-VictorNeural|
|Spanish (Spain)|Female|es-ES-ElviraNeural|
|Spanish (Spain)|Male|es-ES-AlvaroNeural|
|Spanish (Uruguay)|Female|es-UY-ValentinaNeural|
|Spanish (Uruguay)|Male|es-UY-MateoNeural|
|Spanish (US)|Female|es-US-PalomaNeural|
|Spanish (US)|Male|es-US-AlonsoNeural|
|Spanish (Venezuela)|Female|es-VE-PaolaNeural|
|Spanish (Venezuela)|Male|es-VE-SebastianNeural|
|Sundanese (Indonesia)|Female|su-ID-TutiNeural|
|Sundanese (Indonesia)|Male|su-ID-JajangNeural|
|Swahili (Kenya)|Female|sw-KE-ZuriNeural|
|Swahili (Kenya)|Male|sw-KE-RafikiNeural|
|Swahili (Tanzania)|Female|sw-TZ-RehemaNeural|
|Swahili (Tanzania)|Male|sw-TZ-DaudiNeural|
|Swedish (Sweden)|Female|sv-SE-HilleviNeural|
|Swedish (Sweden)|Female|sv-SE-SofieNeural|
|Swedish (Sweden)|Male|sv-SE-MattiasNeural|
|Tamil (India)|Female|ta-IN-PallaviNeural|
|Tamil (India)|Male|ta-IN-ValluvarNeural|
|Tamil (Singapore)|Female|ta-SG-VenbaNeural|
|Tamil (Singapore)|Male|ta-SG-AnbuNeural|
|Tamil (Sri Lanka)|Female|ta-LK-SaranyaNeural|
|Tamil (Sri Lanka)|Male|ta-LK-KumarNeural|
|Telugu (India)|Female|te-IN-ShrutiNeural|
|Telugu (India)|Male|te-IN-MohanNeural|
|Thai (Thailand)|Female|th-TH-AcharaNeural|
|Thai (Thailand)|Female|th-TH-PremwadeeNeural|
|Thai (Thailand)|Male|th-TH-NiwatNeural|
|Turkish (Turkey)|Female|tr-TR-EmelNeural|
|Turkish (Turkey)|Male|tr-TR-AhmetNeural|
|Ukrainian (Ukraine)|Female|uk-UA-PolinaNeural|
|Ukrainian (Ukraine)|Male|uk-UA-OstapNeural|
|Urdu (India)|Female|ur-IN-GulNeural|
|Urdu (India)|Male|ur-IN-SalmanNeural|
|Urdu (Pakistan)|Female|ur-PK-UzmaNeural|
|Urdu (Pakistan)|Male|ur-PK-AsadNeural|
|Uzbek (Uzbekistan)|Female|uz-UZ-MadinaNeural|
|Uzbek (Uzbekistan)|Male|uz-UZ-SardorNeural|
|Vietnamese (Vietnam)|Female|vi-VN-HoaiMyNeural|
|Vietnamese (Vietnam)|Male|vi-VN-NamMinhNeural|
|Welsh (United Kingdom)|Female|cy-GB-NiaNeural|
|Welsh (United Kingdom)|Male|cy-GB-AledNeural|
|Zulu (South Africa)|Female|zu-ZA-ThandoNeural|
|Zulu (South Africa)|Male|zu-ZA-ThembaNeural|

### POST API
The POST API accepts JSON input and requires the following parameters:

* text : Text to translate
* voice: Speech voice (Any voice from the GET Response)
* speed: Speed of the speech (Any integer between -100 and 200)
* pitch: Pitch of the speech (Any integer between -50 and 50)

**Request Schema**
```
{
  "text":  "Hi this is Aniket",
  "voice": "en-US-JennyNeural",
  "speed": 20,
  "pitch": -10
}
```

**Response**

The API returns a .wav file with the given text converted to speech.

---
## API Reference
[Microsoft Azure Text to speech](https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/)
