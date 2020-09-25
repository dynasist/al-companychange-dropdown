# Change Company dropdown Control Add-in for Business Central

A simple, dependency-free JavaScript add-in that displays a company dropdown on the top titlebar.

![](https://raw.githubusercontent.com/dynasist/al-companychange-dropdown/master/media/ChangeCompany_Select.gif)

## Features

No external JS libraries are required, it's plain JavaScript (written in TypeScript :-)

**AL controladdin Events:**

|Name    |Description|
|--------|-----------|
|`OnLoad()`|Control load event used to set properties. Runs just before component rendering. |
|`OnError(message: Text)`|Raised whenever a JavaScript error happens within the add-in. Used to avoid "Something went wrong" errors. |

## 1. Dropdown

Single select with no events.

**Methods:**

|Name    |Description|
|--------|-----------|
|`SetOption("key": Text; "value": Text)`|Set dropdown (select element) properties. |
|`SetCompany("name": Text; "title": Text)`|Add dropdown item (name: COMPANYNAME, title: Company display name) |
|`SetCurrentCompany("name": Text)`|Set current value of dropdown (name: COMPANYNAME) |

**Dropdown properties:**

|Name    |Description|
|--------|-----------|
|id|Dropdown CSS id. |
|title|Dropdown hover text. |

## Installation

Download and build the project in AL.

## Usage

Extend any role center and add the controladdin as last element:

```
addlast(rolecenter)
{
    part(ChangeCompanyDropdown; ChangeCompanyDropdownPart_DSK)
    {
        Caption = ' ';
        ApplicationArea = All;
        Visible = true;
    }
}
```

## Development

1. Run `npm install` or `yarn` to restore javascript-related modules.
2. Start `tsc: watch` VSCode task

Contents of `ChangeCompany/.vscode/tasks.json` should you need it:
```
"tasks": [
    {
        "type": "typescript",
        "tsconfig": "tsconfig.json",
        "option": "watch",
        "problemMatcher": [
            "$tsc-watch"
        ]
    }
]
```

3. Use `ChangeCompany/src/TypeScript` to modify javascript bits.

