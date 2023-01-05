import Headlines from "../components/Headlines";
import Country from "../components/Country";
import { useState } from "react";

export default function TopHeadlines(){
    const [selectedCountryCode, setSelectedCountryCode] = useState("US"); // default to US

    const handleCountryChange = (event) => {
      setSelectedCountryCode(event.target.value);
    };

    return(
        <div>
            <Country onChange={handleCountryChange} />
            <Headlines countryCode={selectedCountryCode} />
        </div>
    )
}