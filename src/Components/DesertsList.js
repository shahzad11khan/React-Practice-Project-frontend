import React, { useState } from 'react'
const Desert = (props) => {
    // const yellow='#ffc800';
    // this is use for picking the value 
    const [newRang, SetNewRang] = useState();

    // this is use for assign a value from newRang value
    const [Rang, SetRang] = useState();
    
    // for changing a color
    const [bgcolor, setbackground] = useState(false);

    // for hide and show the notification
    const [vis, setvis] = useState("hidden");

    const Search = () => {

        if (isNaN(newRang)) {
            const purple = '#A020f0';
            setbackground(purple);
            setvis("visible")
            // change the background color 
            const a = document.querySelector('body');
            a.style.backgroundColor = "red";
            // alert("Please Enter a number")
        } else {
            // alert("you enter a number");
            SetRang(newRang);
            setvis("hidden")
            const a = document.querySelector('body');
            a.style.backgroundColor = "white";
        }
        // console.log(typeof(newRang))
    }
    // console.log(Rang);
    // console.log(newRang);
    // simple function 
    // const SetnewRang =(e)=>{
    //     console.log(e.target.value);
    // }
    const Data = props.desert
        .filter((index) => {
            return index.calories < Rang
        })
        .map((index) => {
            return (
                <tr style={{ border: 'solid green' }}>
                    <td style={{ width: '25%' }}>{index.name}</td>
                    <td style={{ width: '25%' }}>{index.calories}</td>
                </tr>
            )

        });
    return (
        <>
            <div style={{ background: bgcolor, visibility: vis }}>Please Enter Valid Range</div>
            <h5> this is Desert component</h5>
            {/* <h6>Enter Range less then 600</h6> */}
            <input type='text' placeholder='Enter range' value={newRang} onChange={(e) => { SetNewRang(e.target.value); }} />
            <button onClick={Search} id='search'>Search</button>
            <table style={{ marginTop: '10px', marginBottom: '10px', width: '50%', marginLeft: 'auto', marginRight: 'auto' }} >{Data}</table>
        </>
    );
}
export default Desert;