'use strict';
import fileReplaceSubstring from 'esc-file-replace-substring';

export const fileReplaceSubstringBetweenComments = (filePath, purpose, newContents, ifNotFound, changedLogF, notFoundLogF, unchangedLogF) => {
	const startComment=`#${purpose} starts`, endComment=`#${purpose} ends`, searchRegex=RegExp(`${startComment}[\\w\\W]*?${endComment}\n`);
	return fileReplaceSubstring(filePath, searchRegex, `${startComment}\n${newContents}\n${endComment}\n`, ifNotFound, changedLogF, notFoundLogF, unchangedLogF);
};

export default fileReplaceSubstringBetweenComments;
