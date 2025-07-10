export interface IAdventure {
    id: number
    difficulty: "Easy" | "Medium" | "Hard",
    level: number,
    desc: string
}

export type TActivity = {
    title: React.ReactNode,
    img: string
} & Omit<IAdventure, "level">

export const adventures: IAdventure[] = [
    {
        id: 1,
        difficulty: "Easy",
        level: 40,
        desc: "3-5h duration"
    },
    {
        id: 2,
        difficulty: "Medium",
        level: 80,
        desc: "8-12h duration"
    },
    {
        id: 3,
        difficulty: "Hard",
        level: 60,
        desc: "2-4h duration"
    },
]

export const activities: TActivity[] = [
    {
        id: 1,
        title: <>Buggy tours <br/>in the desert</>,
        img: "/images/activities-1.webp",
        desc: "Explore the terrain on a guided buggy tour that takes you through the desert’s vast and open landscapes.",
        difficulty: "Easy"
    },
    {
        id: 2,
        title: <>Breathtaking <br/>desert hikes</>,
        img: "/images/activities-2.webp",
        desc: "Set out on a hike that offers clear trails, stunning views, and a closer look at the unique desert environment.",
        difficulty: "Medium"
    },
    {
        id: 3,
        title: <>Exciting group <br/>rock climbing</>,
        img: "/images/activities-3.webp",
        desc: "Climbing session on natural sandstone formations, designed to be both challenging and safe while fostering teamwork.",
        difficulty: "Hard"
    },
]