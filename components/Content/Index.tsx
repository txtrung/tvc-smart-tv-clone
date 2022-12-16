import { FocusableComponentLayout, FocusContext, FocusDetails, KeyPressDetails, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useCallback, useRef, useState } from "react";
import Category from "./Category"
import PromotionSlider from "./PromotionSlider";
import WatchedProduct from "./WatchedProduct";
// import styled, { createGlobalStyle } from 'styled-components';
import styled from "styled-components";
import GroceryImg from '/public/grocery.png';
import SkincareImg from '/public/skin_care.png';
import HouseholdImg from '/public/house_hold.jpg';

const ScrollingRows = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  flex-shrink: 1;
  flex-grow: 1;
`;

const ContentRowWrapper = styled.div`
  margin-bottom: 37px;
`;

const ContentRowTitle = styled.div`
  color: white;
  margin-bottom: 22px;
  font-size: 27px;
  font-weight: 700;
  font-family: 'Segoe UI';
  padding-left: 60px;
`;

const ContentRowScrollingWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  flex-shrink: 1;
  flex-grow: 1;
  padding-left: 60px;
`;

const ContentRowScrollingContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const AssetWrapper = styled.div`
  margin-right: 22px;
  display: flex;
  flex-direction: column;
`;

interface AssetBoxProps {
    focused: boolean;
    image: ImageData;
}

const AssetBox = styled.div<AssetBoxProps>`
  width: 225px;
  height: 127px;
  background-color: ${({ color }) => color};
  border-color: white;
  border-style: solid;
  border-width: ${({ focused }) => (focused ? '6px' : 0)};
  box-sizing: border-box;
  border-radius: 7px;
`;

const AssetTitle = styled.div`
  color: white;
  margin-top: 10px;
  font-family: 'Segoe UI';
  font-size: 24px;
  font-weight: 400;
`;

const promotionProducts = [];
const watchedProducts = [];
const rows = [
    {
      title: 'Ngành hàng',
      datas: [
        {
            id : 1,
            image : GroceryImg,
            text : 'Hàng tiêu dùng và bách hóa'
        },
        {
            id : 2,
            image : SkincareImg,
            text : 'Mỹ phẩm và chăm sóc cá nhân'
        },
        {
            id : 3,
            image : HouseholdImg,
            text : 'Dụng cụ nhà bếp'
        },
        {
            id : 4,
            image : GroceryImg,
            text : 'Sức khỏe và thể thao'
        },
        {
            id : 5,
            image : SkincareImg,
            text : 'Thực phẩm tươi sống'
        },
        {
            id : 6,
            image : HouseholdImg,
            text : 'Điện gia dụng'
        },
        {
            id : 7,
            image : GroceryImg,
            text : 'Nhà cửa và Đời sống'
        },
        {
            id : 8,
            image : SkincareImg,
            text : 'Điện tử và phụ kiện'
        },
        {
            id : 9,
            image : HouseholdImg,
            text : 'Mẹ và Bé và Đồ chơi'
        },
        {
            id : 10,
            image : SkincareImg,
            text : 'May mặc và thời trang'
        }
        ]
    },
    {
      title: 'Sản phẩm bạn đã xem',
      datas: []
    },
    {
      title: 'Sản phẩm bạn đã xem 2',
      datas: []
    }
];

function Asset({ title, image, onEnterPress, onFocus }) {
    const { ref, focused } = useFocusable({
      onEnterPress,
      onFocus,
      extraProps: {
        title,
        image
      }
    });
  
    return (
      <AssetWrapper ref={ref}>
        <AssetBox image={image} focused={focused} />
        <AssetTitle>{title}</AssetTitle>
      </AssetWrapper>
    );
}

function ContentRow ({title:rowTitle,data:assets,onAssetPress,onFocus}) {
  const { ref, focusKey } = useFocusable({
    onFocus
  });

  const scrollingRef = useRef(null);

  const onAssetFocus = useCallback(
    ({ x }: { x: number }) => {
      scrollingRef.current.scrollTo({
        left: x,
        behavior: 'smooth'
      });
    },
    [scrollingRef]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <ContentRowWrapper ref={ref}>
        <ContentRowTitle>{rowTitle}</ContentRowTitle>
        <ContentRowScrollingWrapper ref={scrollingRef}>
          <ContentRowScrollingContent>
            {assets.map((asset) => (
              <Asset
                key={asset.id}
                title={asset.text}
                image={asset.image}
                onEnterPress={onAssetPress}
                onFocus={onAssetFocus}
              />
            ))}
          </ContentRowScrollingContent>
        </ContentRowScrollingWrapper>
      </ContentRowWrapper>
    </FocusContext.Provider>
  );
}

interface AssetProps {
    title: string;
    color: string;
    onEnterPress: (props: object, details: KeyPressDetails) => void;
    onFocus: (
      layout: FocusableComponentLayout,
      props: object,
      details: FocusDetails
    ) => void;
  }

export default function Content({reffer}) {

    // const { ref, focusKey } = useFocusable();

    const [selectedAsset, setSelectedAsset] = useState(null);

    const onAssetPress = useCallback((asset: AssetProps) => {
        setSelectedAsset(asset);
    }, []);

    const onRowFocus = useCallback(
        ({ y }: { y: number }) => {
            reffer.current.scrollTo({
            top: y,
            behavior: 'smooth'
        });
        },
        [reffer]
    );

    return (
        <div>
            <PromotionSlider />
            <ScrollingRows ref={reffer}>
                <div>
                    {rows.map(( row ) => (
                    <ContentRow
                        key={row.title}
                        title={row.title}
                        data={row.datas}
                        onAssetPress={onAssetPress}
                        onFocus={onRowFocus}
                    />
                    ))}
                </div>
            </ScrollingRows>
            {/* <Category />
            <WatchedProduct /> */}
        </div>
    );
}