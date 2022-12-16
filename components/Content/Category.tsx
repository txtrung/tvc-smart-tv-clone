import GroceryImg from '/public/grocery.png';
import SkincareImg from '/public/skin_care.png';
import HouseholdImg from '/public/house_hold.jpg';
import Image from 'next/image';

const categories = [
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
];

export default function Category () {
    return (
        <div>
            <div>NGÀNH HÀNG</div>
            <div>
                {
                    categories.map((category) => 
                        <div key={category.id}>
                            <Image src={category.image} alt={''}></Image>
                            <div>{category.text}</div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}