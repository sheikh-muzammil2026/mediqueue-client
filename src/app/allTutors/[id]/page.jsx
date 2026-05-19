import { getSingleTutorPromise } from '@/lib/data';
import React from 'react';

const TutorDetailsPage = async({params}) => {
    const {id} = await params;
    const tutor = await getSingleTutorPromise(id)
    console.log(tutor, "from tutor details page")
    return (
        <div>
            this is details page
        </div>
    );
};

export default TutorDetailsPage;


/**
 * 1. book session btn theke click kora hobe. 
 * dynamic route e ID soho hajir hoye zabe. 
 * details page theke params ID diye API call kora hobe. 
 * server theke API res send korbe . 
 * database server er res onusare single data send korbe
 * */ 