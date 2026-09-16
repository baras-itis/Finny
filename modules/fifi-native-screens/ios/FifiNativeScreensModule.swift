import ExpoModulesCore
import ExpoUI

public class FifiNativeScreensModule: Module {
  public func definition() -> ModuleDefinition {
    Name("FifiNativeScreens")

    Events("onChange")

    Constant("PI") {
      Double.pi
    }

    Function("hello") {
      return "Hello world! 👋"
    }

    AsyncFunction("setValueAsync") { (value: String) in
      self.sendEvent("onChange", [
        "value": value
      ])
    }

    View(FifiNativeScreensView.self) {
      Events("onTap")
    }

    Class(FifiNativeScreensModuleSharedObject.self) {
      Constructor { () -> FifiNativeScreensModuleSharedObject in
        return FifiNativeScreensModuleSharedObject()
      }

      Property("count") { (ref: FifiNativeScreensModuleSharedObject) -> Int in
        return ref.count
      }
      .set { (ref: FifiNativeScreensModuleSharedObject, count: Int) in
        ref.count = count
      }
    }

    ExpoUIView(FifiNativeScreensSwiftUIView.self)

    OnCreate {
      ViewModifierRegistry.register("fifiNativeScreensSwiftUIModifier") { params, appContext, _ in
        return try FifiNativeScreensSwiftUIModifier(from: params, appContext: appContext)
      }
    }

    OnDestroy {
      ViewModifierRegistry.unregister("fifiNativeScreensSwiftUIModifier")
    }
  }
}
