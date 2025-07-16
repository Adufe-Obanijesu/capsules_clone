export interface ICapsule {
    id: number,
    name: string,
    altName: string,
    description: string,
    img: string,
    details: {
        cost: number,
        sq_footage: string,
        bed: string,
        shifting_window: boolean,
        air_condition: boolean,
        jacuzzi: boolean,
        terrace: boolean,
    }
}

export const capsules: ICapsule[] = [
    {
        id: 1,
        name: "Classic Capsule®",
        altName: "Classic C®",
        description: "Classic Capsule® boasts refined aesthetics and a modern interior, creating an intimate retreat in a desert landscape.",
        img: "/images/cap1.webp",
        details: {
            cost: 2000,
            sq_footage: "22m2",
            bed: "King Size",
            shifting_window: true,
            air_condition: true,
            jacuzzi: true,
            terrace: true
        }
    },
    {
        id: 2,
        name: "Terrace Capsule®",
        altName: "Terrace C®",
        description: "The most prestige capsule with the biggest terrace and jacuzzi with an amazing view of Los Angeles.",
        img: "/images/cap2.webp",
        details: {
            cost: 2500,
            sq_footage: "30m2",
            bed: "King Size",
            shifting_window: true,
            air_condition: true,
            jacuzzi: true,
            terrace: true
        }
    },
    {
        id: 3,
        name: "Desert Capsule®",
        altName: "Desert C®",
        description: "With its striking architecture and upscale amenities, Desert Capsule® offers an exclusive retreat in the heart of the desert",
        img: "/images/cap3.webp",
        details: {
            cost: 2250,
            sq_footage: "28m2",
            bed: "King Size",
            shifting_window: true,
            air_condition: true,
            jacuzzi: true,
            terrace: false
        }
    },
];