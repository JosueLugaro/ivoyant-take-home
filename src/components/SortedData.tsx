import { useEffect, useState } from 'react';
import { parseString } from 'xml2js';

type apiDataTypes = {
    id: number,
    firstName: string | string[],
    lastName: string | string[]
}

export default function SortedData() {
    const [loading, setLoading] = useState(true)
    const [holder, setHolder] = useState<apiDataTypes[]>([]);
    const dataArr: apiDataTypes[] = [];

    useEffect(() => {
        fetch("/api/json")
        .then(async res => await res.json())
        .then(data => {
        dataArr.push(...data.person)
        });

        fetch("/api/xml")
        .then(res => res.text())
        .then(data => parseString(data, (err, result) => {
            if (err) {
            console.error(err);
            return
            }

            dataArr.push(...result.persons.person)
            dataArr.sort(function(a, b) {
            return a.id - b.id
            });
            setHolder(dataArr);
            setLoading(false)
        }));
    }, []);

    return (
        <div className="data-container">
            {loading ? <p>Loading...</p> :
                holder.map(obj => (
                   <ul>
                        <li>{obj.id}</li>
                        <li>{obj.firstName}</li>
                        <li>{obj.lastName}</li>
                   </ul>
                ))
            }
        </div>
    );
}
