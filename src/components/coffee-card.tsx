import Coffee from "../types/coffee";

export const CoffeeCard = ({coffee}: {coffee: Coffee}) => {
    return (
        <div className="md:w-xs flex flex-col m-auto hover:scale-105 hover:cursor-pointer transition-all">
            {/* TOP PART */}
            <div className="relative w-full h-full">
                {/* IMAGE */}
                <img src={coffee.image} className="rounded-xl w-full" />

                {/* POPULAR TAG */}
                {
                    coffee.popular && <span className="absolute top-2 left-2 bg-amber-200 text-amber-900 font-bold px-2 py-1 rounded-xl">Popular</span>
                }
            </div>


            {/* Name and price */}
            <div className="flex flex-row justify-between mt-2 items-center">
                <p className="text-white font-medium text-lg">{coffee.name}</p>
                <span className="bg-green-200 rounded-sm px-2 py-1 text-green-950 text-sm font-medium">{coffee.price}</span>
            </div>

            {/* RATING AND AVAILABILTIY*/}
            <div className="flex flex-row justify-between mt-2">
                <div className="flex flex-row gap-1 items-center mt-1">
                    <svg  xmlns="http://www.w3.org/2000/svg"  
                        width="20"  
                        height="20"  
                        viewBox="0 0 24 24"  
                        className={`${coffee.rating ? 'fill-yellow-200' : 'fill-transparent stroke-neutral-200 stroke-2'} icon icon-tabler icons-tabler-filled icon-tabler-star`}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
                    </svg>
                    <span className="font-medium">{coffee.rating}</span>
                    <span className="font-medium text-gray-400">{coffee.votes ? `(${coffee.votes}) votes` : 'No rating'}</span>
                </div>

                {
                    !coffee.available &&
                    <p className="font-medium text-orange-600">Sold out</p>
                }
            </div>

        </div>
    )
}