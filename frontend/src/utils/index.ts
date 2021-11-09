export const truncateWord = (word: string, length = 20): string => {
	const newWord = word?.split(" ").splice(0, length).join(" ");
	return newWord;
};
