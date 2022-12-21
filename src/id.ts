/**
 * guid like '932ade5e-c515-4807-ac01-73b20ab3fb66'
 */
export const guid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,  (c) => {
        const r = Math.random() * 16 | 0;
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
};

/**
 * id like 'df4unio1opulby2uqh4'
 */
export const newId = () => {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
};
