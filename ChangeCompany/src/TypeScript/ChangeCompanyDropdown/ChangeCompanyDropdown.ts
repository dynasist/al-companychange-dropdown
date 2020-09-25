class ChangeCompanyDropdown extends BaseControl {

    companies: Array<CompanyOption> = [];
    currentCompany: string;

    constructor() {
        super();
        this.controlClass = 'al-select';

        window.SetCompany = ((name: string, title: string) => {
            this.setCompany(name, title);
        }).bind(this);

        window.SetCurrentCompany = ((name: string) => {
            this.currentCompany = name;
        }).bind(this);
    }

    setCompany(name: string, title: any): void {
        this.companies.push({ Name: name, Title: title });
    }

    create() {
        let select: HTMLElement = this.container.querySelector(`#${this.options.id}`);

        if (!select) {
            select = document.createElement("select");
            select.style.paddingLeft = '10px';
            select.style.paddingRight = '10px';

            if (this.options.id) {
                select.id = this.options.id;
            }

            select.classList.add(this.controlClass);
            if (this.options.type) {
                select.classList.add(`al-select-${this.options.type}`);
            }

            select.title = this.options.title;

            for (let company of this.companies) {
                let option = document.createElement('option');
                option.value = company.Name;
                option.innerHTML = company.Title;
                option.selected = this.currentCompany == company.Name;

                select.append(option);
            }
        }

        select.addEventListener("change", ((e: Event) => {
            let url = window.top.document.location;
            let selectedValue = (e.target as HTMLSelectElement).value;
            let finalUrl = `${url.origin}${url.pathname}?company=${encodeURIComponent(selectedValue)}`;
            window.top.document.location.assign(finalUrl);
        }).bind(this));

        if (this.container) {
            this.container.append(select);
        } else {
            console.log('companychange dropdown container is empty', this.container, window.parent);
        }
    }

    setup() {
        Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("OnLoad", [], false, (() => {
            this.create();
        }).bind(this));
    }
}
