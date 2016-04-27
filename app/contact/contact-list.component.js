System.register(['angular2/core', './contactdetail.component', './contact.service'], function(exports_1, context_1) {
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
    var core_1, contactdetail_component_1, contact_service_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contactdetail_component_1_1) {
                contactdetail_component_1 = contactdetail_component_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent(_contactService) {
                    this._contactService = _contactService;
                    this.selectedContact = null;
                }
                ContactListComponent.prototype.onSelect = function (contact) {
                    console.log(contact);
                    this.selectedContact = contact;
                };
                ContactListComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._contactService.getContacts().then(function (contacts) { return _this.contactarray = contacts; });
                };
                ContactListComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        template: "\n\t\t\t\t\n\t\t\t\t<ul> \n\t\t\t\t\t<li *ngFor=\"#contact of contactarray\" (click)=\"onSelect(contact)\" \t\n\t\t\t\t\t[class.is-awesome] = \"selectedContact=== contact\"\n\t\t\t\t> {{contact.firstName}} {{contact.lastName}}\n\t\t\t\t\t</li></ul>\n\n\n\t\t\t\t\t<!--This is how you pass the parameter from parent component to child Component -->\n\t\t\t\t\t<contact-detail *ngIf=\"selectedContact !==null\"[contact] = \"selectedContact\"></contact-detail>\n\t\t\t\t\t\n\t\t\t\t\n\t",
                        directives: [contactdetail_component_1.ContactDetailComponent],
                        providers: [contact_service_1.ContactService],
                        styleUrls: ['src/css/contact-list.css']
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QvY29udGFjdC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTZCQTtnQkFNQyw4QkFBcUIsZUFBK0I7b0JBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFLN0Msb0JBQWUsR0FBQyxJQUFJLENBQUM7Z0JBSDVCLENBQUM7Z0JBTUEsdUNBQVEsR0FBUixVQUFTLE9BQU87b0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRXJCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO2dCQUMvQixDQUFDO2dCQUlGLDBDQUFXLEdBQVg7b0JBQUEsaUJBR0M7b0JBREEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFtQixJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBRyxRQUFRLEVBQTVCLENBQTRCLENBQUMsQ0FBQztnQkFDaEcsQ0FBQztnQkFFRCx1Q0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQztnQkFwREY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLHFlQWFUO3dCQUVELFVBQVUsRUFBRSxDQUFDLGdEQUFzQixDQUFDO3dCQUNwQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3dCQUMzQixTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztxQkFFdkMsQ0FBQzs7d0NBQUE7Z0JBZ0NGLDJCQUFDO1lBQUQsQ0E5QkEsQUE4QkMsSUFBQTtZQTlCRCx1REE4QkMsQ0FBQSIsImZpbGUiOiJjb250YWN0L2NvbnRhY3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NvbnRhY3REZXRhaWxDb21wb25lbnR9IGZyb20gJy4vY29udGFjdGRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb250YWN0U2VydmljZX0gZnJvbSAnLi9jb250YWN0LnNlcnZpY2UnO1xuaW1wb3J0IHtDb250YWN0fSBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250YWN0LWxpc3QnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdFx0XHRcblx0XHRcdFx0PHVsPiBcblx0XHRcdFx0XHQ8bGkgKm5nRm9yPVwiI2NvbnRhY3Qgb2YgY29udGFjdGFycmF5XCIgKGNsaWNrKT1cIm9uU2VsZWN0KGNvbnRhY3QpXCIgXHRcblx0XHRcdFx0XHRbY2xhc3MuaXMtYXdlc29tZV0gPSBcInNlbGVjdGVkQ29udGFjdD09PSBjb250YWN0XCJcblx0XHRcdFx0PiB7e2NvbnRhY3QuZmlyc3ROYW1lfX0ge3tjb250YWN0Lmxhc3ROYW1lfX1cblx0XHRcdFx0XHQ8L2xpPjwvdWw+XG5cblxuXHRcdFx0XHRcdDwhLS1UaGlzIGlzIGhvdyB5b3UgcGFzcyB0aGUgcGFyYW1ldGVyIGZyb20gcGFyZW50IGNvbXBvbmVudCB0byBjaGlsZCBDb21wb25lbnQgLS0+XG5cdFx0XHRcdFx0PGNvbnRhY3QtZGV0YWlsICpuZ0lmPVwic2VsZWN0ZWRDb250YWN0ICE9PW51bGxcIltjb250YWN0XSA9IFwic2VsZWN0ZWRDb250YWN0XCI+PC9jb250YWN0LWRldGFpbD5cblx0XHRcdFx0XHRcblx0XHRcdFx0XG5cdGAsXG5cdFxuXHRkaXJlY3RpdmVzOiBbQ29udGFjdERldGFpbENvbXBvbmVudF0sXG5cdHByb3ZpZGVyczogW0NvbnRhY3RTZXJ2aWNlXSxcblx0c3R5bGVVcmxzOiBbJ3NyYy9jc3MvY29udGFjdC1saXN0LmNzcyddXG5cdFxufSlcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG5cbnB1YmxpYyBjb250YWN0YXJyYXk6IENvbnRhY3QgW107XG5cdFxuXG5cdGNvbnN0cnVjdG9yIChwcml2YXRlIF9jb250YWN0U2VydmljZTogQ29udGFjdFNlcnZpY2Upe1xuXG5cdH1cblxuXG5cdHB1YmxpYyBzZWxlY3RlZENvbnRhY3Q9bnVsbDtcblxuXG5cdFx0b25TZWxlY3QoY29udGFjdCl7XG5cdFx0Y29uc29sZS5sb2coY29udGFjdCk7XG5cblx0XHR0aGlzLnNlbGVjdGVkQ29udGFjdCA9IGNvbnRhY3Q7XG5cdFx0fVxuXG5cblxuXHRnZXRDb250YWN0cygpe1xuXHRcdFxuXHRcdHRoaXMuX2NvbnRhY3RTZXJ2aWNlLmdldENvbnRhY3RzKCkudGhlbigoY29udGFjdHM6IENvbnRhY3RbXSkgPT4gdGhpcy5jb250YWN0YXJyYXkgPSBjb250YWN0cyk7XG5cdH1cblxuXHRuZ09uSW5pdCgpOmFueXtcblx0XHR0aGlzLmdldENvbnRhY3RzKCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
