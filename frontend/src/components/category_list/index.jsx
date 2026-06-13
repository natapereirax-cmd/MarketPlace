import { Styled_Category_List } from "./styles"

function Category_list() {
    return (
        <Styled_Category_List>
            <button>
                <i class='bx bx-car'></i>
                Vehicle
            </button>
            <button>
                <i class='bx bx-mobile-alt'></i>
                Cellphone
            </button>
            <button>
                <i class='bx bx-home'></i>
                Home, decoration and utensils
            </button>
            <button>
                <i class='bx bx-football'></i>
                Sports and hobbies
            </button>
            <button>
                <i class='bx bx-child'></i>
                Children's material
            </button>
            <button>
                <i class='bx bx-desktop'></i>
                Computer
            </button>
            <button>
                <i class='bx bx-building'></i>
                Real estate
            </button>
            <button>
                <i class='bx bx-category'></i>
                Others
            </button>
        </Styled_Category_List>
    )
}

export default Category_list;