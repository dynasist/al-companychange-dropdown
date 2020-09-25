interface Window {

    // Generic options
    SetOption(key: string, value: any): void;

    SetCompany(name: string, title: string): void;

    SetCurrentCompany(name: string): void;
}

interface CompanyOption {
    Name: string;
    Title: string;
}