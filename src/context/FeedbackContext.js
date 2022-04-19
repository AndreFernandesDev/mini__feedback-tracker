import { v4 as uuid } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([{ id: 1, text: "This item is from content", rating: 10 }]);
	const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure you want to delete?")) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	const updateFeedback = (id, updItem) => {
		setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)));
	};

	const editFeedback = (item) => {
		setFeedbackEdit({ item: item, edit: true });
	};

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuid();
		console.log(newFeedback);
		setFeedback([newFeedback, ...feedback]);
	};

	return (
		<FeedbackContext.Provider
			value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback }}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
