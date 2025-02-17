import Coffee from "../types/coffee"
import { CoffeeCard } from "./coffee-card"

export const CoffeeList = ({coffees}: {coffees: Coffee[]}) => {
    return (
        <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-8">
        {
            coffees.map(c => {
                return <CoffeeCard key={c.id} coffee={c}/>
            })
        }
        </div>
    )
}