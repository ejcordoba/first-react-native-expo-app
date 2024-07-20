import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { FlatList, View, ActivityIndicator, Pressable } from "react-native";
import { getLatestGames } from "../lib/metacritic.js";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard.jsx";
import { Logo } from "./Logo.jsx";
import { CircleInfoIcon } from "./Icons.jsx";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View className="flex-row justify-between items-center mb-4 mx-2">
        <View>
          <Logo />
        </View>
        <Link asChild href="/about">
          <StyledPressable className={`active:opacity-80`}>
            <CircleInfoIcon />
          </StyledPressable>
        </Link>
      </View>
      {games.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
