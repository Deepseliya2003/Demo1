import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, Button } from 'react-native';
import Styles from "./Styles";
import Fontisto from 'react-native-vector-icons/Fontisto';
import DatePicker from 'react-native-date-picker';
import { Dropdown } from "react-native-element-dropdown";

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },

];

class Home extends Component {
    state = {
        birthdate: new Date(),
        isDatePickerVisible: false,
        formattedDate: '',
        tempDate: new Date(),
        selectedGender: '',
        value: null,

    };

    showDatePicker = () => {
        this.setState({
            isDatePickerVisible: true,
            tempDate: this.state.birthdate
        });
    };

    hideDatePicker = () => {
        this.setState({ isDatePickerVisible: false });
    };

    handleConfirm = () => {
        this.setState({
            birthdate: this.state.tempDate,
            formattedDate: this.state.tempDate.toISOString().split('T')[0],
            isDatePickerVisible: false
        });
    };

    handleDateChange = (date) => {
        this.setState({ tempDate: date });
    };
    handleGenderSelect = (gender) => {
        this.setState({ selectedGender: gender });
    };


    render() {
        const { selectedGender } = this.state;
        const { value } = this.state;


        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={Styles.heading}>Registration Form</Text>
                <View style={Styles.wrapperview}>
                    <View style={{ flex: 1 }}>
                        <Text style={Styles.text}>First Name</Text>
                        <TextInput style={Styles.textinput} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={Styles.text}>Last Name</Text>
                        <TextInput style={Styles.textinput} />
                    </View>
                </View>
                <View style={[Styles.wrapperview, { marginVertical: 10 }]}>
                    <View style={{ flex: 1 }}>
                        <Text style={Styles.text}>Birthdate</Text>
                        <View style={{ position: 'relative' }}>
                            <TextInput
                                style={Styles.textinput}
                                value={this.state.formattedDate}
                                editable={false}
                            />
                            <TouchableOpacity
                                onPress={this.showDatePicker}
                                style={{ position: 'absolute', right: 10, top: 10 }}
                            >
                                <Fontisto name="date" size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Modal
                        transparent={true}
                        animationType="slide"
                        visible={this.state.isDatePickerVisible}
                        onRequestClose={this.hideDatePicker}
                    >
                        <View style={Styles.datapickerwrapperview}>
                            <View style={Styles.datapickerview}>
                                <DatePicker
                                    date={this.state.tempDate}
                                    onDateChange={this.handleDateChange}
                                    mode="date"
                                />
                                <Button title="Confirm" onPress={this.handleConfirm} />
                                <Button title="Cancel" onPress={this.hideDatePicker} />
                            </View>
                        </View>
                    </Modal>
                    <View style={{ flex: 1 }}>
                        <Text style={Styles.text}>Gender</Text>
                        <View style={Styles.genderview1}>
                            <View style={Styles.genderview2}>
                                <TouchableOpacity onPress={() => this.handleGenderSelect('male')}>
                                    <View style={[Styles.touchableview, { backgroundColor: selectedGender === 'male' ? "gray" : "transparent" }]}></View>
                                </TouchableOpacity>
                                <Text>Male</Text>
                            </View>
                            <View style={Styles.genderview3}>
                                <TouchableOpacity onPress={() => this.handleGenderSelect('female')}>

                                    <View style={[Styles.touchableview, { backgroundColor: selectedGender === 'female' ? "gray" : "transparent" }]}></View>
                                </TouchableOpacity>
                                <Text>Female</Text>
                            </View>

                        </View>
                    </View>

                </View>
                <View style={Styles.wrapperview}>
                    <View style={{ flex: 1 }}>
                        <Text style={Styles.text}>Email</Text>
                        <TextInput style={Styles.textinput} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={Styles.text}>Phone Number</Text>
                        <TextInput style={Styles.textinput} />
                    </View>
                </View>
                <View style={[Styles.wrapperview, { marginTop: 10 }]}>
                    <Text style={{ fontWeight: 'bold' }}>Subject</Text>

                </View>
                <Dropdown
                    style={Styles.dropdown}
                    placeholderStyle={Styles.placeholderStyle}
                    selectedTextStyle={Styles.selectedTextStyle}
                    inputSearchStyle={Styles.inputSearchStyle}
                    iconStyle={Styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Choose options"
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={(item) => {
                        this.setState({ value: item.value });
                    }}

                />

                    <View style={Styles.btnview}>
                        <Text style={Styles.btntext}>Submit</Text>
                    </View>

            </View>
        );
    }
}

export default Home;
