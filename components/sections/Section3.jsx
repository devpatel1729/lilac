"use client";

const Section3 = () => {
  return (
    <div className="min-h-screen bg-[#fbf6f1] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center py-12 sm:py-16 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold py-8 sm:py-10 md:py-15 text-center">
            My Specialties
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cards gap-4 sm:gap-5 w-full max-w-7xl">
            <div className="card border border-[#223614] bg-[#e5e0da] p-4 sm:p-5 h-full flex flex-col">
                <h2 className="font-bold mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg">Self-Esteem</h2>
                <p className="text-xs sm:text-sm text-wrap mb-4 sm:mb-5 flex-grow">
                    Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.
                </p>
                <img 
                    className="w-full aspect-square object-cover rounded-full object-left mx-auto" 
                    src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg?format=750w" 
                    alt="card-1" 
                />
            </div>
            <div className="card border border-[#223614] bg-[#e5e0da] p-4 sm:p-5 h-full flex flex-col">
                <h2 className="font-bold mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg">Relationships</h2>
                <p className="text-xs sm:text-sm text-wrap mb-4 sm:mb-5 flex-grow">
                    Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.
                </p>
                <img 
                    className="w-full aspect-square object-cover rounded-full object-bottom mx-auto" 
                    src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg?format=500w" 
                    alt="card-2" 
                />
            </div>
            <div className="card border border-[#223614] bg-[#e5e0da] p-4 sm:p-5 h-full flex flex-col md:col-span-2 lg:col-span-1">
                <h2 className="font-bold mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg">Burnout</h2>
                <p className="text-xs sm:text-sm text-wrap mb-4 sm:mb-5 flex-grow">
                    Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.
                </p>
                <img 
                    className="w-full aspect-square object-cover rounded-full object-left mx-auto" 
                    src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg?format=500w" 
                    alt="card-3" 
                />
            </div>
        </div>
    </div>
  )
}

export default Section3