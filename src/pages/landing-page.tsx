import { useEffect, useState } from "react";
import Coffee from "../types/coffee";
import api from "../services/axios";
import { CoffeeCard } from "../components/coffee-card";
import { SelectionType } from "../types/selection-type";
import { CoffeeList } from "../components/coffee-list";

export const LandingPage = () => {
    const DATA_URL = 'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json';
    const [coffees, setCoffees] = useState<Coffee[]>([]);
    const [filteredCoffees, setFilteredCoffees] = useState<Coffee[]>([]);
    const [selectedOption, setSelectedOption] = useState<SelectionType>(SelectionType.ALL)

    useEffect(() => {
        api.get(DATA_URL).then(r => {
            const coffees = r.data as Coffee[];
            setCoffees(coffees);
            setFilteredCoffees(coffees);
        }, error => {
            console.log("There was an error fetching data! ", error);
        });
    }, []);

    useEffect(() => {
        const filtered = coffees.filter(c => {
            return selectedOption == SelectionType.AVAILABLE ? c.available : c;
        });

        setFilteredCoffees(filtered);

    }, [selectedOption])

    const selectAll = () => {
        setSelectedOption(SelectionType.ALL);
    }

    const selectAvailable = () => {
        setSelectedOption(SelectionType.AVAILABLE);
    }
    

    return (
        <main className="text-white w-full min-h-full flex flex-col justify-center items-center p-8">
            <div className="flex flex-col gap-8 p-8 rounded-lg bg-neutral-800">
                <div className="max-w-xl m-auto text-center flex flex-col gap-4">
                    <h1 className="font-medium text-3xl">Our Collection</h1>
                    <p className="text-neutral-500 text-sm md:text-lg font-medium">Introducting our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                    <div className="flex flex-row gap-4 m-auto">
                        <button 
                        onClick={selectAll}
                        className={`${selectedOption == SelectionType.ALL ? `bg-neutral-500` : ``} text-sm md:text-lg px-4 py-1 rounded-lg font-medium hover:bg-neutral-600`}>All Products</button>
                        <button 
                        onClick={selectAvailable}
                        className={`${selectedOption == SelectionType.AVAILABLE ? `bg-neutral-500` : ``} text-sm md:text-lg px-4 py-1 rounded-lg font-medium hover:bg-neutral-600`}>Available Now</button>
                    </div>
                </div>

                <CoffeeList coffees={filteredCoffees}></CoffeeList>
            </div>

        </main>
    )
}