class BaseControl {
    container: HTMLElement | null = window.top.document.querySelector('#O365_SuiteBranding_container');

    instance?: HTMLElement;

    controlClass: string = '';

    options: Record<string, any> = [];

    constructor() {
        window.SetOption = ((key: string, value: any) => {
            this.setOption(key, value);
        }).bind(this);
    }

    setOption(key: string, value: any): void {
        this.options[key] = value;
    }

    setup(): void { }

    render(): void {
        try {
            this.setup();
        } catch (err) {
            Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("OnError", [err.message]);
        }
    }
}