package expo.modules.fifinativescreens

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.ui.ExpoUIView
import expo.modules.kotlin.records.recordFromMap
import expo.modules.ui.ModifierRegistry

class FifiNativeScreensModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("FifiNativeScreens")

    Events("onChange")

    Constant("PI") {
      Math.PI
    }

    Function("hello") {
      "Hello world! 👋"
    }

    AsyncFunction("setValueAsync") { value: String ->
      sendEvent("onChange", mapOf(
        "value" to value
      ))
    }

    View(FifiNativeScreensView::class) {
      // Defines an event that the view can send to JavaScript.
      Events("onTap")
    }

    Class(FifiNativeScreensModuleSharedObject::class) {
      Constructor {
        val instance = FifiNativeScreensModuleSharedObject(appContext)
        return@Constructor instance
      }

      Property("count")
        .get { ref: FifiNativeScreensModuleSharedObject ->
          ref.count
        }
        .set { ref: FifiNativeScreensModuleSharedObject, count: Int ->
          ref.count = count
        }
    }

    ExpoUIView<FifiNativeScreensComposeViewProps>("FifiNativeScreensComposeView") {
      Content { props ->
        FifiNativeScreensComposeViewContent(props)
      }
    }

    OnCreate {
      ModifierRegistry.register("fifiNativeScreensComposeModifier") { params, _, _, _ ->
        recordFromMap<FifiNativeScreensComposeModifierParams>(params).toModifier()
      }
    }
  }
}
