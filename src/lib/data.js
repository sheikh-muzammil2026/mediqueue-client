export const getAvailableTutorsPromise = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/availableTutors`);
    const data = await res.json();
    return data;
};

export const getAllTutorsPromise = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/allTutors`);
    const data = await res.json();
    return data;
};

export const getSingleTutorPromise = async (tutorId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/allTutors/${tutorId}`);
    const data = await res.json();
    return data;
};

export const getBookedSessionPromise = async (userId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookedSession/${userId}`);
    const data = await res.json();
    return data;
};