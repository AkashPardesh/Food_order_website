import React from "react";
import AvailableMeal from "./AvailableMeals";
import MealSummary from "./MealSummary";

function Meals(){
return(
    <React.Fragment>
        <MealSummary></MealSummary>
        <AvailableMeal></AvailableMeal>
    </React.Fragment>
);

}

export default Meals;