import React, { useState } from 'react';
import Modal from './modal';

function App() {
    const [state, setState] = useState({
        abMod: 0,
        profBon: 0,
        otherBon: 0,
        wpnMax: 0,        
    })
    const [rollResult, setRollResult] = useState(0)

    const handleAttackRoll = () => {
        let roll = Math.ceil(Math.random() * 20)
        if (roll === 20) setRollResult('Critical hit!')
        else if (roll === 1) setRollResult('Critical miss!')
        else if (roll + state.abMod + state.profBon > 20) setRollResult(20)
        else setRollResult(roll + state.abMod + state.profBon)        
    }

    const handleDamageRoll = () => {
        let roll = Math.ceil(Math.random() * (state.wpnMax));
        setRollResult(roll + state.abMod + state.otherBon)        
    }

    return (
        < div className='text-center bg-dark' style={{ 'height': '100vh' }} >
            <nav className="navbar navbar-dark bg-primary">
                <span className="navbar-brand mb-0 h1">Simple dnd attack calculator</span>
            </nav>
            <form className='w-75 p-3 ' style={{ 'margin': '0 auto', 'maxWidth': '600px' }}>
                <div className='form-'>
                    <label htmlFor="abilityMod" className='text-light'>Enter ur ability modifier</label>
                    <input type="number" id='abilityMod' className='form-control'
                        onChange={e => setState({ ...state, abMod: parseInt(e.target.value) })} />
                    <label htmlFor="profBon" className='text-light'>Enter ur PROFICIENCY BONUS</label>
                    <input type="number" id='profBon' className='form-control'
                        onChange={e => setState({ ...state, profBon: parseInt(e.target.value) })} />
                    <label htmlFor="otherBon" className='text-light'>Enter ur other bonuses</label>
                    <input type="number" id='otherBon' className='form-control'
                        onChange={e => setState({ ...state, otherBon: parseInt(e.target.value) })} />                    
                    <label htmlFor="wpnMaxDmg" className='text-light'>Weapon max dmg</label>
                    <input type="number" id='wpnMaxDmgn' className='form-control'
                        onChange={e => setState({ ...state, wpnMax: parseInt(e.target.value) })} />
                    <button type="button" className="btn btn-primary m-1" data-toggle="modal" data-target="#Modal"
                        onClick={handleAttackRoll}>
                        Attack Roll
                    </button>
                    <button type="button" className="btn btn-primary m-1" data-toggle="modal" data-target="#Modal"
                    onClick={handleDamageRoll}>
                        DMG roll
                    </button>
                    <button type="button" className="btn btn-primary m-1" data-toggle="modal" data-target="#Modal"
                    onClick={() => setRollResult(Math.ceil(Math.random() * 10))}>
                        Roll d10
                    </button>
                    <button type="button" className="btn btn-primary m-1" data-toggle="modal" data-target="#Modal"
                    onClick={() => setRollResult(Math.ceil(Math.random() * 20))}>
                        Roll d20
                    </button>
                    <button type="button" className="btn btn-primary m-1" data-toggle="modal" data-target="#Modal"
                    onClick={() => setRollResult(Math.ceil(Math.random() * 8))}>
                        Roll d8
                    </button>
                    <button type="button" className="btn btn-primary m-1" data-toggle="modal" data-target="#Modal"
                    onClick={() => setRollResult(Math.ceil(Math.random() * 6))}>
                        Roll d6
                    </button>                    
                </div>
            </form>
            <Modal roll={rollResult} />
        </div >
    )
}

export default App;