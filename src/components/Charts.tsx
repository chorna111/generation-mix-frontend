import { useEffect, useState } from "react";
import { PieChart } from '@mui/x-charts'
import { useNavigate } from "react-router-dom";
import '../App.css'


function Charts() {
    const [data, setData] = useState(null)
    const [load, setLoad] = useState(true)
    const navigator=useNavigate()
    useEffect(() => {
        fetch("https://generation-mix-backend-1.onrender.com/api/dailyFuelsPercentage")
            .then((res) => res.json())
            .then((json) => {
                setData(json)
                setLoad(false)

            })
    }, [])
    if (load || !data) {

        return <h1>Ładowanie danych o miksie energetycznym...</h1>
    }
    const days = Object.keys(data)
    if (days.length < 3) {
        return <h1>Brak danych o miksie energetycznym...</h1>;
    }


    console.log(data)

    const today = days[0]
    const dataToday = data[today]
    const tomorrow = days[1]
    const dataTomorrow = data[tomorrow]
    const dayAfterTomorrow = days[2]
    const dataDayAfterTomorrow = data[dayAfterTomorrow]


    return (


        <>
        <h1>Aktualne dane o miksie energetycznym w UK</h1>
        <div className="charts">
            <div>
                <h2>Udział źródeł energii (%) w miksie energetycznym z dnia {today}</h2>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: Number(dataToday['biomass']), label: 'Biomass' },
                                { id: 1, value: Number(dataToday['coal']), label: 'Coal' },
                                { id: 2, value: Number(dataToday['gas']), label: 'Gas' },
                                { id: 3, value: Number(dataToday['hydro']), label: 'Hydro' },
                                { id: 4, value: Number(dataToday['imports']), label: 'Imports' },
                                { id: 5, value: Number(dataToday['nuclear']), label: 'Nuclear' },
                                { id: 6, value: Number(dataToday['other']), label: 'Other' },
                                { id: 7, value: Number(dataToday['solar']), label: 'Solar' },
                                { id: 8, value: Number(dataToday['wind']), label: 'Wind'},

                            ],
                            
                                   
      
                            
                        },
                    ]}
                     width={400}
                    height={500}
                    
                    
                     

                />
                <h2 className="cleanEnergy">Udział czystej energii: {Number(dataToday['cleanEnergyPerc'])}%</h2>




            </div>

            <div>
                <h2>Udział źródeł energii (%) w miksie energetycznym z dnia {tomorrow}</h2>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: Number(dataTomorrow['biomass']), label: 'Biomass' },
                                { id: 1, value: Number(dataTomorrow['coal']), label: 'Coal' },
                                { id: 2, value: Number(dataTomorrow['gas']), label: 'Gas' },
                                { id: 3, value: Number(dataTomorrow['hydro']), label: 'Hydro' },
                                { id: 4, value: Number(dataTomorrow['imports']), label: 'Imports' },
                                { id: 5, value: Number(dataTomorrow['nuclear']), label: 'Nuclear' },
                                { id: 6, value: Number(dataTomorrow['other']), label: 'Other' },
                                { id: 7, value: Number(dataTomorrow['solar']), label: 'Solar' },
                                { id: 8, value: Number(dataTomorrow['wind']), label: 'Wind' },

                            ],
                        },
                    ]}
                     width={400}
                    height={500}
                />
                    <h2 className="cleanEnergy">Udział czystej energii: {Number(dataTomorrow['cleanEnergyPerc'])}%</h2>



            </div>

            <div>
                <h2>Udział źródeł energii (%) w miksie energetycznym z dnia {dayAfterTomorrow}</h2>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: Number(dataDayAfterTomorrow['biomass']), label: 'Biomass' },
                                { id: 1, value: Number(dataDayAfterTomorrow['coal']), label: 'Coal' },
                                { id: 2, value: Number(dataDayAfterTomorrow['gas']), label: 'Gas' },
                                { id: 3, value: Number(dataDayAfterTomorrow['hydro']), label: 'Hydro' },
                                { id: 4, value: Number(dataDayAfterTomorrow['imports']), label: 'Imports' },
                                { id: 5, value: Number(dataDayAfterTomorrow['nuclear']), label: 'Nuclear' },
                                { id: 6, value: Number(dataDayAfterTomorrow['other']), label: 'Other' },
                                { id: 7, value: Number(dataDayAfterTomorrow['solar']), label: 'Solar' },
                                { id: 8, value: Number(dataDayAfterTomorrow['wind']), label: 'Wind' },

                            ],
                        },
                    ]}
                    width={400}
                    height={500}
                />
                    <h2 className="cleanEnergy">Udział czystej energii: {Number(dataDayAfterTomorrow['cleanEnergyPerc'])}%</h2>



            </div>
            </div>
            <button className='next-page-button' onClick={()=>navigator('/optimal-window')}>Wyznacz optymalne okno ładowania</button>



        </>
    )
}

export default Charts

