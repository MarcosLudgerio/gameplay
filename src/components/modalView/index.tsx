import React, { ReactNode } from "react";
import { View, Modal, ModalProps, TouchableWithoutFeedback } from "react-native";

import { Background } from "../background";

import { styles } from "./styles";

type Props = ModalProps & {
    children: ReactNode;
    closeGuild: () => void;
};

export function ModalView({ children, closeGuild, ...rest }: Props) {
    return (
        <Modal transparent statusBarTranslucent animationType="slide" {...rest}>
            <TouchableWithoutFeedback onPress={closeGuild}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Background>
                            <View style={styles.bar} />
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}