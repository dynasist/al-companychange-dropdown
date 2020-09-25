controladdin "ChangeCompanyDropdown_DSK"
{
    RequestedHeight = 36;
    MinimumHeight = 32;
    MinimumWidth = 84;
    VerticalStretch = false;
    HorizontalStretch = true;
    VerticalShrink = true;
    HorizontalShrink = true;

    Scripts =
        'src/Controls/BaseControl.js',
        'src/Controls/ChangeCompanyDropdown/ChangeCompanyDropdown.js';
    StartupScript =
        'src/Controls/ChangeCompanyDropdown/startup.js';

    //#region Base Events

    event OnLoad();

    event OnError(message: Text);

    //#endregion

    procedure SetOption("key": Text; "value": Text);

    procedure SetCompany(name: Text; title: Text);

    procedure SetCurrentCompany(name: Text);
}