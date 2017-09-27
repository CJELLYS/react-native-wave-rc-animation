
# react-native-wave-animation

## Getting started

`$ npm install https://github.com/CJELLYS/react-native-wave-rc-animation.git --save`

### Mostly automatic installation

`$ react-native link react-native-wave-animation`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-wave-animation` and add `WaveAnimation.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libWaveAnimation.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/ManApplication `
  - Add `import cn.staynoob.WaveAnimationPackage;` to the imports at the top of the file
  - Add `new WaveAnimationPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-wave-animation'
  	project(':react-native-wave-animation').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-wave-animation/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-wave-animation')
  	```


## Usage
```javascript
import WaveAnimation from 'react-native-wave-animation';

export default () => (
	<WaveAnimation
		frontWaveColor="blue"
		behindWaveColor="yellow"
		style={{
			width:200,
			height:200,
			backgroundColor: 'black',
			justifyContent: 'center',
		}}
	>
	<Text style={{ color: 'red'}}>
		Welcome to React Native!
	</Text>
	</WaveAnimation>
)
```
  