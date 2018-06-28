// configure the test here
var TestConfig = {
  "TestName": "Enric Guso Bachelors's thesis",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": true,
  "LoopByDefault": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 4,
  "RequireMaxRating": false,
  "Testsets": [
    //    
    {
      "Name": "speech",
      "TestID": "id1_1",
      "Files": {
            "Reference": "audio/ff_sp_dry.wav",
            "1": "audio/ff_sp_gam.wav",
            "2": "audio/ff_sp_stft.wav",
            "3": "audio/ff_sp_stftgam.wav",
            "4": "audio/ff_sp_wiener.wav",
        }
    },
    {
      "Name": "instruments",
      "TestID": "id1_2",
      "Files": {
            "Reference": "audio/in_dry.wav",
            "1": "audio/in_gam.wav",
            "2": "audio/in_stft.wav",
            "3": "audio/in_wiener.wav",
        }
    },
    {
      "Name": "mixtures",
      "TestID": "id1_1",
      "Files": {
            "Reference": "audio/mu_dry.wav",
            "1": "audio/mu_wiener.wav",
            "2": "audio/mu_stft.wav",
            "3": "audio/mu_stftgam.wav",
            "4": "audio/mu_gam.wav",
        }
    },
  ]
}
