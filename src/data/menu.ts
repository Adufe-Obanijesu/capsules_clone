export interface IMenuLink {
    id: number,
    name: string,
    href: string | number,
    offset?: number
}

export const menus: IMenuLink[] = [
    {
        id: 1,
        name: "Welcome",
        href: 0
    },
    {
        id: 2,
        name: "Introduction",
        href: "#welcome-section",
        offset: 100
    },
    {
        id: 3,
        name: "Houses",
        href: "#discover"
    },
    {
        id: 4,
        name: "Why Capsule®",
        href: "#why"
    },
    {
        id: 5,
        name: "Activities",
        href: "#activities"
    },
    {
        id: 6,
        name: "Feedback",
        href: "#testimonials"
    },
    {
        id: 7,
        name: "Reserve",
        href: "reserve"
    },
]