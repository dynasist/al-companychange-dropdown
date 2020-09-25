var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ChangeCompanyDropdown = (function (_super) {
    __extends(ChangeCompanyDropdown, _super);
    function ChangeCompanyDropdown() {
        var _this = _super.call(this) || this;
        _this.companies = [];
        _this.controlClass = 'al-select';
        window.SetCompany = (function (name, title) {
            _this.setCompany(name, title);
        }).bind(_this);
        window.SetCurrentCompany = (function (name) {
            _this.currentCompany = name;
        }).bind(_this);
        return _this;
    }
    ChangeCompanyDropdown.prototype.setCompany = function (name, title) {
        this.companies.push({ Name: name, Title: title });
    };
    ChangeCompanyDropdown.prototype.create = function () {
        var select = this.container.querySelector("#" + this.options.id);
        if (!select) {
            select = document.createElement("select");
            select.style.paddingLeft = '10px';
            select.style.paddingRight = '10px';
            if (this.options.id) {
                select.id = this.options.id;
            }
            select.classList.add(this.controlClass);
            if (this.options.type) {
                select.classList.add("al-select-" + this.options.type);
            }
            select.title = this.options.title;
            for (var _i = 0, _a = this.companies; _i < _a.length; _i++) {
                var company = _a[_i];
                var option = document.createElement('option');
                option.value = company.Name;
                option.innerHTML = company.Title;
                option.selected = this.currentCompany == company.Name;
                select.append(option);
            }
        }
        select.addEventListener("change", (function (e) {
            var url = window.top.document.location;
            var selectedValue = e.target.value;
            var finalUrl = "" + url.origin + url.pathname + "?company=" + encodeURIComponent(selectedValue);
            window.top.document.location.assign(finalUrl);
        }).bind(this));
        if (this.container) {
            this.container.append(select);
        }
        else {
            console.log('companychange dropdown container is empty', this.container, window.parent);
        }
    };
    ChangeCompanyDropdown.prototype.setup = function () {
        var _this = this;
        Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("OnLoad", [], false, (function () {
            _this.create();
        }).bind(this));
    };
    return ChangeCompanyDropdown;
}(BaseControl));
