export const getAvailableTutorsPromise = async() =>{
    const res = await fetch("http://localhost:5000/availableTutors");
    const data = await res.json()
    return data;
}



export const getAllTutorsPromise = async() =>{
    const res = await fetch("http://localhost:5000/allTutors");
    const data = await res.json()
    return data;
}

export const getSingleTutorPromise = async(tutorId) =>{
    const res = await fetch(`http://localhost:5000/allTutors/${tutorId}`);
    const data = await res.json()
    return data;
}

