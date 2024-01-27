import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Platform,
  ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./styles";

const ScheduleRegister = () => {
  const [medicineName, setMedicineName] = useState<string>("");
  const [durationDays, setDurationDays] = useState<string>("");
  const [recurrence, setRecurrence] = useState<Date>(new Date());
  const [show, setShow] = useState(false);

  const isEnabled = medicineName && durationDays && recurrence;

  const handleUsernameChange = (text: string) => setMedicineName(text);
  const handleDurationDays = (days: string) =>
    setDurationDays(days.replace(/[^0-9]/g, ""));
  const handleRecurrence = (selectedTime: Date | undefined) => {
    const currentTime = selectedTime || recurrence;
    setRecurrence(currentTime);
  };

  const handleRegister = () => {
    console.log("Registering:", medicineName, durationDays);
  };

  const handleCancel = () => {
    console.log("Cancelling...");
    setMedicineName("");
    setDurationDays("");
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll_view}>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.header}>Cadastre seu Medicamento</Text>
          <TextInput
            placeholder="Nome"
            value={medicineName}
            onChangeText={handleUsernameChange}
            style={styles.text_input}
          />
          <TextInput
            placeholder="Dias de tratamento"
            value={durationDays}
            onChangeText={handleDurationDays}
            keyboardType="numeric"
            style={styles.text_input}
          />
          <View style={styles.time_picker}>
            {/* Time Picker */}
            {Platform.OS === "android" && (
              <Button title="Choose Time" onPress={() => setShow(true)} />
            )}
            <Text style={styles.text_label}>Horário de inicio:</Text>
            <DateTimePicker
              value={recurrence}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={(value, date) => handleRecurrence(date)}
            />
          </View>
        </View>
        <View style={styles.actions}>
          <Button title="Cancel" onPress={handleCancel} />
          <Button title="Save" disabled={!isEnabled} onPress={handleRegister} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ScheduleRegister;
