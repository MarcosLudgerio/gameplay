import React from "react";
import { ScrollView } from "react-native";

import { categories } from "../../utils/categories";
import { Category } from "../category";

import { styles } from "./styles";

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckSelect?: boolean;
}

export function CategorySelect({ categorySelected, setCategory, hasCheckSelect = false }: Props) {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 40 }} style={styles.container}>
            {
                categories.map(category => (
                    <Category
                        title={category.title}
                        key={category.id}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                        hasCheckBox={hasCheckSelect}
                    />
                ))
            }
        </ScrollView>
    );
}