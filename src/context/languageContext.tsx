import { createContext, ReactNode, useState } from "react";

export type LanguageContextType = {
    language: string;
    setLanguage: (language: string) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext<LanguageContextType | null>(null);

const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [language, setLanguage] = useState<string>("pt");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;