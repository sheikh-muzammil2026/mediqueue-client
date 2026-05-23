export const getAvailableTutorsPromise = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/availableTutors`);
    const data = await res.json();
    return data;
};

export const getAllTutorsPromise = async (searchParams) => {
    const { search = '', startDate = '', endDate = '' } = searchParams || {};
    
  
    const queryString = `?search=${search}&startDate=${startDate}&endDate=${endDate}`;
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allTutors${queryString}`, {
        cache: 'no-store' 
    });
    const data = await res.json();
    return data;
};

export const getSingleTutorPromise = async (tutorId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allTutors/${tutorId}`);
    const data = await res.json();
    return data;
};

export const getBookedSessionPromise = async (userId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookedSession/${userId}`);
    const data = await res.json();
    return data;
};

export const getMyTutorsPromise = async (userId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/MyTutors/${userId}`);
    const data = await res.json();
    return data;
};