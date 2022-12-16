import Image from "next/image";
import OmniShopLogo from "/public/OmniShop_logo.png";
import AppBarChild from "./AppBarChild";
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

const myStyle = {
    appBar : {
        display: 'flex',
        justifyContent: 'space-between',
        border: '5px solid #c4c4c4', //#41ae96
        borderRadius: '20px',
        height: '136px',
        alignItems: 'center',
        margin: '28px 90px 40px 90px',
        background: 'white'
    },
    logoLeft : {
        root : {
            paddingLeft: '40px',
        },
        contact: {
            color: '#aaa',
            marginTop: '7px',
            fontFamily: 'cursive',
            fontSize: '18px',
            lineHeight: '25px'
        }
    },
    menuRight : {
        root : {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingRight: '25px'
        },
        search : {
            marginRight: '20px',
            display: 'flex',
            height: '86px',
            alignItems: 'center',
            padding: '0 20px',
            border: '3px solid #c4c4c4',
            borderRadius: '20px'
        },
        account : {
            marginRight: '20px',
            display: 'flex',
            height: '86px',
            alignItems: 'center',
            padding: '0 20px',
            border: '3px solid #c4c4c4',
            borderRadius: '20px'
        },
        cart : {
            display: 'flex',
            height: '86px',
            alignItems: 'center',
            padding: '0 20px',
            border: '3px solid #c4c4c4',
            borderRadius: '20px'
        }
    },
    focused : {
        background: {
            background: '#41ae96'
        },
        border: {
            borderColor: '#41ae96'
        }
    }
}

export default function AppBar ({reff}) {

    const appBarItems = [
        {
            id: 1,
            image : <svg id="Icon_search" data-name="Icon search" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect id="Rectangle_189" data-name="Rectangle 189" width="40" height="40" fill="none"></rect><path id="Path_104" data-name="Path 104" d="M18.373,16.853a16.143,16.143,0,0,0,9.263-2.925l9.684,9.706a2.683,2.683,0,0,0,1.884.731,2.5,2.5,0,0,0,2.548-2.593,2.574,2.574,0,0,0-.731-1.861L31.4,10.271A16.115,16.115,0,0,0,34.616.609,16.3,16.3,0,0,0,18.373-15.635,16.282,16.282,0,0,0,2.129.609,16.281,16.281,0,0,0,18.373,16.853Zm0-3.789A12.527,12.527,0,0,1,5.9.609a12.465,12.465,0,0,1,24.931,0A12.523,12.523,0,0,1,18.373,13.063Z" transform="translate(-2.129 15.635)" fill="#eaeaea"></path></svg>,
            text : 'Tìm kiếm sản phẩm',
            style : myStyle.menuRight.search
        },
        {
            id: 2,
            image : <svg xmlns="http://www.w3.org/2000/svg" width="33.333" height="33.333" viewBox="0 0 33.333 33.333"><g id="icons-user" transform="translate(-3.333 -3.333)"><path id="Vector" d="M16.667,0A16.667,16.667,0,1,0,33.333,16.667,16.666,16.666,0,0,0,16.667,0Zm0,4.583A5.417,5.417,0,1,1,11.25,10,5.417,5.417,0,0,1,16.667,4.583Zm0,25.417A13.3,13.3,0,0,1,6.52,25.313a1.692,1.692,0,0,1,.288-2.452C9.337,20.96,13.943,20,16.667,20s7.33.96,9.86,2.862a1.693,1.693,0,0,1,.288,2.452A13.3,13.3,0,0,1,16.667,30Z" transform="translate(3.333 3.333)" fill="#363636"></path></g></svg>,
            text : 'Tài khoản Hahahahaha',
            style : myStyle.menuRight.account
        },
        {
            id: 3,
            image : <svg xmlns="http://www.w3.org/2000/svg" width="44.387" height="40" viewBox="0 0 44.387 40"><path id="Path_139" data-name="Path 139" d="M-7.513,1.028H16.093A1.6,1.6,0,0,0,17.677-.6a1.6,1.6,0,0,0-1.584-1.627H-7.128a1.971,1.971,0,0,1-1.948-1.9L-9.4-6.248H16.179a4.224,4.224,0,0,0,4.195-2.5C13.1-8.989,7.015-18.311,7.217-24.119h-19.2l-.364-2.44c-.257-1.648-.835-2.461-2.975-2.461h-7.041a1.677,1.677,0,0,0-1.648,1.648A1.681,1.681,0,0,0-22.366-25.7h6.656l3.21,21.98C-12.071-.791-10.509,1.028-7.513,1.028ZM-9.268,7.6a3.357,3.357,0,0,0,3.36,3.381A3.343,3.343,0,0,0-2.548,7.6a3.339,3.339,0,0,0-3.36-3.36A3.352,3.352,0,0,0-9.268,7.6Zm18.834,0a3.382,3.382,0,1,0,3.4-3.36A3.38,3.38,0,0,0,9.566,7.6Z" transform="translate(24.014 29.02)" fill="#c4c4c4"></path></svg>,
            text : 'Giỏ hàng 47.990.000 đ',
            style : myStyle.menuRight.cart
        }
    ];

    const { focused } = useFocusable();

    console.log(reff);
    console.log(focused);

    return (
        <div style={focused ? {...myStyle.appBar,...myStyle.focused.border} : myStyle.appBar}>
            <div style={myStyle.logoLeft.root}>
                <Image src={OmniShopLogo} alt={""}></Image>
                <div style={myStyle.logoLeft.contact}>Hotline hỗ trợ 081.812.3838</div>
            </div>
            <div style={myStyle.menuRight.root}>
                {
                    appBarItems.map(item => 
                        <AppBarChild key={item.id} data={item} styleFocused={myStyle.focused.background}/>
                    )
                }
                
            </div>
        </div>
    );
}