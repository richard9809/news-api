// import { useLocation } from "react-router-dom";


export default function Country(){
    const codes = [
        {
            name: 'Afghanistan',
            code: 'AF'
        },
        {
            name: 'Albania',
            code: 'AL' 
        }, 
        {
            name: 'Angola',
            code: 'AO' 
        },
        {
            name: 'Argentina' ,
            code: 'AR' 
        },
        {
            name: 'Austria',
            code: 'AT'
        },
        {
            name: 'Australia' ,
            code: 'AU'
        },
        {
            name: 'Belgium',
            code: 'BE'
        },
        {
            name: 'Bulgaria',
            code: 'BG'
        },
        {
            name: 'Brazil',
            code: 'BR'
        },
        {
            name: 'Canada',
            code: 'CA'
        },
        {
            name: 'Switzerland',
            code: 'CH'
        },
        {
            name: 'China',
            code: 'CN'
        },
        {
            name: 'Colombia',
            code: 'CO'
        },
        {
            name: 'Costa Rica',
            code: 'CR'
        },
        {
            name: 'Cuba',
            code: 'CU'
        },
        {
            name: 'Czech Republic',
            code: 'CZ'
        },
        {
            name: 'Germany',
            code: 'DE'
        },
        {
            name: 'Egypt',
            code: 'EG'
        },
        {
            name: 'France',
            code: 'FR'
        },
        {
            name: 'Great Britain',
            code: 'GB'
        },
        {
            name: 'Greece',
            code: 'GR'
        },
        {
            name: 'Hong Kong',
            code: 'HK'
        },
        {
            name: 'Hungary',
            code: 'HU'
        },
        {
            name: 'Indonesia',
            code: 'ID'
        },
        {
            name: 'Ireland',
            code: 'IE'
        },
        {
            name: 'Israel',
            code: 'IL'
        },
        {
            name: 'India',
            code: 'IN'
        },
        {
            name: 'Italy',
            code: 'IT'
        },
        {
            name: 'Japan',
            code: 'JP'
        },
        {
            name: 'South Korea',
            code: 'KR'
        },
        {
            name: 'Latvia',
            code: 'LV'
        },
        {
            name: 'Lithuania',
            code: 'LT'
        },
        {
            name: 'Mexico',
            code: 'MX'
        },
        {
            name: 'Malaysia',
            code: 'MY'
        },
        {
            name: 'Nigeria',
            code: 'NG'
        },
        {
            name: 'Netherlands',
            code: 'NL'
        },
        {
            name: 'Norway',
            code: 'NO'
        },
        {
            name: 'New Zealand',
            code: 'NZ'
        },
        {
            name: 'Philippines',
            code: 'PH'
        },
        {
            name: 'Poland',
            code: 'PL'
        },
        {
            name: 'Portugal',
            code: 'PT'
        },
        {
            name: 'Romania',
            code: 'RO'
        },
        {
            name: 'Russia',
            code: 'RU'
        },
        {
            name: 'Saudi_Arabia',
            code: 'SA'
        },
        {
            name: 'Serbia',
            code: 'RS'
        },
        {
            name: 'Singapore',
            code: 'SG'
        },
        {
            name: 'Slovakia',
            code: 'SK'
        },
        {
            name: 'Slovenia',
            code: 'SI'
        },
        {
            name: 'South Africa',
            code: 'ZA'
        },
        {
            name: 'Spain',
            code: 'ES'
        },
        {
            name: 'Sweden',
            code: 'SE'
        },
        {
            name: 'Taiwan',
            code: 'TW'
        },
        {
            name: 'Thailand',
            code: 'TH'
        },
        {
            name: 'Turkey',
            code: 'TR'
        },
        {
            name: 'United Arab Emirates',
            code: 'AE'
        },
        {
            name: 'United States',
            code: 'US'
        },
        {
            name: 'Venezuela',
            code: 'VE'
        },
    ];

    return (
        <div>
            <div className="country-codes">
                <h2>Search For Headlines In Countries</h2>
                <div className="codes container">
                    {codes.map(code => (
                        <button className="country-code" key={code.code}>{code.name}</button>
                    ))}
                </div>
            </div>
        </div>
    );
}