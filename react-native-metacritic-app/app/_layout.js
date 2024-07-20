import { Link, Stack } from "expo-router";
import { View, Pressable } from "react-native";
import { Logo } from "../components/Logo";
import { styled } from "nativewind";
import { CircleInfoIcon } from "../components/Icons";

const StyledPressable = styled(Pressable);

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <StyledPressable className={`active:opacity-80`}>
                <CircleInfoIcon />
              </StyledPressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
