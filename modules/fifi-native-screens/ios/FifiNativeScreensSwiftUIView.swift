import SwiftUI
import ExpoModulesCore
import ExpoUI

final class FifiNativeScreensSwiftUIViewProps: UIBaseViewProps {
  @Field var title: String = ""
}

struct FifiNativeScreensSwiftUIView: ExpoSwiftUI.View {
  @ObservedObject public var props: FifiNativeScreensSwiftUIViewProps

  var body: some View {
    VStack {
      Text(props.title)
        .font(.headline)
      Children()
    }
  }
}
