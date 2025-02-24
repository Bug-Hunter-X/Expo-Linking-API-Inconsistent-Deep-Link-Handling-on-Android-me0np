This solution adds a check to see if the app is already running, and only adding the listener if it's the first time the component is rendered.  If the app is already running, the initial event listener is added, and the useEffect hook adds a second one to handle links when the app was already closed.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleInitialUrl = async () => {
      let initialUrl = await Linking.getInitialURL();
      setInitialUrl(initialUrl);
    };
    handleInitialUrl();
  }, []);

  useEffect(() => {
    const linkSubscription = Linking.addEventListener('url', (event) => {
      console.log('URL event:', event.url);
      // Handle the deep link here
    });

    return () => {
      linkSubscription.remove();
    };
  }, []);

  if (initialUrl) {
    console.log('Initial URL:', initialUrl);
    // Handle initial URL here
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
```