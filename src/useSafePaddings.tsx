import {useSafeAreaInsets} from "react-native-safe-area-context";

interface Paddings {
    bottom: number;
    left: number;
    right: number;
    top: number;
}

export function useSafePaddings(): Paddings {
    const safeAreaInsets = useSafeAreaInsets();
    const style: Paddings = {
        bottom: safeAreaInsets.bottom,
        left: safeAreaInsets.left,
        right: safeAreaInsets.right,
        top: safeAreaInsets.top,
    };
    return style;
}
