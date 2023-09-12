import React from "react";
import { Modal, View, StyleSheet } from "react-native";

const ModalWrapper = ({ callBack, children, visibility }) => {
  return (
    <>
      {visibility && (
        <View
          style={{
            ...StyleSheet.absoluteFill,
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        ></View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibility}
        onRequestClose={() => callBack()}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalWrapper;
