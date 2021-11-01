import React, { useState } from "react";
import { View } from "react-native";

import Profile from "../../components/profile";
import { Background } from "../../components/background";

import { styles } from "./styles";
import ButtonAdd from "../../components/addButton";
import CategorySelect from "../../components/categorySelect";


export default function Home() {

    const [category, setCategory] = useState('');

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <Background>
            <View>
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd />
                </View>

                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>

        </Background>
    );
}