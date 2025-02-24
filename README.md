# Expo Linking API Deep Link Handling Issue

This repository demonstrates a bug in Expo's `Linking` API where deep links are not consistently handled, particularly on Android, when the app is launched for the first time or is in a closed state.  The issue is that `Linking.addEventListener` may fail to trigger, preventing the app from responding to deep links.

## Reproduction Steps

1. Clone this repository.
2. Run the app using Expo Go on an Android device.
3. Close the app completely.
4. Open a deep link URL that should trigger the `Linking.addEventListener` listener.
5. Observe that the app does not handle the deep link.

## Solution

A workaround is provided in `bugSolution.js` that utilizes an additional listener attached after the initial app load in the `useEffect` hook.  This ensures the listener is registered correctly to handle subsequent deep links, even after the app has been closed and reopened.