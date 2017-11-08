

(function(_) {
  if (typeof module !== "undefined" && module.exports) {
    // commonjs
    module.exports = _;
  } else {
    // browser
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    for (var key in _) {
      if (hasOwnProperty.call(_, key)) {
        window[key] = _[key];
      }
    }
  }
})({
  CSXSWindowType: CSXSWindowType,
  Version: Version,
  VersionBound: VersionBound,
  VersionRange: VersionRange,
  Runtime: Runtime,
  Extension: Extension,
  CSEvent: CSEvent,
  SystemPath: SystemPath,
  ColorType: ColorType,
  RGBColor: RGBColor,
  Direction: Direction,
  GradientStop: GradientStop,
  GradientColor: GradientColor,
  UIColor: UIColor,
  AppSkinInfo: AppSkinInfo,
  HostEnvironment: HostEnvironment,
  HostCapabilities: HostCapabilities,
  ApiVersion: ApiVersion,
  MenuItemStatus: MenuItemStatus,
  ContextMenuItemStatus: ContextMenuItemStatus,
  CSInterface: CSInterface,
});