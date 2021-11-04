import React from "react";
import { View, ScrollView } from "react-native";

import { categories } from "../../utils/categories";
import { Category } from "../category";

import { styles } from "./styles";

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
}

export function CategorySelect({ categorySelected, setCategory }: Props) {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 40 }} style={styles.container}>
            {
                categories.map(category => (
                    <Category
                        title={category.tittle}
                        key={category.id}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                    />
                ))
            }
        </ScrollView>
    );
}