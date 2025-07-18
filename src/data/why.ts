export interface IWhy {
    id: number,
    title: string,
    description: string,
    img: string
    imgMobile: string
}

export const why: IWhy[] = [
    {
        id: 1,
        title: "Enjoy the view through—the wide panoramic glass window",
        description: "Get closer to the desert nature than ever before and admire this unique, breathtaking landscape.",
        img: "/images/cap1.webp",
        imgMobile: "/images/cap1-mobile.webp",
    },
    {
        id: 2,
        title: "Sound of silence —out of the city rush with completely privacy",
        description: "Here, every whisper of nature recharges your soul—your sanctuary of solitude awaits",
        img: "/images/cap2.webp",
        imgMobile: "/images/cap2-mobile.webp",
    },
    {
        id: 3,
        title: "Relax yourself in—Wooden Jacuzzi",
        description: "Let the natural textures and gentle bubbles transport you to a realm of pure, handcrafted bliss.",
        img: "/images/cap3.webp",
        imgMobile: "/images/cap3-mobile.webp",
    },
]