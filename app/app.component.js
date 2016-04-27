System.register(['angular2/core', './contact/contact-list.component', './contact/newcontact.component', './schedular/schedular.component', "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_list_component_1, newcontact_component_1, schedular_component_1, router_1, router_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            },
            function (newcontact_component_1_1) {
                newcontact_component_1 = newcontact_component_1_1;
            },
            function (schedular_component_1_1) {
                schedular_component_1 = schedular_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n            <header> \n                <nav>\n                    <a [routerLink] = \"['Contacts']\"> Contacts </a>\n                    <a [routerLink] = \"['NewContacts']\"> New Contacts </a>\n                    <a [routerLink] = \"['Schedular']\"> Schedule Appointment </a>\n                    \n                    \n                </nav>\n            </header>\n                \n                <div class=\"main\">\n                    <router-outlet></router-outlet>\n                    \n                </div>\n                \n\n    ",
                        directives: [contact_list_component_1.ContactListComponent, newcontact_component_1.NewContactComponent, router_1.ROUTER_DIRECTIVES, schedular_component_1.Schedular],
                        styleUrls: ['src/css/app.css'],
                    }),
                    router_2.RouteConfig([
                        { path: '/contacts', name: 'Contacts', component: contact_list_component_1.ContactListComponent, useAsDefault: true },
                        { path: '/newcontacts', name: 'NewContacts', component: newcontact_component_1.NewContactComponent },
                        { path: '/schedular', name: 'Schedular', component: schedular_component_1.Schedular }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNENBO2dCQUFBO2dCQUVBLENBQUM7Z0JBckNEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsUUFBUSxFQUFFLHlpQkFpQlQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsNkNBQW9CLEVBQUUsMENBQW1CLEVBQUUsMEJBQWlCLEVBQUMsK0JBQVMsQ0FBQzt3QkFDcEYsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7cUJBQ2pDLENBQUM7b0JBSUQsb0JBQVcsQ0FBQzt3QkFFTCxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUUsWUFBWSxFQUFDLElBQUksRUFBQzt3QkFDekYsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDBDQUFtQixFQUFDO3dCQUMzRSxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsK0JBQVMsRUFBQztxQkFHaEUsQ0FBQzs7Z0NBQUE7Z0JBSU4sbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29udGFjdExpc3RDb21wb25lbnR9IGZyb20gJy4vY29udGFjdC9jb250YWN0LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7TmV3Q29udGFjdENvbXBvbmVudH0gZnJvbSAnLi9jb250YWN0L25ld2NvbnRhY3QuY29tcG9uZW50JztcbmltcG9ydCB7U2NoZWR1bGFyfSBmcm9tICcuL3NjaGVkdWxhci9zY2hlZHVsYXIuY29tcG9uZW50JztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgPGhlYWRlcj4gXG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdID0gXCJbJ0NvbnRhY3RzJ11cIj4gQ29udGFjdHMgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua10gPSBcIlsnTmV3Q29udGFjdHMnXVwiPiBOZXcgQ29udGFjdHMgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua10gPSBcIlsnU2NoZWR1bGFyJ11cIj4gU2NoZWR1bGUgQXBwb2ludG1lbnQgPC9hPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbQ29udGFjdExpc3RDb21wb25lbnQsIE5ld0NvbnRhY3RDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTLFNjaGVkdWxhcl0sXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvYXBwLmNzcyddLFxufSlcblxuXG5cbkBSb3V0ZUNvbmZpZyhbXG5cbiAgICAgICAge3BhdGg6ICcvY29udGFjdHMnLCBuYW1lOiAnQ29udGFjdHMnLCBjb21wb25lbnQ6IENvbnRhY3RMaXN0Q29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6dHJ1ZX0sXG4gICAgICAgIHtwYXRoOiAnL25ld2NvbnRhY3RzJywgbmFtZTogJ05ld0NvbnRhY3RzJywgY29tcG9uZW50OiBOZXdDb250YWN0Q29tcG9uZW50fSxcbiAgICAgICAge3BhdGg6ICcvc2NoZWR1bGFyJywgbmFtZTogJ1NjaGVkdWxhcicsIGNvbXBvbmVudDogU2NoZWR1bGFyfVxuXG5cbiAgICBdKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
