import React, { useState, useEffect } from 'react';

import { getFilmByYear } from '../../src/controller/apiService';

function FilterByYear({ setFilms }) {
    const [yearSelected, setYearSelected] = useState();
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = 1970; year <= currentYear; year++) {
        years.push(year);
    };

    useEffect(() => {
        const fetchYearSelected = async () => {
            const data = await getFilmByYear(yearSelected);
            setFilms(data.results);
        };
        fetchYearSelected();

    }, [yearSelected]);

    return (
        <div>
            <select
                className="form-control"
                value={yearSelected}
                onChange={(e) => setYearSelected(e.target.value)}
            >
                <option value="">Selecciona un año</option>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>

    )
}

export default FilterByYear;
