import '../styles/globals.css';
import { init } from '@noriginmedia/norigin-spatial-navigation';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import { useEffect } from 'react';

init({

});

const MENU_FOCUS_KEY = 'APP_BAR';

function MyApp({ Component, pageProps }) {
  const { ref, focusKey, setFocus } = useFocusable();

  useEffect(()=>{
    setFocus(MENU_FOCUS_KEY);
  },[setFocus]);

  return (
    <FocusContext.Provider value={focusKey}>
      {/* <div ref={ref}> */}
        <Component {...pageProps} />
      {/* </div> */}
    </FocusContext.Provider>
  ) 
    
}

export default MyApp
