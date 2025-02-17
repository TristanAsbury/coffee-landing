import { useEffect, useMemo, useState } from "react";
import Coffee from "../types/coffee";
import api from "../services/axios";
import { SelectionType } from "../types/selection-type";
import { CoffeeList } from "../components/coffee-list";

export const LandingPage = () => {
    const DATA_URL = 'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json';
    const [coffees, setCoffees] = useState<Coffee[]>([]);
    const [selectedOption, setSelectedOption] = useState<SelectionType>(SelectionType.ALL)

    useEffect(() => {
        api.get(DATA_URL).then(r => {
            const coffees = r.data as Coffee[];
            setCoffees(coffees);
        }, error => {
            console.log("There was an error fetching data! ", error);
        });
    }, []);

    const filteredCoffees = useMemo(() => {
        return selectedOption === SelectionType.ALL 
            ? coffees 
            : coffees.filter(c => c.available);
    }, [selectedOption, coffees]);

    return (
        <main className="relative text-white w-full min-h-full flex flex-col justify-center items-center p-16">
            <img 
            className="absolute top-0 h-96 w-full object-cover blur-xs" 
            src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?cs=srgb&dl=pexels-apgpotr-683039.jpg&fm=jpg" alt="" />
            <div className="z-10 flex flex-col gap-8 p-8 rounded-lg bg-neutral-800">

                <div className="max-w-xl m-auto text-center flex flex-col gap-4">
                    <h1 className="font-medium text-3xl">Our Collection</h1>
                    <p className="text-neutral-500 text-sm md:text-lg font-medium">Introducting our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                    <div className="flex flex-row gap-4 m-auto">
                        <button 
                        onClick={() => setSelectedOption(SelectionType.ALL)}
                        className={`${selectedOption == SelectionType.ALL ? `bg-neutral-500` : ``} text-sm md:text-lg px-4 py-1 rounded-lg font-medium hover:bg-neutral-600`}>All Products</button>
                        <button 
                        onClick={() => setSelectedOption(SelectionType.AVAILABLE)}
                        className={`${selectedOption == SelectionType.AVAILABLE ? `bg-neutral-500` : ``} text-sm md:text-lg px-4 py-1 rounded-lg font-medium hover:bg-neutral-600`}>Available Now</button>
                    </div>
                </div>

                <CoffeeList coffees={filteredCoffees}></CoffeeList>
            </div>

        </main>
    )
}