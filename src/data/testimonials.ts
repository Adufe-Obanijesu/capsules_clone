export interface ITestimonial {
    id: number,
    name: string,
    location: string,
    img: string,
    desc: string,
}

export const testimonials: ITestimonial[] = [
    {
        id: 1,
        name: "Marcus Simpson",
        location: "New York",
        img: "/images/review1.webp",
        desc: "Staying at Capsule® in the California desert redefined my retreat - modern design meets nature, and every sunset feels like a serene masterpiece."
    },
    {
        id: 2,
        name: "Lena Morrison",
        location: "Los Angeles",
        img: "/images/review2.webp",
        desc: "Capsule® offered the perfect escape - sleek, modern spaces surrounded by desert stillness. Each moment felt peaceful, grounded, and truly unique."
    },
    {
        id: 3,
        name: "Jason Whitaker",
        location: "San Francisco",
        img: "/images/review3.webp",
        desc: "Capsule® was the perfect desert hideaway - stylish, peaceful, and fully surrounded by stunning views day and night."
    },
]