const { useState } = React;
const axios = window.axios || require('axios'); // Load axios from CDN if available

function DictionaryApp() {
    const [word, setWord] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setData(null);

        try {
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            setData(response.data);
        } catch (err) {
            setError('Word not found');
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Dictionary App</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-3">
                    <label htmlFor="word" className="form-label">Enter a word:</label>
                    <input
                        type="text"
                        id="word"
                        className="form-control"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Search</button>
            </form>
            {error && <p className="text-danger text-center">{error}</p>}
            {data && (
                <div>
                    <h2 className="text-center">Results for "{word}"</h2>
                    {data[0].phonetics.map((phonetic, index) => (
                        <div key={index}>
                            <h3>Phonetic:</h3>
                            <p>{phonetic.text}</p>
                            {phonetic.audio && <audio controls src={phonetic.audio} />}
                        </div>
                    ))}
                    <div>
                        {data[0].meanings.map((meaning, index) => (
                            <div key={index}>
                                <h3>Definition {index + 1}:</h3>
                                <p>{meaning.definitions[0].definition}</p>
                                {meaning.definitions[0].example && (
                                    <p><strong>Example:</strong> {meaning.definitions[0].example}</p>
                                )}
                                {meaning.definitions[0].synonyms.length > 0 && (
                                    <p><strong>Synonyms:</strong> {meaning.definitions[0].synonyms.join(', ')}</p>
                                )}
                                {meaning.definitions[0].antonyms.length > 0 && (
                                    <p><strong>Antonyms:</strong> {meaning.definitions[0].antonyms.join(', ')}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

// Render the DictionaryApp component into the root element
ReactDOM.render(<DictionaryApp />, document.getElementById('root'));
