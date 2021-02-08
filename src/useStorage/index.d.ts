declare type TWay = 'sessionStorage' | 'localStorage';
declare const useStorage: (name: string, way: TWay) => any[];
export default useStorage;
