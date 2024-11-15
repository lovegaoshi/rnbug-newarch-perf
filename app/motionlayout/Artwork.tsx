import { TouchableWithoutFeedback, Dimensions, Image } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { useEffect, useState } from "react";
const MinPlayerHeight = 75;
interface Props {
  miniplayerHeight: SharedValue<number>;
  opacity: SharedValue<number>;
  onPress: () => void;
  expand: () => void;
}

export default ({ miniplayerHeight, opacity, onPress, expand }: Props) => {
  const { width } = Dimensions.get("window");

  const artworkWidth = useDerivedValue(() => {
    return Math.min(miniplayerHeight.value - 25, width);
  });
  const artworkBottom = useDerivedValue(() => {
    const val = miniplayerHeight.value - MinPlayerHeight - 5;
    const overflowBottom = Math.max(0, miniplayerHeight.value - 100 - width);
    return Math.min(val - overflowBottom);
  });
  const artworkLeft = useDerivedValue(() => {
    const val = 5 + MinPlayerHeight - miniplayerHeight.value;
    if (val < 0) return 0;
    return val;
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: artworkWidth.value,
      height: artworkWidth.value,
      left: artworkLeft.value,
      opacity: opacity.value,
      zIndex: opacity.value > 0 ? 1 : -1,
    };
  });

  const onImagePress = () => {
    if (miniplayerHeight.value === MinPlayerHeight) {
      return expand();
    }
    if (artworkWidth.value === width) {
      return onPress();
    }
  };
  return (
    <Animated.View style={[{}, animatedStyle]}>
      <TouchableWithoutFeedback onPress={onImagePress}>
        <Image
          style={{ flex: 1 }}
          source={{
            uri: "https://rntp.dev/example/Longing.jpeg",
          }}
        />
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};
