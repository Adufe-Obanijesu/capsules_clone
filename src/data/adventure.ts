export interface IAdventure {
    id: number
    difficulty: "Easy" | "Medium" | "Hard",
    level: number,
    desc: string
}

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