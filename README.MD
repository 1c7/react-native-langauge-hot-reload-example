# React Native Language Hot Reload Demo
replace `react-native-i18n` with `react-native-languages` + `i18next`        
(for loading language from server, and refresh UI after loaded)    
(no need to update your App everytime it support a new language, just load language dynamically!)     

## Edit at 2018, March,4
This demo actually need a bit more work to make loading language from server work,     
(in my case, I need load Russian langauge from my server)      
right now it only work when you switch langauge in Android Setting, and then switch back to App.   
I am just too lazy to write that "a bit more work", so you have to figure that out yourself.     
Useful disscussion for this at here: https://github.com/AlexanderZaytsev/react-native-i18n/issues/168     
  
## Video Demo(Youtube)
https://www.youtube.com/watch?v=HkObnXf51VA

## Using 
* [`react-native-languages`](https://github.com/react-community/react-native-languages) for detect langauge has change and run some code
* [`i18next`](https://www.i18next.com/)
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

I been using `react-native-i18n` for awhile      
(because it got a lot Github Star :star: and there are many article about `react-native-i18n` on Google)      

But now I need to support `Russian` langauge      
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

#### Last
Pull Request are welcome! :D  
