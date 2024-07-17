# KAIZEN - Frontend Case

Please follow the steps below to get the project up and running.

## Clone the Project
Open your terminal and run the code.

```
git clone https://github.com/mehmetcabbar/kaizen-case.git
```

## Install dependencies
Go to project folder in your terminal and install all dependencies with the following code

```sh
npm install
```

## For IOS
Open your project folder in terminal and run this code. 

```sh
cd ios && pod install && cd ..
```

### Some XCode, React Native compatibility issue 
To run it on iOS, first make sure that XCode is installed on your computer. If you have XCode installed on your computer, go to the project folder and open the file named "Kaizen.xcworkspace" with XCode.

Click "Kaizen" in the Targets field in the middle part of the screen and check the "Signin & Capabilities" field and make sure you are logged in. If you are not logged in, please do so.

With the last iOS update, arm64 problems occur in some versions of React Native. Please click on the "Kaizen" field in the Project section and click on the "Build Settings" field on the screen that appears. Here, make sure that the "Debug" and "Relase" simulator settings in the "Excluded Architectures" field are "arm64". If not, add it.

One short step left. We are almost done with the last XCode, React Native compatibility issue. Now, click on the "Product" tab in XCode's menu at the top of the screen and click on the "Clean Build Folder" option. When the process is completed, click on the "Product" tab again and click on the "Build" tab. You will get an error here. Click on the error and follow the suggestion given to you in the "hash" file that appears and close XCode.

## Run project on IOS
Open a brand new terminal and go to project folder, then run this code; 

```sh
npx react-native start
```

Open another terminal and go to project folder, then run this code; 

```sh
npx react-native run-ios
```

## Run project on Android

```sh
npx react-native run-android
```

### Some XCode, React Native compatibility issue 
To run it on iOS, first make sure that XCode is installed on your computer. If you In React Native projects, some variables such as operating system, ruby ​​version and XCode version are required for the installation stages. If you have any problems, please review the versions below and edit the project and local setup settings.

```sh
ruby: 2.7.5
Xcode: 15.4
```

I hope I was able to help you get the project off the ground. Now you can take the time to review the code.

