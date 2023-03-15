import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProgressBar() {

    const [percentage, setPercentage] = useState(0);
    // const [percentage1, setPercentage1] = useState(0);


    useEffect(() => {
        setTimeout(() => {
            if (percentage < 50) {
                setPercentage(percentage + 1);
            }
        }, 300);
    }, [percentage])

    return (
        <div>
            <div style={{ color: "#B728EA", textAlign: "center", display: "flex", alignItems: "baseline", justifyContent: "center", columnGap: "250px", rowGap: "30px", flexWrap: "wrap" }}>
                <div style={{ width: 180, display: "flex", flexDirection: "column", alignItems: "center", rowGap: "25px", }}>
                    <CircularProgressbar value={percentage} text="2.5" styles={buildStyles({
                        textColor: '#B728EA',
                        pathColor: '#16B5E7',
                    })} />
                    <i className='text-xl'>MARKETING</i>
                </div>


                <div style={{ width: 180, display: "flex", flexDirection: "column", alignItems: "center", rowGap: "25px", }}>
                    <CircularProgressbar value={percentage} text="2.5" styles={buildStyles({
                        textColor: '#B728EA',
                        pathColor: '#16B5E7',
                    })} />
                    <i className='text-xl'>DEVELOPMENT</i>
                </div>

            </div >
        </div>
    );
}

export default ProgressBar
