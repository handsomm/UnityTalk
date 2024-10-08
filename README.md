# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

## Generate the SHA1 for register the device in Firebase

Run the below command in project root directory.

```bash
cd android && ./gradlew :app:signingReport
```

## To link the assets with android and iOS

```bash
npx react-native-asset
```

## Generating an upload key for PlayStore

Navigate to the folder :

> **For Windows:** `C:\Program Files\Java\jdkx.x.x_x\bin`

```bash
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```
> **For Mac:** `/Library/Java/JavaVirtualMachines/jdkX.X.X_XXX.jdk/Contents/Home`

```bash
sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

## For changing the release version of the app

```bash
npm i -g react-native-version
```

For changing the version :

```bash
react-native-version --never-amend
```