export class MenuItemProps {
    name: string;
    price: number;
    isFavorite: boolean;
    image: any;

    constructor(name: string, price: number, isFavorite: boolean, image: any) {
        this.name = name;
        this.price = price;
        this.isFavorite = isFavorite;
        this.image = image;
    }
}