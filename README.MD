# React Native Language Hot Reload Demo

## Video Demo


## Using 
* `react-native-langauge` for detect langauge has change and run some code
* `i18next`
* React Native 0.48

## How to run this demo
```
  git clone git@github.com:1c7/react-native-langauge-hot-reload-example.git
  cd react-native-langauge-hot-reload-example
  npm install
  react-native run-android
```

## Why build this demo
I build a Android App using React Native 0.52     

I been using `react-native-i18n` for awhile, and now I need to support `Russian` langauge      
the App already support en(English), jp(Japaness), zh(Chinese), now it need `Russian`,     
and I don't want everytime it support new langauge, I update the App, package the new version with     
```
  cd android && ./gradlew assembleRelease
```
and update it on Google Play Store and all that, it just annoying.   

When the App first start, it would send a http request, backend API would return JSON.    
I can put language content inside that JSON to support new language.  

So I ask around:    
https://github.com/AlexanderZaytsev/react-native-i18n/issues/68#issuecomment-363305671   
https://github.com/AlexanderZaytsev/react-native-i18n/issues/168   
(Thanks @zoontek and @jedrichards)

Then I wrote this demo, hope it help. it should save you some time.   

