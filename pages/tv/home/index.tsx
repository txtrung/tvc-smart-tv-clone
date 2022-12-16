import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import AppBar from "../../../components/AppBar/Index";
// import Content from "../../../components/Content/Index";
// import Footer from "../../../components/Footer/Index";

const MENU_FOCUS_KEY = 'APP_BAR';

function Home ()  {

    const { ref, focusKey } = useFocusable({focusKey: MENU_FOCUS_KEY});

    return (
        <FocusContext.Provider value={focusKey}>
            {/* <div ref={ref}> */}
                <AppBar reff={ref}/>
            {/* </div> */}
            
            {/* <Content reffer={ref}/> */}
            {/* <Footer /> */}
        </FocusContext.Provider>
    );
}

export default Home;