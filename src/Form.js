import { useState } from "react";



function Form() {
    const [principle, setPrinciple] = useState('');
    const [interest, setInterest] = useState('');
    const [years, setYears] = useState('');
    const [calcType, setCalcType] = useState('0');
    const [results, setResults] = useState('');
    const [showResults, SetShowResults] = useState(false)


    const calc = {
        0: "Choose...",
        1: "Simple Interest",
        2: "Compound Interest",
    }
    // function npvCalculator() {
    //     if (calcType === "1") {
    //         setResults(principle + (principle * (interest/100) * years));
            
    //     }else if (calcType === "2") {
    //         setResults(principle + (1 + (interest/100)**years));
    //     }
    // }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target)
        if (calcType === calc[0]) {
            alert("Please Select Calculation Format");
            setCalcType(calc[0])
            SetShowResults(false);
            
        } else SetShowResults(true);
    }

    function handlePrincipleChange(e) {
        setPrinciple(e.target.value);
    

    }

    function handleInterestChange(e) {
        setInterest(e.target.value);
    }

    function handleYearChange(e) {
        setYears(e.target.value);
    }

    function handleCalcTypeChange(e) {
        SetShowResults(false)
        console.log(e.target.value)
        console.log(calcType);
        if (e.target.value === calc[1]) {
            setCalcType(calc[1])
            //setResults(principle + (principle * (interest/100) * years));
            setResults(() => (Math.round(principle * (interest/100) * years) + parseInt(principle)));
            
            //console.log("1")
        }else if (e.target.value === calc[2]) {
            setCalcType(calc[2])
            setResults(Math.round(parseInt(principle) * (1 + (interest/100))**years));
            //console.log("2")
        } else if (e.target.value === calc[0]) {
            setCalcType(calc[0])
            alert('Please Select Calculation Format')
            SetShowResults(false);
        }
    }

    function handleClearButtonClick() {
        setPrinciple('');
        setInterest('');
        setYears('');
        SetShowResults(false);
        window.location.reload();
    }

    return (  
    <div className="card position-relative mx-auto " style={{"width": "90%"}}>
    <div className="p-5"> 
        <form className="row gx-3 gy-2 align-items-center font-weight-bold" onSubmit={handleSubmit}>
            <div className="col-sm-2">
                <label  >Principle</label>
                <input type="number" className="form-control" id="specificSizeInputName" placeholder="0" required value={principle} onChange={handlePrincipleChange}/>
            </div>
            <div className="col-sm-3">
                <label >Interest Rate</label>
                <div className="input-group">
                <input type="number" className="form-control" id="specificSizeInputGroupUsername" placeholder="0" required value={interest} onChange={handleInterestChange}/>
                <div className="input-group-text">%</div>
                </div>
            </div>
            <div className="col-sm-2">
                <label>Duration (Years)</label>
                <input type="number" className="form-control" id="specificSizeInputName" placeholder="0" required value={years} onChange={handleYearChange}/>
            </div>
            <div className="col-sm-3">
                <label >Calculation Type</label>
                <select className="form-select" id="specificSizeSelect" onChange={handleCalcTypeChange}>
                <option value={calc[0]}>{calc[0]}</option>
                <option value={calc[1]}>{calc[1]}</option>
                <option value={calc[2]}>{calc[2]}</option>
                </select>
            </div>
            <div className="col-auto p-5">
                <button type="submit" className="btn btn-primary" style={{"marginRight": "20px", "marginBottom": "20px"}}>Calculate</button>
                {showResults? <button onClick={handleClearButtonClick} type="button" className="btn btn-danger" style={{"marginBottom": "20px"}}>Clear Output</button>: ''}
            </div>
        </form>
        <div className="position-relative mx-auto">
          <p>{showResults? results: ''}</p>
        </div> 
    </div>
    </div>
    );
}

export default Form;