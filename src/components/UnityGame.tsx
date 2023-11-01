import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  /* The container determains the size. */
  // width: 960px;
  // height: 600px;
  height: 100%;
  width: 100%;
  margin: auto;
`

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: grey;
  /* We'll set the following Flex properties in order to center the text. */
  display: flex;
  justify-content: center;
  align-items: center;
`

const UnityWrapper = styled(Unity)`
  width: 100%;
  height: 100%;
`

const UnityGame = () => {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    codeUrl: 'build/atrium.wasm',
    dataUrl: 'build/atrium.data',
    frameworkUrl: 'build/atrium.framework.js',
    loaderUrl: 'build/atrium.loader.js',
  })

  const loadingPercentage = Math.round(loadingProgression * 100)
  // We'll use a state to store the device pixel ratio.
  // const [devicePixelRatio, setDevicePixelRatio] = useState(
  //   window.devicePixelRatio
  // )
  // const handleChangePixelRatio = useCallback(
  //   function () {
  //     // A function which will update the device pixel ratio of the Unity
  //     // Application to match the device pixel ratio of the browser.
  //     const updateDevicePixelRatio = function () {
  //       setDevicePixelRatio(window.devicePixelRatio)
  //     }
  //     // A media matcher which watches for changes in the device pixel ratio.
  //     const mediaMatcher = window.matchMedia(
  //       `screen and (resolution: ${devicePixelRatio}dppx)`
  //     )
  //     // Adding an event listener to the media matcher which will update the
  //     // device pixel ratio of the Unity Application when the device pixel
  //     // ratio changes.
  //     mediaMatcher.addEventListener('change', updateDevicePixelRatio)
  //     return function () {
  //       // Removing the event listener when the component unmounts.
  //       mediaMatcher.removeEventListener('change', updateDevicePixelRatio)
  //     }
  //   },
  //   [devicePixelRatio]
  // )
  return (
    <Container>
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <LoadingOverlay>
          <p>Loading... ({loadingPercentage}%)</p>
        </LoadingOverlay>
      )}
      <UnityWrapper
        // style={{ visibility: isLoaded ? "visible" : "hidden" }}
        className="unity"
        unityProvider={unityProvider}
        devicePixelRatio={window.devicePixelRatio}
      />
    </Container>
  )
}

export default UnityGame
