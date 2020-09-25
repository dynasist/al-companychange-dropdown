pageextension 50090 "BusManRoleCntrExt_DSK" extends "Business Manager Role Center"
{
    layout
    {
        addlast(rolecenter)
        {
            part(ChangeCompanyDropdown; ChangeCompanyDropdownPart_DSK)
            {
                Caption = ' ';
                ApplicationArea = All;
                Visible = true;
            }
        }
    }

}