export default function Slidecard({data}){
    return(
        <div className="relative w-full max-w-lg mx-auto">
        {/* Circle with Number */}
        <div className="flex items-center justify-center h-20 w-20 rounded-full border border-black text-4xl font-bold relative">
            <div class="waves-top-sm">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h2>{data.number}</h2>
            <div class="waves-bottom-sm">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        {/* Development Heading */}
        <div className="mt-8">
            <h2 className="text-4xl font-semibold mb-2">{data.title}</h2>
            <hr className="w-24 border-black mb-4" />

            {/* Development List */}
            <ul className="space-y-2">
                {data.list.map((li, index)=>(
                    <li key={index} className="flex items-center">
                        <span className="mr-2">»</span> {li}
                    </li>
                ))}
            </ul>
        </div>
    </div>
    )
}