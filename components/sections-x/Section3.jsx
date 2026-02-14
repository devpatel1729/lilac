"use client";


const Section3 = () => {
  return (
    <div className="min-h-[130vh] bg-[#fbf6f1] p-10 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold py-15 text-center">My Specialties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cards gap-5 w-full max-w-7xl">
            <div className="card border bg-[#e5e0da] p-5 h-full flex flex-col">
                <h2 className="font-bold mb-10 text-lg">Self-Esteem</h2>
                <p className="text-xs text-wrap mb-5">Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.</p>
                <img className="w-70 h-70 object-cover rounded-full object-left m-auto" src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg?format=750w" alt="card-1" />
            </div>
            <div className="card border bg-[#e5e0da] p-5 h-full flex flex-col">
                <h2 className="font-bold mb-10 text-lg">Relationships</h2>
                <p className="text-xs text-wrap mb-5">Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.</p>
                <img className="w-70 h-70 object-cover rounded-full object-bottom m-auto" src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg?format=500w" alt="card-1" />
            </div>
            <div className="card border bg-[#e5e0da] p-5 h-full flex flex-col">
                <h2 className="font-bold mb-10 text-lg">Burnout</h2>
                <p className="text-xs text-wrap mb-5">Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.</p>
                <img className="w-70 h-70 object-cover rounded-full object-left m-auto" src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg?format=500w" alt="card-1" />
            </div>
        </div>
    </div>
  )
}

export default Section3