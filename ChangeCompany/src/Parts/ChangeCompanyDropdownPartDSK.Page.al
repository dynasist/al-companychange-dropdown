page 50090 "ChangeCompanyDropdownPart_DSK"
{
    Caption = '';
    PageType = CardPart;
    UsageCategory = None;

    layout
    {
        area(Content)
        {
            usercontrol(ChangeCompanyDropdown; "ChangeCompanyDropdown_DSK")
            {
                ApplicationArea = All;

                trigger OnLoad()
                var
                    Comp: Record Company;
                begin
                    CurrPage.ChangeCompanyDropdown.SetOption('id', 'ChangeCompanyDropdown_DSK');
                    CurrPage.ChangeCompanyDropdown.SetOption('caption', 'Change Company');
                    CurrPage.ChangeCompanyDropdown.SetOption('title', 'Change current company.');

                    if Comp.FindSet() then
                        repeat
                            CurrPage.ChangeCompanyDropdown.SetCompany(Comp.Name, Comp."Display Name");
                        until Comp.Next() = 0;

                    CurrPage.ChangeCompanyDropdown.SetCurrentCompany(CompanyName());
                end;
            }
        }
    }
}