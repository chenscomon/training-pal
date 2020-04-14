import React, { useContext } from 'react';
import uuid from 'uuid/v1';
import Card from '../atoms/Card';
import PalMove from '../images/movecard.PNG';
import PalCal from '../images/pCal.JPG';
import pDefense from '../images/fight.PNG';
import { LangContext } from '../context/LangContext';

const Activities = () => {

    const { heb } = useContext(LangContext);

    const acts = [
        {title: 'Movement', image: PalMove, link: 'Movement', id: uuid()},
        {title: 'Martial Arts', image: pDefense, link: 'martialarts', id: uuid()},
        {title: 'Calisthenics', image: PalCal, link: 'Movement', id: uuid()},
        {title: 'Personal Training', image: 'https://scochrane.digstonehill.org/wp-content/uploads/2018/11/Depositphotos_90062916_original-1600x1600.jpg', link: 'Movement', id: uuid()},
        {title: 'Group Training', image: 'https://www.runtastic.com/blog/wp-content/uploads/2016/10/23.10._Running-And-Weight-Training-3.jpg', link: 'Movement', id: uuid()},
        {title: 'Online Training', image: 'https://www.freeeducator.com/wp-content/uploads/2019/07/online-training-1-800x600.jpg', link: 'Movement', id: uuid()}
    ];

    const hebActs = [
        {title: 'Movement', image: PalMove, link: 'Movement', id: uuid()},
        {title: 'אומנויות לחימה', image: pDefense, link: 'martialarts', id: uuid()},
        {title: 'משקל גוף', image: PalCal, link: 'Movement', id: uuid()},
        {title: 'אימונים אישיים', image: 'https://scochrane.digstonehill.org/wp-content/uploads/2018/11/Depositphotos_90062916_original-1600x1600.jpg', link: 'Movement', id: uuid()},
        {title: 'אימונים קבוצתיים', image: 'https://www.runtastic.com/blog/wp-content/uploads/2016/10/23.10._Running-And-Weight-Training-3.jpg', link: 'Movement', id: uuid()},
        {title: 'אימוני אונליין', image: 'https://www.freeeducator.com/wp-content/uploads/2019/07/online-training-1-800x600.jpg', link: 'Movement', id: uuid()}
    ];

    const list = acts.map(val => <Card key={val.id} title={val.title} img={val.image} link={val.link} />)
    const hebList = hebActs.map(val => <Card key={val.id} title={val.title} img={val.image} link={val.link} />)

    const page = heb ? (
        <div className="actImage">
            <div className="activities">
                {hebList}
            </div>
        </div>
    ) : (
        <div className="actImage">
            <div className="activities">
                {list}
            </div>
        </div>
    );

    return (
        <div>
            {page}
        </div>
    )
}

export default Activities;