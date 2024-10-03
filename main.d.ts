declare module 'esc-file-replace-substring-between-comments' {
  export const fileReplaceSubstringBetweenComments: (
    filePath   : string, 
    purpose    : string, 
    newContents: string, 
    ifNotFound?: 'append', 
    changedLogF?  : (message: string) => void | null, 
    notFoundLogF? : (message: string) => void | null, 
    unchangedLogF?: (message: string) => void | null
  ) => boolean;
  export default fileReplaceSubstringBetweenComments;
}
