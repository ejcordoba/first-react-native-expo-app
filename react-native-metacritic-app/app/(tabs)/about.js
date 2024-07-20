import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeScreenIcon } from "../../components/Icons";

import { styled } from "nativewind";
import { Screen } from "../../components/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el projecto
        </Text>
        <Text className="text-white mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tortor nunc, semper ut ante tristique, blandit fringilla augue.
          Integer non ultrices sem. Nulla consequat metus quis velit laoreet
          volutpat sit amet et dui. Phasellus egestas arcu in enim posuere,
          vitae lobortis libero viverra. Donec tempor ultrices lacus vel mattis.
          Praesent ac tempor sem. Fusce porta lectus at magna ullamcorper, eu
          lacinia tellus lacinia.
        </Text>
        <Text className="text-white mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tortor nunc, semper ut ante tristique, blandit fringilla augue.
          Integer non ultrices sem. Nulla consequat metus quis velit laoreet
          volutpat sit amet et dui. Phasellus egestas arcu in enim posuere,
          vitae lobortis libero viverra. Donec tempor ultrices lacus vel mattis.
          Praesent ac tempor sem. Fusce porta lectus at magna ullamcorper, eu
          lacinia tellus lacinia.
        </Text>
        <Text className="text-white mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tortor nunc, semper ut ante tristique, blandit fringilla augue.
          Integer non ultrices sem. Nulla consequat metus quis velit laoreet
          volutpat sit amet et dui. Phasellus egestas arcu in enim posuere,
          vitae lobortis libero viverra. Donec tempor ultrices lacus vel mattis.
          Praesent ac tempor sem. Fusce porta lectus at magna ullamcorper, eu
          lacinia tellus lacinia.
        </Text>
        <Text className="text-white mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tortor nunc, semper ut ante tristique, blandit fringilla augue.
          Integer non ultrices sem. Nulla consequat metus quis velit laoreet
          volutpat sit amet et dui. Phasellus egestas arcu in enim posuere,
          vitae lobortis libero viverra. Donec tempor ultrices lacus vel mattis.
          Praesent ac tempor sem. Fusce porta lectus at magna ullamcorper, eu
          lacinia tellus lacinia.
        </Text>
      </ScrollView>
    </Screen>
  );
}
