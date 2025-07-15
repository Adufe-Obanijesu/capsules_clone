export default function MobileVersion() {
    return (
        <div>
            <header className="hero-header relative h-screen padding-x pt-12.5 pb-25">
                <div className="h-full relative z-1 flex flex-col justify-between">

                    <div className="px-2.5">
                        <img src="/logo.svg" alt="logo" className="aspect-[4.28/1] logo-fluid"/>

                        <p className="text-[23px] leading-[26px] tracking-[-0.2px] font-medium mt-[20px] text-lightBrown">
                            Closer to <br/> Nature-Closer<br/> to Yourself
                        </p>
                    </div>
                    <div>

                        <p className="text-[14px] font-semibold leading-[18px] tracking-[-0.2px] text-white mb-[30px]">
                            Spend unforgettable and remarkable time <br/>in the Californian desert with-Capsules
                        </p>

                        <div className="w-full h-[45vh] relative overflow-hidden rounded-[30px] bg-black">
                            <img src="/images/cap1.webp" alt="capsule"
                                 className="object-cover object-center absolute w-full h-full xl:scale-[1.4]"/>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 bg-gradient-dark"/>
            </header>
        </div>
    )
}