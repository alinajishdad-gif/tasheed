// هذا الكود يطابق هيكل الطلبات (Requests) الموجود في صورك
const BASE_URL = "https://tasheed.onrender.com/api";

export const getData = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        if (!response.ok) throw new Error("Network response was not ok");
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
