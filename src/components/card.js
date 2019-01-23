import React from 'react';



export default function MagicCard(props) {

    const styles = {
        cardContainer: {
            width: '20vw',
            display: 'table',
            margin: '5px'
        },
        cardImage: {
            width: '100%',
            display: 'table-cell'
        }
    }




    return (
        <div className='cardContainer' style={styles.cardContainer}>
            <img className='cardImage' style={styles.cardImage} src='https://img.scryfall.com/cards/normal/en/ima/10.jpg?1530591620' alt='' />
        </div>

    )
}