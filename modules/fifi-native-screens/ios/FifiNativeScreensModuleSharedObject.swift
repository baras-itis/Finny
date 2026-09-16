import ExpoModulesCore

public class FifiNativeScreensModuleSharedObject: SharedObject {
  var count: Int = 0

  override public func sharedObjectDidRelease() {
    super.sharedObjectDidRelease()
  }
}
