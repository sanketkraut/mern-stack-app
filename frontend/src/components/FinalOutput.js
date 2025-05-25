import React, { useState, useEffect, useCallback } from 'react';
import { api1, api2, api3, api4, api5 } from '../services/apiService';
import { useDispatch, useSelector } from 'react-redux';
import { setOutput, clearOutput } from '../features/outputSlice';

function FinalOutput() {
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [id, setId] = useState('');
    const [step1, setStep1] = useState('');
    const [step2, setStep2] = useState('');
    const [step3, setStep3] = useState('');
    const [step4, setStep4] = useState('');
    const dispatch = useDispatch();
    const output = useSelector((state) => state.output.value);

    // Reset all state and output
    const resetAll = useCallback(() => {
        dispatch(clearOutput());
        setError(null);
        setLoading(false);
        setStep1('');
        setStep2('');
        setStep3('');
        setStep4('');
        setId('');
        setInput('');
    }, [dispatch]);

    // Step 1
    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        resetAll();
        setLoading(true);
        try {
            const res1 = await api1(input);
            setStep1(res1.step1);
            setId(res1.id);
        } catch (err) {
            setError('Error in API 1');
            setLoading(false);
        }
    }, [resetAll, input]);

    // Step 2
    useEffect(() => {
        if (id && step1) {
            const callApi2 = async () => {
                try {
                    const res2 = await api2(id, step1);
                    setStep2(res2.step2);
                } catch {
                    setError('Error in API 2');
                    setLoading(false);
                }
            };
            callApi2();
        }
    }, [id, step1]);

    // Step 3
    useEffect(() => {
        if (id && step2) {
            const callApi3 = async () => {
                try {
                    const res3 = await api3(id, step2);
                    setStep3(res3.step3);
                } catch {
                    setError('Error in API 3');
                    setLoading(false);
                }
            };
            callApi3();
        }
    }, [id, step2]);

    // Step 4
    useEffect(() => {
        if (id && step3) {
            const callApi4 = async () => {
                try {
                    const res4 = await api4(id, step3);
                    setStep4(res4.step4);
                } catch {
                    setError('Error in API 4');
                    setLoading(false);
                }
            };
            callApi4();
        }
    }, [id, step3]);

    // Step 5 (final output)
    useEffect(() => {
        if (id && step4) {
            const callApi5 = async () => {
                try {
                    const res5 = await api5(id, step4);
                    dispatch(setOutput(res5.finalOutput));
                } catch {
                    setError('Error in API 5');
                } finally {
                    setLoading(false);
                }
            };
            callApi5();
        }
    }, [id, step4, dispatch]);

    const handleInputChange = useCallback((e) => {
        setInput(e.target.value);
    }, []);

    return (
        <div className="main-card">
            <h1>Final Output</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Enter input"
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Processing...' : 'Submit'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {step1 && <div className="step-output">Step 1: {step1}</div>}
            {step2 && <div className="step-output">Step 2: {step2}</div>}
            {step3 && <div className="step-output">Step 3: {step3}</div>}
            {step4 && <div className="step-output">Step 4: {step4}</div>}
            <div className="final-output">
                <h2>Final Output:</h2>
                {output ? (
                    <pre>{JSON.stringify(output, null, 2)}</pre>
                ) : (
                    <p>No final output yet.</p>
                )}
            </div>
            <button onClick={resetAll} disabled={!output && !step1 && !step2 && !step3 && !step4}>
                Clear All
            </button>
        </div>
    );
}

export default React.memo(FinalOutput);