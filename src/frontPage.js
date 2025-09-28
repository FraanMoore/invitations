import React from 'react';
import EnvelopCard from './Idea_one/components/EnvelopeCard';
import Body from './Idea_one/components/Body';
import BodyIdeaTwo from './Idea_two/BodyIdeaTwo';
import { Link } from 'react-router-dom';

const FrontPage = () => {
    return (
        <>
            <button style={{ marginRight: '10px', padding: '8px 16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
                <Link to="/idea1" style={{ color: 'white', textDecoration: 'none' }}>
                    Go to idea 1
                </Link>
            </button>

            <button style={{ marginRight: '10px', padding: '8px 16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
                <Link to="/idea2" style={{ color: 'white', textDecoration: 'none' }}>
                    Go to idea 2
                </Link>
            </button>

        </>
    );
}

export default FrontPage;