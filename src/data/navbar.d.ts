// src/data/navbar.d.ts

interface MenuItem {
    id: string;
    label: string;
    url: string;
    subMenu?: SubMenuItem[];
}

interface SubMenuItem {
    id: string;
    label: string;
    url: string;
}

declare const menuData: MenuItem[];
export default menuData;
