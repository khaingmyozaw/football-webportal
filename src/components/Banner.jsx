export const Banner = () => {
    return (
        <div className="w-full h-screen relative">
            <div className="h-full mx-auto flex justify-center items-center flex-col bg-linear-to-b from-stone-950/10 to-stone-950">
                <h1 className="text-7xl font-extrabold tracking-wide text-white leading-40">တစ်ဂိုးမှ <span className="text-emerald-500">မလွတ်စေနဲ့</span></h1>
                <p className="max-w-2xl text-lg text-center md:text-xl text-gray-100">
                    နောက်ကျတဲ့ Score တွေ၊ အရည်အသွေးမကောင်းတဲ့လင့်ခ်တွေကို မေ့လိုက်ပါ။
                    HD Quality နဲ့ အားလုံးထက်မြန်တဲ့ Streaming ကို သင့်လက်ဖဝါးပေါ်မှာ အခုပဲ ရယူလိုက်ပါ။
                </p>
                <button className="mt-4 py-3 px-8 bg-green-400 rounded-4xl text-lg text-bold cursor-pointer">App ကို ရယူပါ</button>
            </div>
            <iframe
                className="w-full h-full absolute top-0 left-0 -z-10"
                src="https://www.youtube.com/embed/0H8-WR-2GtM?autoplay=1&mute=1&loop=1&playlist=0H8-WR-2GtM&controls=0&showinfo=0&modestbranding=1&end=18"
                title="YouTube video player"
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
            ></iframe>
        </div>
    )
};