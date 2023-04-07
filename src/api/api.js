import axios from "axios"

const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
}

export const axiosQuizData = async(difficulty, amount) => {
    const url =`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const response = await axios.get(url);
    return response.data.results.map((dt) => ({
        ...dt,
        answers: shuffleArray([...dt.incorrect_answers, dt.correct_answer])
    }))
}