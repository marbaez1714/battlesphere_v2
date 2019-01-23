import React from 'react';
import MagicCard from './card';

export default function CardSearch(props) {

    const styles = {
        cardSearchContainer: {
            flexGrow: '1',
            flexWrap: 'wrap',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '50vw'
        },
        formBox: {
            alignItems: 'flex-start',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1vh',
            marginBottom: '1vh',
        },
        searchInputBoxHolder: {
            width: '100%'
        },
        searchInputBox: {
            width: '40vw',
            height: '5vh',
            borderColor: '#2b2b2b',
            borderRightStyle: 'none',
            borderWidth: '1px',
            boxSizing: 'border-box',
            fontSize: '2vh',
            paddingLeft: '1vw'
        },
        searchInputButton: {
            width: '10vw',
            height: '5vh',
            borderWidth: '1px',
            borderColor: '#2b2b2b',
            borderStyle: 'solid',
            borderLeftStyle: 'none',
            boxSizing: 'border-box',
            verticalAlign: 'middle',
            fontSize: '2vh'
        }
    }

    return (
        <div className='cardSearchContainer' style={styles.cardSearchContainer}>
            {/* Search Box */}
            <div className='searchInputBoxHolder' style={styles.searchInputBoxHolder}>
                <form className='formBox' style={styles.formBox}>
                    <input className='searchInputBox' type='text' style={styles.searchInputBox} />
                    <button className='searchInputButton' style={styles.searchInputButton} ><i className="fas fa-search" /></button>
                </form>
            </div>

            <MagicCard />
            <MagicCard />
            <MagicCard />
            <MagicCard />
            <MagicCard />
            <MagicCard />


        </div>
    )
}