var Attributes;
(function (Attributes) {
    Attributes["dark"] = "#000";
    Attributes["clear"] = "#FFF";
})(Attributes || (Attributes = {}));
console.log(Attributes.dark);
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 0] = "ADMIN";
    StatusPermission[StatusPermission["USER"] = 1] = "USER";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission);
